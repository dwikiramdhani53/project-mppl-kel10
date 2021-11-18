const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"]

    if (!token) {
        return res.status(403).send("A token is required for authentication")
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        req.user = decoded
    } catch (error) {
        return res.status(401).send("Invalid token")
    }

    return next()
}

const generateToken = (username) => {
    return jwt.sign(username, process.env.JWT_KEY, { expiresIn: "5h" })
}

module.exports = { verifyToken, generateToken }