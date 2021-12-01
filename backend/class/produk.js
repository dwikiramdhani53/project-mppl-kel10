const pool = require('../helper/database')
const { response } = require('../helper/bcrypt')

const getAllProduct = (req, res) => {
    pool.query('select * from public."Products"', (err, result) => {
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

const getAllProductByAdmin = (req, res) => {
    const { admin_id } = req.body

    pool.query('select * from public."Products" where admin_id = $1', [admin_id], (err, result) => {
        if (err) {
            throw err;
        }

        if (result.rowCount == 0) {
            return result(res, {
                code: 404,
                success: false,
                message: `admin dengan id ${admin_id} belum memiliki produk`
            })
        }

        return response(res, {
            code: 200,
            success: true,
            message: `Produk dengan admin_id ${admin_id} berhasil didapatkan`,
            content: result.rows,
        })
    })
}

const getOneProduct = (req, res) => {
    const { ProductName } = req.body

    pool.query('select * from public."Products" where "ProductName" = $1', [ProductName], (err, result) => {
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
            message: `Success get ${ProductName} data`,
            content: result.rows[0],
        })
    })
}

const addProduct = (req, res) => {
    const { ProductName, ProductDescription, ProductStock, ProductPrice, ProductWeight, ProductOrigin, admin_id } = req.body

    pool.query('insert into public."Products"("ProductName", "ProductDescription", "ProductStock", "ProductPrice", "ProductWeight", "ProductOrigin", admin_id) values($1, $2, $3, $4, $5, $6, $7)', [ProductName, ProductDescription, ProductStock, ProductPrice, ProductWeight, ProductOrigin, admin_id], (err, result) => {
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
            message: `Produk ${ProductName} successfully added!`,
            content: { ProductName, ProductDescription, ProductStock, ProductPrice, ProductWeight, ProductOrigin }
        })
    })
}

const editProduct = (req, res) => {
    const { ProductName, ProductDescription, ProductStock, ProductPrice, ProductWeight, ProductOrigin, admin_id, prod_id } = req.body

    pool.query('update public."Products" set "ProductName" = $1, "ProductDescription" = $2, "ProductStock" = $3, "ProductPrice" = $4, "ProductWeight" = $5, "ProductOrigin" = $6 where prod_id = $8 and admin_id = $7', [ProductName, ProductDescription, ProductStock, ProductPrice, ProductWeight, ProductOrigin, admin_id, prod_id], (err, result) => {
        if (err) {
            return response(res, {
                code: 500,
                success: false,
                message: 'something went wrong!',
                content: err
            })
        }
    })

    return response(res, {
        code: 200,
        success: true,
        message: `${ProductName} berhasil diubah`,
        content: { ProductName, ProductDescription, ProductStock, ProductPrice, ProductWeight, ProductOrigin }
    })
}

const deleteProduct = (req, res) => {
    const { ProductName } = req.body

    pool.query('select * from public."Products" where "ProductName" = $1', [ProductName], (err, result) => {
        if (err) {
            return response(res, {
                code: 500,
                success: false,
                message: err.message || 'Something went wrong!',
                content: err
            })
        }

        if (result.rowCount == 0) {
            return response(res, {
                code: 404,
                success: false,
                message: `${ProductName} tidak ditemukan`
            })
        }

        pool.query('delete from public."Products" where "ProductName" = $1', [ProductName], (error, r) => {
            if (error) {
                return response(res, {
                    code: 500,
                    success: false,
                    message: error.message || 'Something went wrong!',
                    content: error,
                })
            }

            return response(res, {
                code: 200,
                success: true,
                message: `${ProductName} success deleted`,
            })
        })
    })
}

module.exports = { getAllProduct, getAllProductByAdmin, getOneProduct, addProduct, editProduct, deleteProduct }