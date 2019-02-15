const process = require('process')
const path = require('path')
const fs = require('fs')
const Gm = require('gm').subClass({ imageMagick: true }) // use imageMagick as photo processor
const { ERR_SERVER_INNER, ERR_PARAM, ERR_PHOTO_EXT_INVALID, ERR_ASSERT_NOT_EXIST, ERR_OTH, ASSERTS_DIR, CONTENT_TYPE } = require('../../common/constant')

const app = process.app

app.get('/getPhoto', function (req, res) {
  if (!req.query.filename) {
    return res.json({
      code: ERR_PARAM,
      msg: 'invalid param, need filename'
    })
  }

  // check ext
  const ext = path.extname(req.query.filename).substr(1)
  if (!CONTENT_TYPE[ext]) {
    return res.json({
      code: ERR_PHOTO_EXT_INVALID,
      msg: `invalid photo ext, support ${Object.keys(CONTENT_TYPE)}`
    })
  }

  //
  const filePath = path.join(ASSERTS_DIR, req.query.filename)

  // check file dir
  try {
    fs.accessSync(filePath, fs.constants.F_OK)
  } catch {
    return res.json({
      code: ERR_ASSERT_NOT_EXIST,
      msg: `photo ${req.query.filename} not exists`
    })
  }

  // send photo
  res.set('Content-Type', CONTENT_TYPE[ext])
  res.sendFile(filePath)
})

app.get('/getBreviaryPhoto', function (req, res) {
  if (!req.query.width) {
    return res.json({
      code: ERR_PARAM,
      msg: 'invalid param, need width'
    })
  }

  if (!req.query.height) {
    return res.json({
      code: ERR_PARAM,
      msg: 'invalid param, need height'
    })
  }

  if (!req.query.filename) {
    return res.json({
      code: ERR_PARAM,
      msg: 'invalid param, need filename'
    })
  }

  // check ext
  const ext = path.extname(req.query.filename).substr(1)
  if (!CONTENT_TYPE[ext]) {
    return res.json({
      code: ERR_PHOTO_EXT_INVALID,
      msg: `invalid photo ext, support ${Object.keys(CONTENT_TYPE)}`
    })
  }

  //
  const filePath = path.join(ASSERTS_DIR, req.query.filename)

  // check file dir
  try {
    fs.accessSync(filePath, fs.constants.F_OK)
  } catch {
    return res.json({
      code: ERR_ASSERT_NOT_EXIST,
      msg: `photo ${req.query.filename} not exists`
    })
  }

  // adjust photo size
  const gm = Gm(filePath)
  if (req.query.width > 0 && req.query.height > 0) {
    gm.resize(req.query.width, req.query.height)
  } else {
    return res.json({
      code: ERR_PARAM,
      msg: `width: ${req.query.width} and height: ${req.query.height} must bigger than zero`
    })
  }

  // get photo
  gm.toBuffer(function (err, buffer) {
    if (err) {
      return res.json({
        code: ERR_SERVER_INNER,
        msg: `adjust photo size is failed ${err}`
      })
    }

    res.set('Content-Type', CONTENT_TYPE[ext])
    res.send(buffer)
  })
})
