const process = require('process')
const path = require('path')
const fs = require('fs')
const { SUCCESS, ERR_PARAM, ERR_PHOTO_EXT_INVALID, ERR_ASSERT_NOT_EXIST, ERR_OTH, ASSERTS_DIR, CONTENT_TYPE } = require('../../common/constant')
const { keccak256, stringToBuffer, Buffer } = require('../../common/util')
const async = require("async")
const {checkCookie} = require("../user/cookie")

const app = process.app

app.post('/uploadArticle', checkCookie, function (req, res) {
  if (!req.body.data) {
    return res.json({
      code: ERR_PARAM,
      msg: 'invalid param, need data'
    })
  }

  //
  let detailJSON;

  // check type
  try {
    if (typeof req.body.data === 'string') {
      detailJSON = JSON.parse(req.body.data)
    } else {
      return res.json({
        code: ERR_OTH,
        msg: 'invalid argument type, argument data should be a JSON string'
      })
    }
  } catch {
    return res.json({
      code: ERR_OTH,
      msg: 'invalid argument type, argument data should be a JSON string'
    })
  }

  // check field
  if(!detailJSON.filename)
  {
    return res.json({
      code: ERR_OTH,
      msg: `invalid json string, need filename`
    })
  }

  if(!detailJSON.title)
  {
    return res.json({
      code: ERR_OTH,
      msg: `invalid json string, need title`
    })
  }

  if(!detailJSON.publisher)
  {
    return res.json({
      code: ERR_OTH,
      msg: `invalid json string, need publisher`
    })
  }

  if(!detailJSON.createTime)
  {
    return res.json({
      code: ERR_OTH,
      msg: `invalid json string, need createTime`
    })
  }

  if(!detailJSON.updateTime)
  {
    return res.json({
      code: ERR_OTH,
      msg: `invalid json string, need updateTime`
    })
  }

  if(!detailJSON.img)
  {
    return res.json({
      code: ERR_OTH,
      msg: `invalid json string, need img`
    })
  }

  if(!detailJSON.desc)
  {
    return res.json({
      code: ERR_OTH,
      msg: `invalid json string, need desc`
    })
  }

  if(!detailJSON.tips || !Array.isArray(detailJSON.tips))
  {
    return res.json({
      code: ERR_OTH,
      msg: `invalid json string, need tips`
    })
  }

  // generate detail
  const fileName = Date.now() + "_" + keccak256(stringToBuffer(req.body.data)).toString('hex') + '.article'
  const filePath = path.join(ASSERTS_DIR, fileName)
  detailJSON.filename = fileName;

  // check filepath
  try {
    fs.accessSync(filePath, fs.constants.F_OK)
  } catch {
    const EXIST_CODE = 1;

    async.waterfall([
      function(cb) {
        // save article detail
        fs.writeFile(filePath, JSON.stringify(detailJSON), function (err) {
          if (!!err) {
            res.json({
              code: ERR_OTH,
              msg: `write detail article is failed, ${err}`
            })

            return cb(EXIST_CODE)
          }

          cb()
        })
      },
      function(cb) {
        // generate breviary
        const breviaryFileName = fileName.split('.', 1)[0] + ".breviaryArticle"
        const breviaryFilePath = path.join(ASSERTS_DIR, breviaryFileName)
        let breviaryJSON = {
          "filename": detailJSON.filename,
          "title": detailJSON.title,
          "publisher": detailJSON.publisher,
          "createTime": detailJSON.createTime,
          "updateTime": detailJSON.updateTime,
          "img": detailJSON.img,
          "desc": detailJSON.desc,
          "tips": detailJSON.tips
        }

        // save article breviary
        fs.writeFile(breviaryFilePath, JSON.stringify(breviaryJSON), function (err) {
          if (!!err) {
            res.json({
              code: ERR_OTH,
              msg: `write breviary article is failed, ${err}`
            })

            return cb(EXIST_CODE)
          }

          cb()
        })
      }], err => {
        if(!!err) {
          return;
        }

        res.json({
          code: SUCCESS,
          msg: '',
          data: fileName
        })
      })

    return;
  }

  res.json({
    code: ERR_OTH,
    msg: `article ${fileName} has exists`
  })
})

