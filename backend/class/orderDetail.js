const pool = require('../helper/database')
const { response } = require('../helper/bcrypt')

const getAll = (req, res) => {
    pool.query('select * from public."OrderDetail"', (err, result) => {
        if(err) {
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
                success: true,
                message: `Tidak ada OrderDetail`,
            })
        }

        return response(res, {
            code: 200,
            success: true,
            message: 'Success get all OrderDetail',
            content: result.rows,
        })
    })
}

const addOrderDetails = (req, res) => {
    const { cust_id, prod_id, Quantity, TotalPrice } = req.body

    pool.query('select * from public."OrderDetail" where cust_id = $1 and prod_id = $2', [cust_id, prod_id], (err, result) => {
        if(err) {
            return response(res, {
                code: 500,
                success: false,
                message: err.message || 'Something went wrong!',
                content: err
            })
        }

        if (result.rowCount > 0) {
            return response(res, {
                code: 403,
                success: true,
                message: `Order Detail already exist`,
                content: result.rows,
            })
        }
    })

    pool.query('insert into public."OrderDetail"("cust_id", "prod_id", "Quantity", "TotalPrice") values($1, $2, $3, $4)', [cust_id, prod_id, Quantity, TotalPrice], (err, r) => {
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
            message: `Order detail successfully added!`,
            content: { Quantity, TotalPrice }
        })
    })
}

module.exports = { addOrderDetails, getAll }