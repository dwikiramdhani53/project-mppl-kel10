const express = require('express')
const Article = require('../class/Article')
const router = express.Router()

router.get('/all',Article.getAllArticle)
router.post('/byAdmin',Article.getAllArticleByAdmin)
router.post('/one',Article.getOneArticle)
router.post('/add',Article.addArticle)
router.post('/edit',Article.editArticle)
router.post('/delete',Article.deleteArticle)

module.exports = router