app.post('/updateArticle', checkCookie, function (req, res) {
  if (!req.body.data) {
    return res.json({
      code: ERR_PARAM,
      msg: 'invalid param, need data'
    })
  }

  //
  let detailJSON;

  // check type
  try {
    if (typeof req.body.data === 'string') {
      detailJSON = JSON.parse(req.body.data)
    } else {
      return res.json({
        code: ERR_OTH,
        msg: 'invalid argument type, argument data should be a JSON string'
      })
    }
  } catch {
    return res.json({
      code: ERR_OTH,
      msg: 'invalid argument type, argument data should be a JSON string'
    })
  }

  // check field
  if(!detailJSON.filename)
  {
    return res.json({
      code: ERR_OTH,
      msg: `invalid json string, need filename`
    })
  }

  if(!detailJSON.title)
  {
    return res.json({
      code: ERR_OTH,
      msg: `invalid json string, need title`
    })
  }

  if(!detailJSON.publisher)
  {
    return res.json({
      code: ERR_OTH,
      msg: `invalid json string, need publisher`
    })
  }

  if(!detailJSON.createTime)
  {
    return res.json({
      code: ERR_OTH,
      msg: `invalid json string, need createTime`
    })
  }

  if(!detailJSON.updateTime)
  {
    return res.json({
      code: ERR_OTH,
      msg: `invalid json string, need updateTime`
    })
  }

  if(!detailJSON.img)
  {
    return res.json({
      code: ERR_OTH,
      msg: `invalid json string, need img`
    })
  }

  if(!detailJSON.desc)
  {
    return res.json({
      code: ERR_OTH,
      msg: `invalid json string, need desc`
    })
  }

  if(!detailJSON.tips || !Array.isArray(detailJSON.tips))
  {
    return res.json({
      code: ERR_OTH,
      msg: `invalid json string, need tips`
    })
  }

  // check ext
  const ext = path.extname(detailJSON.filename).substr(1)
  if (ext !== "article") {
    return res.json({
      code: ERR_OTH,
      msg: "invalid ext, should be .aritcle"
    })
  }

  const filePath = path.join(ASSERTS_DIR, detailJSON.filename)

  // check filepath
  try {
    fs.accessSync(filePath, fs.constants.F_OK)
  } catch {
    return res.json({
      code: ERR_OTH,
      msg: `article ${detailJSON.filename} not exists`
    })
  }

  // generate breviary
  const breviaryFileName = detailJSON.filename.split('.', 1)[0] + ".breviaryArticle"
  const breviaryFilePath = path.join(ASSERTS_DIR, breviaryFileName)

  let breviaryJSON = {
    "filename": detailJSON.filename,
    "title": detailJSON.title,
    "publisher": detailJSON.publisher,
    "createTime": detailJSON.createTime,
    "updateTime": detailJSON.updateTime,
    "img": detailJSON.img,
    "desc": detailJSON.desc,
    "tips": detailJSON.tips
  }

  const EXIST_CODE = 1;
  async.waterfall([
      function(cb) {
        // save article detail
        fs.writeFile(filePath, req.body.data, function (err) {
          if (!!err) {
            res.json({
              code: ERR_OTH,
              msg: `write detail article is failed, ${err}`
            })

            return cb(EXIST_CODE)
          }

          cb()
        })
      },
      function(cb) {
        // save article breviary
        fs.writeFile(breviaryFilePath, JSON.stringify(breviaryJSON), function (err) {
          if (!!err) {
            res.json({
              code: ERR_OTH,
              msg: `write breviary article is failed, ${err}`
            })

            return cb(EXIST_CODE)
          }

          cb()
        })
      }], err => {
        if(!!err) {
          return;
        }

        res.json({
          code: SUCCESS,
          msg: ''
        })
      })
})
