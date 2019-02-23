const process = require('process')
const express = require('express')
const bodyParser = require('body-parser')
const async = require('async')
const path = require('path')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser')
const { SUCCESS, ERR_PARAM, ERR_PHOTO_EXT_INVALID, ERR_ASSERT_NOT_EXIST, ERR_OTH, ASSERTS_DIR, CONTENT_TYPE } = require('../common/constant')
const Stoplight = require('flow-stoplight')
const cache = require('./cache')
const levelup = require('levelup')
const leveldown = require('leveldown')

const log4js = require('./logConfig')
const logger = log4js.getLogger()
const errlogger = log4js.getLogger('err')
const othlogger = log4js.getLogger('oth')

// express
const app = express()
app.use('/', express.static(path.resolve('dist')))
app.use(cookieParser())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json({ limit: '20mb' }))
app.use(passport.initialize())

// 
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', '3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

//
process.passport = passport
process.app = app
process.cookie = ""
process.stoplight = new Stoplight()
process.cache = cache
process.articles = []
process.tags = []
process.db = levelup(leveldown('./server/mydb'))
process.hotArticles = [];
process.hotTags = []

// logger
log4js.useLogger(app, logger)

//
process.on('uncaughtException', function (err) {
  errlogger.error(err.stack)
})

require('./user')
require('./article')
require('./photo')

// init cache
cache.initFsCache()
cache.initDbCache()

process.stoplight.await(() => {
  const server = app.listen(8080, function () {
    let host = server.address().address
    console.log('server listening at http://%s:%s', host, 8080)
  })
})

