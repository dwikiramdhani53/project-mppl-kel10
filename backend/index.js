const express = require('express')
const { verifyToken } = require('./helper/jwt')
const users = require('./routes/users')
const produk = require('./routes/produk')
const artikel = require('./routes/artikel')

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
app.get('/artikels',artikel.AllArtikel)
app.post('/artikel',artikel.OneArtikel)
app.post('/insertArtikel',artikel.AddArtikel)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})