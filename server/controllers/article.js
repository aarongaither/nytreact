const router = require("express").Router();
const Article = require('../models/Article')

router.get('/', (req, res) => {
	Article.find({}).sort({ created_at: -1 }).exec((err, doc) => {
	    err ? console.log(err.errmsg) : res.send(doc);
	})
})

router.post('/', (req, res) => {
	Article.create(req.body, (err, doc) => {
		err ? console.log(err.errmsg) : res.send(doc)
	})
})

router.delete('/', (req, res) => {
	Article.remove({article_id: req.query.id}).exec((err, doc) => {
		err ? console.log(err.errmsg) : res.send(doc)
	})
})

module.exports = router;