const pool = require('../helper/database')
const { response } = require('../helper/bcrypt')

const getAll = (req, res) => {
    pool.query('select * from public."Customer"', (err, result) => {
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
                message: `Tidak ada customer`,
            })
        }

        return response(res, {
            code: 200,
            success: true,
            message: 'Success get all customer',
            content: result.rows,
        })
    })
}

const addCustomer = (req, res) => {
    const { Name, PhoneNumber, Email, Address } = req.body

    pool.query('select * from public."Customer" where "Email" = $1', [Email], (err, result) => {
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
                message: `Customer with ${Email} already exist`,
            })
        }
    })

    pool.query('insert into public."Customer"("Name", "PhoneNumber", "Email", "Address") values($1, $2, $3, $4)', [Name, PhoneNumber, Email, Address], (err, r) => {
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
            message: `Customer ${Name} successfully added!`,
            content: { Name, PhoneNumber, Email, Address }
        })
    })
}

module.exports = { addCustomer, getAll }