const path = require('path')

module.exports.SUCCESS = 0
module.exports.ERR_PARAM = 1
module.exports.ERR_PHOTO_EXT_INVALID = 2
module.exports.ERR_ASSERT_NOT_EXIST = 3
module.exports.ERR_ASSERT_HAS_EXIST = 4
module.exports.ERR_OTH = 10

module.exports.ASSERTS_DIR = path.join(__dirname, '../server/asserts')
module.exports.TMP_DIR = path.join(__dirname, '../server/tmp')

module.exports.CONTENT_TYPE = {
  'png': 'image/png',
  'jpg': 'image/jpeg'
}

module.exports.USER = "root"
module.exports.PASSWORD = "!@#$%^&*()qwertyuiop"
