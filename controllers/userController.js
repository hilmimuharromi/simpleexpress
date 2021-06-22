const User = require('../models/User')
const { hashPassword, verifyPassword } = require('../helpers/bcrypt')
const { tokenGenerate } = require('../helpers/jwt')
async function register(req, res) {
    console.log('halo from register controller', req.body)

    try {
        const { email, name, password, role } = req.body
        const hash = hashPassword(password)
        const result = await User.create({ email, name, password: hash, role });

        console.log('result register', result)
    } catch (error) {
        console.log('error register ===>', error)
    }
}

async function login(req, res) {
    console.log('halo from login controller', req.body)

    try {
        const { email, password } = req.body
        const result = await User.findOne({
            email
        })
        if (result) {
            isPassword = verifyPassword(password, result.password)
            if (isPassword) {
                let payload = {
                    id: result._id,
                    email: result.email,
                    name: result.name,
                    role: result.role
                }
                let token = tokenGenerate(payload)
                res.status(200).json({
                    message: 'success Login',
                    token
                })
            } else {
                res.status(400).json({
                    message: 'email / password tidak sesuai'
                })
            }
        } else {
            res.status(400).json({
                message: 'email / password tidak sesuai'
            })
        }
    } catch (error) {
        res.status(400).json({
            message: JSON.stringify(error)
        })
    }


}

module.exports = {
    register,
    login
}