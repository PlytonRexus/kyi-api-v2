const jwt = require('jsonwebtoken')

const secret = process.env.ACCESS_TOKEN_SECRET || 'secret'
const appName = process.env.APP_NAME || 'KYI'

const generateAccessToken = function (user, client, isSystem) {
  return jwt.sign({
    sub: user._id,
    iss: appName,
    aud: client._id,
    usr: JSON.stringify(user),
    sys: !!isSystem
  }, secret, {
    expiresIn: '1000d'
  })
}

const verifyAccessToken = function (token) {
  try {
    return jwt.verify(token, secret)
  } catch (e) {
    return false
  }
}

module.exports = { generateAccessToken, verifyAccessToken }
