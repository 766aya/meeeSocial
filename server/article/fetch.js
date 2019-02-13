const process = require('process')
const path = require('path')
const fs = require('fs')
const { SUCCESS, ERR_PARAM, ERR_PHOTO_EXT_INVALID, ERR_ASSERT_NOT_EXIST, ERR_OTH, ASSERTS_DIR, CONTENT_TYPE } = require('../../common/constant')
const { keccak256, stringToBuffer, Buffer } = require('../../common/util')

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
})

app.get('/getBreviaryArticle', function (req, res) {

})

app.get('/getBreviaryArticleList', function (req, res) {

})
