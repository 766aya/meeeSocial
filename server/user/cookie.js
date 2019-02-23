const process = require('process')
const cookie = require('cookie');
const { ERR_COOKIE_INVALID, SUCCESS, ERR_PARAM, ERR_PHOTO_EXT_INVALID, ERR_ASSERT_HAS_EXIST, ERR_OTH, ASSERTS_DIR, TMP_DIR, CONTENT_TYPE } = require('../../common/constant')

module.exports.checkCookie = function (req, res, next) {
  // Parse the cookies on the request
  var cookies = cookie.parse(req.headers.cookie || '');

  // Get the visitor sid set in the cookie
  var sid = cookies.sid;

  if(process.sid && sid === process.sid)
  {
    return next();
  }

  res.json({
    code: ERR_COOKIE_INVALID,
    msg: "please login first"
  });
}