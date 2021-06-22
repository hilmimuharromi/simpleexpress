const jwt = require('jsonwebtoken')

function tokenGenerate(payload) {
    return jwt.sign(payload, 'SECRET');
}

module.exports = {
    tokenGenerate
}