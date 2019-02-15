const process = require('process')
const path = require('path')
const fs = require('fs')
const Gm = require('gm').subClass({ imageMagick: true }) // use imageMagick as photo processor
const { ERR_SERVER_INNER, SUCCESS, ERR_PARAM, ERR_PHOTO_EXT_INVALID, ERR_ASSERT_HAS_EXIST, ERR_OTH, ASSERTS_DIR, TMP_DIR, CONTENT_TYPE } = require('../../common/constant')
const { keccak256, stringToBuffer, Buffer } = require('../../common/util')
const multiparty = require('multiparty')
const {checkCookie} = require("../user/cookie")

const app = process.app

app.post('/uploadPhoto', checkCookie, function (req, res) {
  let ext = null
  let fileData = []

  const EACH_READ_SIZE = 2048

  // parse a file upload
  var form = new multiparty.Form()

  form.on('error', function (err) {
    res.json({
      code: ERR_SERVER_INNER,
      msg: `upload file is failed, ${err}`
    })
  })

  form.on('part', function (part) {
    if (part.filename) {
      // get ext
      ext = path.extname(part.filename).substr(1)
      // get data
      part.on('data', chunk => {
        fileData.push(chunk)
      })
    }

    part.resume()

    part.on('error', function (err) {
      form.emit('error', `part failed, ${err}`)
    })
  })

  form.on('close', function () {
    if (!fileData.length) {
      return res.json({
        code: ERR_PARAM,
        msg: 'invalid param, need data'
      })
    }

    // check ext
    if (!CONTENT_TYPE[ext]) {
      return res.json({
        code: ERR_PHOTO_EXT_INVALID,
        msg: `invalid photo ext, support ${Object.keys(CONTENT_TYPE)}`
      })
    }

    // tranlate
    fileData = Buffer.concat(fileData)

    // generate filepath
    const fileName = keccak256(stringToBuffer(fileData.toString('hex') + Date.now())).toString('hex') + '.' + ext
    const filePath = path.join(ASSERTS_DIR, fileName)

    // check filepath
    try {
      fs.accessSync(filePath, fs.constants.F_OK)
    } catch {
      // save photo
      const gm = Gm(fileData)
      gm.write(filePath, function (err) {
        if (err) {
          return res.json({
            code: ERR_SERVER_INNER,
            msg: `gm write is failed, ${err}`
          })
        }

        res.json({
          code: SUCCESS,
          msg: '',
          data: fileName
        })
      })

      return
    }

    return res.json({
      code: ERR_ASSERT_HAS_EXIST,
      msg: `photo ${filePath} has exists`
    })
  })

  form.parse(req)
})
