const pool = require('../helper/database')
const { response } = require('../helper/bcrypt')

const getAll = (req, res) => {
    pool.query('select * from produk', (err, result) => {
        if(err) {
            return response(res, {
                code: 500,
                success: false,
                message: err.message || 'Something went wrong!',
                content: err
            })
        }

        return response(res, {
            code: 200,
            success: true,
            message: 'Success get all produk',
            content: result.rows,
        })
    })
}

const getOne = (req, res) => {
    const { nama_produk } = req.body

    pool.query('select * from produk where nama_produk = $1', [nama_produk], (err, result) => {
        if(err) {
            return response(res, {
                code: 500,
                success: false,
                message: err.message || 'Something went wrong!',
                content: err
            })
        }

        if(result.rowCount == 0) {
            return response(res, {
                code: 501,
                success: false,
                message: 'produk not found'
            })
        }

        return response(res, {
            code: 200,
            success: true,
            message: `Success get ${nama_produk} data`,
            content: result.rows[0],
        })
    })
}

const addProduk = (req, res) => {
    const { nama_produk, deskripsi } = req.body

    pool.query('insert into produk(nama_produk, deskripsi) values($1, $2)', [nama_produk, deskripsi], (err, result) => {
        if(err) {
            return response(res, {
                code: 500,
                success: false,
                message: err.message || 'Something went wrong!',
                content: err
            })
        }

        return response(res, {
            code: 200,
            status: true,
            message: `Produk ${nama_produk} successfully added!`,
            content: { nama_produk, deskripsi }
        })
    })
}

module.exports = { getAll, getOne, addProduk }