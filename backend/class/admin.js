const pool = require('../helper/database');
const { hashPassword, response } = require('../helper/bcrypt');
const bcrypt = require('bcrypt');
const { generateToken } = require('../helper/jwt')

const insert = async (req, res) => {
    const {CompanyName, company_email, password, Address, OwnerName, owner_email} = req.body;

    try {
        // check if user already exist
        const oldUser = await pool.query('select * from public."Admin" where company_email = $1', [company_email])

        if(oldUser.rowCount) {
            return res.status(409).send("User already exist. Please login")
        }

        // hash password
        const hashedPassword = await hashPassword(password)

        // generate token
        const token = generateToken({ company_email })

        pool.query('insert into public."Admin"("CompanyName", "company_email", "password", "Address", "OwnerName", "owner_email", "token") values($1, $2, $3, $4, $5, $6, $7)', 
        [CompanyName, company_email, hashedPassword, Address, OwnerName, owner_email, token], 
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
                    user: { CompanyName, company_email },
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
    const { company_email } = req.body

    pool.query('select * from public."Admin" where "company_email" = $1', [company_email], (err, result) => {
        if (err) {
            throw err; 
        }

        if (result.rowCount == 0) {
            return response(res, {
                code: 404,
                success: false,
                message: "User not found",
            })
        }

        pool.query('delete from public."Admin" where "company_email" = $1', [company_email], (error, result1) => {
            if(error){
                throw error
            }

            return response(res, {
                code: 200,
                success: true,
                message: `${company_email} successfully removed!`,
                content: {
                    user: { company_email }
                },
            })
        })
    })
}

const login = async (req, res) => {
    const { company_email, password } = req.body

    pool.query('SELECT * FROM public."Admin" WHERE company_email = $1', [company_email], async (err, result) => {
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
            const checkPassword = await bcrypt.compare(password, result.rows[0].password)
            
            if (checkPassword) {
                // generate token
                const token = generateToken({ company_email })

                pool.query('update public."Admin" set token = $1 where company_email = $2', [token, company_email])

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

const logout = async (req, res) => {
    const { company_email } = req.body

    pool.query('update public."Admin" set token = null where company_email = $1', [company_email], (err, result) => {
        if(err) {
            throw err
        }
        
        return response(res, {
            code: 200,
            success: true,
            message: "Logout successfull"
        })
    })
}

module.exports = { insert, login, remove, logout }