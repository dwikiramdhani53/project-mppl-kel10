const pool = require('../helper/database')
const { response } = require('../helper/bcrypt')

const AllLayanan = (req,res) => {
    pool.query('select * from layanan', (error,result) => {
        if (error) {
            return response(res, {
                code : 500,
                Success : false,
                message : error.message || "Something Went Wrong!"
            })
        }
        else {
            return response(res, {
                code : 200,
                success : true,
                message : "All Layanan Sukses",
                content : result.rows
            })
        }
    })
}

const OneLayanan = (req,res) => {
    const {nama_layanan} = req.body
    pool.query('select * FROM layanan WHERE nama_layanan = $1', [nama_layanan], (error,result) => {
        if (error) {
            return response(res, {
                code : 500,
                success : false,
                message : error.message || 'Something Went Wrong!'

            })
        }
        else if(result.rowCount == 0){
            return response (res, {
                code : 501,
                success : true,
                message : 'Layanan not found'
            })
        }
        else {
            return response(res,{
                code : 200,
                success : true,
                message : "One Layanan Sukses",
                content : result.rows
            })
        }
    })
}

module.exports = {AllLayanan,OneLayanan}