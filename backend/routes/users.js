const pool = require('../helper/database');
const { hashPassword, response } = require('../helper/bcrypt');
const bcrypt = require('bcrypt');
const { generateToken } = require('../helper/jwt')

const insert = async (req, res) => {
    const {nama_perusahaan, email_perusahaan, password, alamat_perusahaan, penanggungjawab, email_penanggungjawab} = req.body;

    try {
        // check if user already exist
        const oldUser = await pool.query('select * from users where email_perusahaan = $1', [email_perusahaan])

        if(oldUser.rowCount) {
            return res.status(409).send("User already exist. Please login")
        }

        // hash password
        const hashedPassword = await hashPassword(password)

        // generate token
        const token = generateToken({ email_perusahaan })

        pool.query('insert into users(nama_perusahaan, email_perusahaan, hash_password, alamat_perusahaan, penanggungjawab, email_penanggungjawab, token) values($1, $2, $3, $4, $5, $6, $7)', 
        [nama_perusahaan, email_perusahaan, hashedPassword, alamat_perusahaan, penanggungjawab, email_penanggungjawab, token], 
        (err, result) => {
            if(err) {
                return response(res, {
                    code: 501,
                    success: false,
                    message: err.message,
                    content: err,
                })
            }
            return response(res, {
                code: 201,
                success: true,
                message: 'Successfully registered!',
                content: {
                    user: { nama_perusahaan, email_perusahaan },
                    token,
                }
            })
        })

    } catch(error) {
        return response(res, {
            code: 500,
            success: false,
            message: error.message || 'Something went wrong!',
            content: error,
        })
    }
}

const remove = (req, res) => {
    const { nama_perusahaan } = req.body

    try {
        pool.query('delete from users where nama_perusahaan = $1', 
        [nama_perusahaan],
        (err, result) => {
            if(err){
                return response(res, {
                    code: 501,
                    success: false,
                    message: err.message,
                    content: err,
                })
            }
    
            return response(res, {
                code: 200,
                success: true,
                message: `${nama_perusahaan} successfully removed!`,
                content: {
                    user: { nama_perusahaan }
                },
            })
        })
    } catch(error) {
        return response(res, {
            code: 500,
            success: false,
            message: error.message || 'Something went wrong!',
            content: error,
        })
    }
}

const login = async (req, res) => {
    const { email_perusahaan, password } = req.body

    pool.query('SELECT * FROM users WHERE email_perusahaan = $1', [email_perusahaan], async (err, result) => {
        if(err){
            throw err
        }

        if (result.rowCount == 0) {
            return response(res, {
                code: 501,
                success: true,
                message: 'User not found',
            })
        }

        try {
            const checkPassword = await bcrypt.compare(password, result.rows[0].hash_password)
            
            if (checkPassword) {
                // generate token
                const token = generateToken({ email_perusahaan })

                pool.query('update users set token = $1 where email_perusahaan = $2', [token, email_perusahaan])

                const { hash_password, ...userData } = result.rows[0]
                userData.token = token

                return response(res, {
                    code: 200,
                    success: true,
                    message: 'Login successful!',
                    content: userData,
                })
            } else {
                return response(res, {
                    code: 401,
                    success: false,
                    message: 'Wrong password',
                })
            }
        } catch (error) {
            return response(res, {
                code: 500,
                success: false,
                message: error.message || 'Something went wrong!',
            })
        }
    })
}

module.exports = { insert, login, remove }