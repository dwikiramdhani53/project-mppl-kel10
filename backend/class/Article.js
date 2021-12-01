const pool = require('../helper/database')
const { response } = require('../helper/bcrypt')

const getAllArticle = (req,res) => {
    pool.query('select * from "Article"', (error,result) => {
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

const getAllArticleByAdmin = (req,res) => {
    const {admin_id} = req.body
    pool.query('select * from "Article" WHERE admin_id = $1',[admin_id], (error,result) => {
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

const getOneArticle = (req,res) => {
    const {Title} = req.body
    pool.query('select * FROM "Article" WHERE "Title" = $1', [Title], (error,result) => {
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

const addArticle = (req,res) => {
    const {admin_id, Title, ArticleCategory, MainArticle} = req.body
    pool.query('INSERT into public."Article"(admin_id, "Title",  "ArticleCategory", "MainArticle") values($1,$2,$3,$4)',[admin_id, Title, ArticleCategory, MainArticle],(error,result) => {
        if (error){
            return response (res, {
                code : 500,
                success : false,
                message : error.message || 'Something Went Wrong!'
            })
        }
        else {
            return response (res, {
                code : 201,
                success : true,
                message : 'Add Artikel Success'
            })
        }
    })
}
const editArticle = (req,res) => {
    const {article_id, admin_id, Title, ArticleCategory, MainArticle} = req.body
    pool.query('UPDATE public."Article" SET "Title" = $1,  "ArticleCategory" = $2, "MainArticle" = $3 WHERE admin_id = $4 AND article_id = $5;',[Title, ArticleCategory, MainArticle, admin_id, article_id],(error,result) => {
        if (error){
            return response (res, {
                code : 500,
                success : false,
                message : error.message || 'Something Went Wrong!'
            })
        }
        else {
            return response (res, {
                code : 201,
                success : true,
                message : 'edit article Success'
            })
        }
    })
}

const deleteArticle = (req,res) => {
    const {Title} = req.body
    pool.query('DELETE FROM public."Article" WHERE "Title" = $1',[Title],(error,result) => {
        if (error){
            return response (res, {
                code : 500,
                success : false,
                message : error.message || 'Something Went Wrong!'
            })
        }
        else {
            return response (res, {
                code : 201,
                success : true,
                message : 'Delete article Success'
            })
        }
    })
}


module.exports = {getAllArticle,getOneArticle,addArticle,editArticle,deleteArticle,getAllArticleByAdmin}

