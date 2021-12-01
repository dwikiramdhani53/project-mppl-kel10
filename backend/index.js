const express = require('express')
const { verifyToken } = require('./helper/jwt')
const users = require('./class/users')
const produk = require('./class/produk')
const Article = require('./class/Article')
const ServiceRoutes = require('./routes/ServiceRoutes')
const Community = require('./class/Community')

const app = express()
const port = process.env.PORT || 5000

app.use(express.urlencoded({ extended:true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.json("Welcome 🙌")
})

app.post('/register', users.insert)
app.delete('/delete', users.remove)
app.post('/login', users.login)
app.get('/products', produk.getAll)
app.get('/product', produk.getOne)
app.post('/insertProduct', produk.addProduk)

app.get('/AllArticle',Article.getAllArticle)
app.get('/AllArticleByAdmin',Article.getAllArticleByAdmin)
app.post('/OneArticle',Article.getOneArticle)
app.post('/AddArticle',Article.addArticle)
app.post('/EditArticle',Article.editArticle)
app.post('/DeleteArticle',Article.deleteArticle)

app.use('/Services',ServiceRoutes)

app.get('/AllCommunity',Community.getAllCommunity)
app.post('/OneCommunity',Community.getOneCommunity)
app.post('/AddCommunity',Community.addCommunity)
app.post('/DeleteCommunity',Community.deleteCommunity)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})