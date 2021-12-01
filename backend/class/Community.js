const pool = require('../helper/database')
const { response } = require('../helper/bcrypt')

const getAllCommunity = (req,res) => {
    pool.query('select * from "Community"', (error,result) => {
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
                message : "get All Community Sukses",
                content : result.rows
            })
        }
    })
}

const getOneCommunity = (req,res) => {
    const {CommunityName} = req.body
    pool.query('select * FROM "Community" WHERE "CommunityName" = $1', [CommunityName], (error,result) => {
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

const addCommunity = (req,res) => {
    const {admin_id, CommunityOwner, CommunityName, LinkCommunity} = req.body
    pool.query('INSERT into public."Community"(admin_id, "CommunityOwner",  "CommunityName", "LinkCommunity") values($1,$2,$3,$4)',[admin_id, CommunityOwner, CommunityName, LinkCommunity],(error,result) => {
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
                message : 'Add Community Success'
            })
        }
    })
}

const deleteCommunity = (req,res) => {
    const {CommunityName} = req.body
    pool.query('DELETE FROM public."Community" WHERE "CommunityName" = $1',[CommunityName],(error,result) => {
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
module.exports = {getAllCommunity,getOneCommunity,addCommunity,deleteCommunity}