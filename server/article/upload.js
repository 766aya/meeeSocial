const process = require('process')
const path = require('path')
const fs = require('fs')
const { SUCCESS, ERR_PARAM, ERR_PHOTO_EXT_INVALID, ERR_ASSERT_NOT_EXIST, ERR_OTH, ASSERTS_DIR, CONTENT_TYPE } = require('../../common/constant')
const { keccak256, stringToBuffer, Buffer } = require('../../common/util')

const app = process.app

app.post('/uploadArticle', function (req, res) {
  if (!req.body.data) {
    return res.json({
      code: ERR_PARAM,
      msg: 'invalid param, need data'
    })
  }

  // check
  try {
    if (typeof req.body.data === 'string') {
      JSON.parse(req.body.data)
    } else if (typeof req.body.data === 'object') {
      req.body.data = JSON.stringify(req.body.data)
    } else {
      return res.json({
        code: ERR_OTH,
        msg: 'invalid argument type, argument data should be a JSON string or object'
      })
    }
  } catch {
    return res.json({
      code: ERR_OTH,
      msg: 'invalid argument type, argument data should be a JSON string or object'
    })
  }

  //
  const fileName = Date.now() + "_" + keccak256(stringToBuffer(req.body.data)).toString('hex') + '.article'
  const filePath = path.join(ASSERTS_DIR, fileName)

  // check filepath
  try {
    fs.accessSync(filePath, fs.constants.F_OK)
  } catch {
    // save article
    fs.writeFile(filePath, req.body.data, function (err) {
      if (err) {
        return res.json({
          code: ERR_OTH,
          msg: `write file is failed, ${err}`
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

  res.json({
    code: ERR_OTH,
    msg: `article ${fileName} has exists`
  })
})
