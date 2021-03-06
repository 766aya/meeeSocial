const process = require('process')
const path = require('path')
const fs = require('fs')
const { ERR_ARTICLE_NOT_EXIST, ERR_SERVER_INNER, SUCCESS, ERR_PARAM, ERR_PHOTO_EXT_INVALID, ERR_ASSERT_NOT_EXIST, ERR_OTH, ASSERTS_DIR, CONTENT_TYPE } = require('../../common/constant')
const { keccak256, stringToBuffer, Buffer } = require('../../common/util')
const _ = require('underscore')
const async = require('async')
const {checkCookie} = require("../user/cookie")
const {recordArticleClick, recordTagClick} = require('../monitor')

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
      code: ERR_ARTICLE_NOT_EXIST,
      msg: `article ${req.query.filename} not exists`
    })
  }

  // get article
  fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      return res.json({
        code: ERR_SERVER_INNER,
        msg: `read file is failed, ${err}`
      })
    }

    res.json({
      code: SUCCESS,
      msg: '',
      data: data
    })

    recordArticleClick(req.query.filename)
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

  let articles = process.articles;
  let total;
 
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

  // filter title
  let filteredTitleArticles = []
  for(let i = 0; i < filteredTagsArticles.length; i++)
  {
    if(filteredTagsArticles[i].title.indexOf(req.query.title) >= 0)
    {
      filteredTitleArticles.push(JSON.stringify(filteredTagsArticles[i]))
    }
  }

  total = filteredTitleArticles.length;

  // range
  filteredTitleArticles = filteredTitleArticles.splice(req.query.page * req.query.pageNum, req.query.pageNum);

  res.json({
    code: SUCCESS,
    msg: "",
    data: {
      total: total,
      data: filteredTitleArticles
    }
  });

  for(let i= 0; i < req.query.tags.length; i++)
  {
    recordTagClick(req.query.tags[i])
  }
  
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
      code: ERR_ARTICLE_NOT_EXIST,
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
          code: ERR_SERVER_INNER,
          msg: `del file is failed, ${err}`
        })
      }

      process.cache.update();

      res.json({
        code: SUCCESS,
        msg: ''
      })
    })
});

app.get('/getTags', function (req, res) {
  if (!req.query.num) {
    return res.json({
      code: ERR_PARAM,
      msg: 'invalid param, need num'
    })
  }

  res.json({
    code: SUCCESS,
    msg: '',
    data: process.tags.slice(0, req.query.num)
  })
});


app.get('/getHotArticles', function (req, res) {
  if (!req.query.num) {
    return res.json({
      code: ERR_PARAM,
      msg: 'invalid param, need num'
    })
  }

  res.json({
    code: SUCCESS,
    msg: '',
    data: process.hotArticles.slice(0, req.query.num)
  })
});

app.get('/getHotTags', function (req, res) {
  if (!req.query.num) {
    return res.json({
      code: ERR_PARAM,
      msg: 'invalid param, need num'
    })
  }

  res.json({
    code: SUCCESS,
    msg: '',
    data: process.hotTags.slice(0, req.query.num)
  })
});