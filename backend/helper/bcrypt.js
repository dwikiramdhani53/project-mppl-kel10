const bcrypt = require('bcrypt')

module.exports = {
    response: (res, data) => {
        return res.status(data.code).json({
            code: data.code,
            success: data.success,
            message: data.message,
            content: data.content,
        })
    }, 
    hashPassword: async (data) => {
        const password = await bcrypt.hash(data, 10)

        return password
    }
}