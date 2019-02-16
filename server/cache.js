const process = require('process')
const path = require('path')
const fs = require('fs')
const { ERR_ARTICLE_NOT_EXIST, ERR_SERVER_INNER, SUCCESS, ERR_PARAM, ERR_PHOTO_EXT_INVALID, ERR_ASSERT_NOT_EXIST, ERR_OTH, ASSERTS_DIR, CONTENT_TYPE } = require('../common/constant')
const _ = require('underscore')
const async = require('async')

module.exports.update = module.exports.init = function(cb)
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
		tags = _.sortBy(tagArray, tag => {
			return -tag.num
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