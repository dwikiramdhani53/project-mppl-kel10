const express = require('express')
const { verifyToken } = require('./helper/jwt')
const users = require('./routes/users')
const produk = require('./routes/produk')
const artikel = require('./routes/artikel')
const layanan = require('./routes/layanan')
const komunitas = require('./routes/komunitas')

const app = express()
const port = 3000

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
app.post('/artikel/insert',artikel.AddArtikel)
app.get('/layanans',layanan.AllLayanan)
app.post('/layanan',layanan.OneLayanan)
app.get('/komunitass',komunitas.AllKomunitas)
app.post('/komunitas',komunitas.OneKomunitas)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})