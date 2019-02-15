const process = require('process')
const path = require('path')
const fs = require('fs')
const { SUCCESS, ERR_PARAM, ERR_PHOTO_EXT_INVALID, ERR_ASSERT_NOT_EXIST, ERR_OTH, ASSERTS_DIR, CONTENT_TYPE } = require('../../common/constant')
const { keccak256, stringToBuffer, Buffer } = require('../../common/util')
const _ = require('underscore')
const async = require('async')
const {checkCookie} = require("../user/cookie")

const app = process.app

app.get('/getArticle', function (req, res) {
  if (!req.query.filename) {
    return res.json({
      code: ERR_PARAM,
      msg: 'invalid param, need filename'
    })
  }

  const filePath = path.join(ASSERTS_DIR, req.query.filename)

  // check filepath
  try {
    fs.accessSync(filePath, fs.constants.F_OK)
  } catch {
    return res.json({
      code: ERR_OTH,
      msg: `article ${req.query.filename} not exists`
    })
  }

  // get article
  fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      return res.json({
        code: ERR_OTH,
        msg: `read file is failed, ${err}`
      })
    }

    res.json({
      code: SUCCESS,
      msg: '',
      data: data
    })
  })
});

app.get('/getBreviaryArticleList', function (req, res) {

  if(!req.query.page) {
    return res.json({
      code: ERR_PARAM,
      msg: 'invalid param, need page'
    })
  }


  if(!req.query.pageNum) {
    return res.json({
      code: ERR_PARAM,
      msg: 'invalid param, need pageNum'
    })
  }


  req.query.title = req.query.title || ""

  req.query.tags = req.query.tags || "[]"

  // parse tags
  try
  {
    req.query.tags = JSON.parse(req.query.tags);
  }
  catch
  {
    return res.json({
      code: ERR_PARAM,
      msg: 'invalid param, param tags must be an array string'
    })
  }

  // check tags
  if(!Array.isArray(req.query.tags))
  {
    return res.json({
      code: ERR_PARAM,
      msg: 'invalid param, param tags must be an array'
    })
  }

  let fileNames = [];
  let articles = [];
  let total;
  async.waterfall([
    function(cb) {
      fs.readdir(ASSERTS_DIR, (err, files) => {
        if(!!err)
        {
          cb(err);
        }

        // filter photoes
        for(let i = 0; i < files.length; i++)
        {
          let fileName = files[i].toString();
          // check ext
          const ext = path.extname(fileName).substr(1)
          if(ext === "breviaryArticle")
          {
            const date = fileName.split('_', 1)[0]
            fileNames.push({
              date: date,
              fileName: fileName
            });
          }
        }

        total = fileNames.length;

        // sort
        fileNames = _.sortBy(fileNames, article => {
          return -article.date;
        });

        // range
        fileNames = fileNames.splice(req.query.page * req.query.pageNum, req.query.pageNum);

        cb();
      });
    },
    function(cb) {
      try
      {
        fileNames.forEach(article => {
          let filePath = path.join(ASSERTS_DIR, article.fileName)
          articles.push(JSON.parse(fs.readFileSync(filePath, {encoding: "utf8"})));
        })

        cb();
      }
      catch(err)
      {
        return cb(err);
      }
      
    }], err => {
      if(!!err)
      {
        return res.json({
          code: ERR_OTH,
          msg: `fetch article list failed, ${err}`
        });
      }

      // filter tags
      let filteredTagsArticles = []
      let i, j, z
      for(i = 0; i < articles.length; i++)
      {
        for(j = 0; j < req.query.tags.length; j++)
        {
          for(z = 0; z < articles[i].tips.length; z++)
          {
            if(articles[i].tips[z] === req.query.tags[j])
            {
              break;
            }
          }

          // not found
          if(z === articles[i].tips.length)
          {
            break;
          }
        }

        // full match
        if(j === req.query.tags.length)
        {
          filteredTagsArticles.push(articles[i])
        }
      }

      let filteredTitleArticles = []
      // filter title
      for(let i = 0; i < filteredTagsArticles.length; i++)
      {
        if(filteredTagsArticles[i].title.indexOf(req.query.title) >= 0)
        {
          filteredTitleArticles.push(JSON.stringify(filteredTagsArticles[i]))
        }
      }

      res.json({
        code: SUCCESS,
        msg: "",
        data: {
          total: total,
          data: filteredTitleArticles
        }
      });
    })
})


app.get('/delArticle', checkCookie, function (req, res) {
  if (!req.query.filename) {
    return res.json({
      code: ERR_PARAM,
      msg: 'invalid param, need filename'
    })
  }

  const filePath = path.join(ASSERTS_DIR, req.query.filename)

  // check filepath
  try {
    fs.accessSync(filePath, fs.constants.F_OK)
  } catch {
    return res.json({
      code: ERR_OTH,
      msg: `article ${req.query.filename} not exists`
    })
  }

  // del article
  async.waterfall([
    function(cb) {
      fs.unlink(filePath, cb)
    },
    function(cb) {
      // generate breviary
      const breviaryFileName = req.query.filename.split('.', 1)[0] + ".breviaryArticle"
      const breviaryFilePath = path.join(ASSERTS_DIR, breviaryFileName)
    
      fs.unlink(breviaryFilePath, cb)
    }], err => {
      if (!!err) {
        return res.json({
          code: ERR_OTH,
          msg: `del file is failed, ${err}`
        })
      }

      res.json({
        code: SUCCESS,
        msg: ''
      })
    })
});