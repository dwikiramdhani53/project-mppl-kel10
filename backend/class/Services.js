const pool = require('../helper/database')
const { response } = require('../helper/bcrypt')

const getAllServices = (req,res) => {
    pool.query('select * from public."Services"', (error,result) => {
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
                message : "All Services Sukses",
                content : result.rows
            })
        }
    })
}

const getOneServices = (req,res) => {
    const {ServiceName} = req.body
    pool.query('select * FROM "Services" WHERE "ServiceName" = $1', [ServiceName], (error,result) => {
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
                message : 'Service not found'
            })
        }
        else {
            return response(res,{
                code : 200,
                success : true,
                message : "One Service Sukses",
                content : result.rows
            })
        }
    })
}

module.exports = {getAllServices,getOneServices}