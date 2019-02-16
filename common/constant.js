const path = require('path')

module.exports.SUCCESS = 0
module.exports.ERR_PARAM = 1
module.exports.ERR_PHOTO_EXT_INVALID = 2
module.exports.ERR_ASSERT_NOT_EXIST = 3
module.exports.ERR_ASSERT_HAS_EXIST = 4
module.exports.ERR_SERVER_INNER = 5
module.exports.ERR_ARTICLE_NOT_EXIST = 6
module.exports.ERR_ARTICLE_HAS_EXIST = 7
module.exports.ERR_COOKIE_INVALID = 7
module.exports.ERR_LOGIN_FAILED = 8
module.exports.ERR_OTH = 10

module.exports.ASSERTS_DIR = path.join(__dirname, '../server/asserts')
module.exports.TMP_DIR = path.join(__dirname, '../server/tmp')

module.exports.CONTENT_TYPE = {
  'png': 'image/png',
  'jpg': 'image/jpeg',
}

module.exports.USER = 'root'
module.exports.PASSWORD = '!@#$%^&*()qwertyuiop'

module.exports.MONITOR_ARTICLE_KEY_PREFIX = 'article_'
module.exports.MONITOR_TAG_KEY_PREFIX = 'tag_'
