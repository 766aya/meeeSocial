const process = require('process')
const LocalStrategy = require('passport-local').Strategy;
const { SUCCESS, ERR_PARAM, ERR_PHOTO_EXT_INVALID, ERR_ASSERT_NOT_EXIST, ERR_OTH, ASSERTS_DIR, CONTENT_TYPE, USER, PASSWORD } = require('../../common/constant')
const { keccak256, stringToBuffer, Buffer } = require('../../common/util')
const cookie = require('cookie');

const app = process.app
const passport = process.passport

// password
passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  },

  function(username, password, done) {
    if(username !== USER)
    {
      return done(null, { message: 'Incorrect username.' });
    }

    if(password !== PASSWORD)
    {
      return done(null, { message: 'Incorrect password.' });
    }

    return done(null, null)
  }
));

app.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, info) {
    if (err) 
    { 
      return res.json({
        code: ERR_OTH,
        msg: `login failed, inner err, ${err}`
      });
    }

    if(info)
    {
      return res.json({
        code: ERR_OTH,
        msg: `login failed, ${info.message}`
      });
    }

    process.sid = keccak256(stringToBuffer(USER + PASSWORD + Date.now())).toString("hex")

    // Set a new cookie with the name
    res.setHeader('Set-Cookie', cookie.serialize("sid", process.sid, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7 // 1 week
    }));

    // Redirect back after setting cookie
    res.statusCode = 302;
    res.setHeader('Location', req.headers.referer || '/manage/acticel');
    res.end();

  })(req, res, next);
});