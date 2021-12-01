const express = require('express')
const { verifyToken } = require('./helper/jwt')
const users = require('./class/users')
const produk = require('./class/produk')
const ArticleRoutes = require('./routes/ArticleRoutes')
const ServiceRoutes = require('./routes/ServiceRoutes')
const CommunityRoutes = require('./routes/CommunityRoutes')

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

app.use('/Article',ArticleRoutes)
app.use('/Services',ServiceRoutes)
app.use('/Community',CommunityRoutes)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})