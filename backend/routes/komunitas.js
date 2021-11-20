const pool = require('../helper/database')
const { response } = require('../helper/bcrypt')

const AllKomunitas = (req,res) => {
    pool.query('select * from komunitas', (error,result) => {
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
                message : "All Komunitas Sukses",
                content : result.rows
            })
        }
    })
}

const OneKomunitas = (req,res) => {
    const {nama_komunitas} = req.body
    pool.query('select * FROM komunitas WHERE nama_komunitas = $1', [nama_komunitas], (error,result) => {
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
                message : 'Komunitas not found'
            })
        }
        else {
            return response(res,{
                code : 200,
                success : true,
                message : "One Komunitas Sukses",
                content : result.rows
            })
        }
    })
}

module.exports = {AllKomunitas,OneKomunitas}