const pool = require('../helper/database')
const { response } = require('../helper/bcrypt')

const AllArtikel = (req,res) => {
    pool.query('select * from artikel', (error,result) => {
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
                message : "All Artikel Sukses",
                content : result.rows
            })
        }
    })
}

const OneArtikel = (req,res) => {
    const {judul_artikel} = req.body
    pool.query('select * FROM artikel WHERE judul_artikel = $1', [judul_artikel], (error,result) => {
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
                message : 'Artikel not found'
            })
        }
        else {
            return response(res,{
                code : 200,
                success : true,
                message : "One Artikel Sukses",
                content : result.rows
            })
        }
    })
}

module.exports = {AllArtikel,OneArtikel}

