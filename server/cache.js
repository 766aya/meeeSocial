const process = require('process')
const path = require('path')
const fs = require('fs')
const { MONITOR_ARTICLE_KEY_PREFIX, MONITOR_TAG_KEY_PREFIX, ERR_ARTICLE_NOT_EXIST, ERR_SERVER_INNER, SUCCESS, ERR_PARAM, ERR_PHOTO_EXT_INVALID, ERR_ASSERT_NOT_EXIST, ERR_OTH, ASSERTS_DIR, CONTENT_TYPE } = require('../common/constant')
const _ = require('underscore')
const async = require('async')

module.exports.update = module.exports.initFsCache = function(cb)
{
	let fileNames = [];
	let articles = [];

	let tagsMap = {}
	let tags = [];

	async.waterfall([
 	function(cb) {
      fs.readdir(ASSERTS_DIR, (err, files) => {
        if(!!err)
        {
          return cb(err);
        }

        // filter photoes
        for(let i = 0; i < files.length; i++)
        {
          let fileName = files[i].toString();
          // check ext
          const ext = path.extname(fileName).substr(1)
          if(ext === "breviaryArticle")
          {
            const date = fileName.split('_', 1)[0]
            fileNames.push({
              date: date,
              fileName: fileName
            });
          }
        }

        // sort
        fileNames = _.sortBy(fileNames, fileName => {
          return -fileName.date;
        });

        cb();
      });
    },
    function(cb) {
      // get articles and tags
      try
      {
        fileNames.forEach(fileName => {
          let filePath = path.join(ASSERTS_DIR, fileName.fileName)
          let article = JSON.parse(fs.readFileSync(filePath, {encoding: "utf8"}))

          // record article
          articles.push(article);

          // compute tag
          for(let i = 0; i < article.tips.length; i++)
          {
          	let tag = article.tips[i]

          	if(!tagsMap[tag])
          	{
          		tagsMap[tag] = 1
          	}
          	else
          	{
          		tagsMap[tag]++
          	}
          }
        })

        // convert to array
		let tagArray = [];
		for(let key in tagsMap)
		{
			tagArray.push({
				name: key,
				num: tagsMap[key]
			})
		}

		// sort tag
		let sortedTags = _.sortBy(tagArray, tag => {
			return -tag.num
		})

		console.log("sortedTags: " + JSON.stringify(sortedTags))

		// 
		sortedTags.forEach(sortedTag => {
			tags.push(sortedTag.name)
		})

        cb();
      }
      catch(err)
      {
        return cb(err);
      }
    }], err => {
    	if(!!err)
    	{
    		throw new Error(`init cache failed, ${err}`)
    	}

    	process.articles = articles
    	process.tags = tags

    	process.stoplight.go();
    })
}

module.exports.initDbCache = function()
{
	init()

	setInterval(() => {
		init()
	}, 60 * 1000)
	
	function init()
	{
		let artilces = []
		let tags = []

		process.hotArticles = [];
		process.hotTags = []

		process.db.createReadStream()
		.on('data', function (data) {
			let key = data.key.toString()
			let value = JSON.parse(data.value.toString())

			let prefixIndex = key.indexOf('_')
			let prefix = key.substr(0, prefixIndex);
			value.name = key.substr(prefixIndex + 1);

			if(prefix + '_' === MONITOR_ARTICLE_KEY_PREFIX)
			{
				artilces.push(value)
			}
			else if(prefix + '_' === MONITOR_TAG_KEY_PREFIX)
			{
				tags.push(value)
			}
			else
			{
				throw new Error(`db is dirty, invalid prefix ${prefix}`)
			}
		})
		.on('error', function (err) {
			throw new Error(`db createReadStream failed, ${err}`)
		})
		.on('close', function () {
			//
			artilces =_.sortBy(artilces, article => {
				return - (article.clickNum * article.priority)
			})

			//
			tags =_.sortBy(tags, tag => {
				return - (tag.clickNum * tag.priority)
			})

			console.log("sortedHotArticles: " + JSON.stringify(artilces))

			console.log("sortedHotTags: " + JSON.stringify(tags))

			//
			artilces.forEach(artilce => {
				process.hotArticles.push(artilce.name)
			})

			//
			tags.forEach(tag => {
				process.hotTags.push(tag.name)
			})
		})
		.on('end', function () {
			
		})
	}
}