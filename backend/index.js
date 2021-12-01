const express = require('express')
const { verifyToken } = require('./helper/jwt')
const ArticleRoutes = require('./routes/ArticleRoutes')
const ServiceRoutes = require('./routes/ServiceRoutes')
const CommunityRoutes = require('./routes/CommunityRoutes')
const adminRoutes = require('./routes/adminRoutes')
const productRoutes = require('./routes/productRoutes')
const customerRoutes = require('./routes/customerRoutes')
const orderDetailRoutes = require('./routes/orderDetailRoutes')

const app = express()
const port = process.env.PORT || 5000

app.use(express.urlencoded({ extended:true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.json("Welcome 🙌")
})

app.use('/', adminRoutes)
app.use('/product', productRoutes)
app.use('/customer', customerRoutes)
app.use('/order-detail', orderDetailRoutes)
app.use('/Article',ArticleRoutes)
app.use('/Services',ServiceRoutes)
app.use('/Community',CommunityRoutes)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})