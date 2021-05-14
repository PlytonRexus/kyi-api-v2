const jwt = require('jsonwebtoken')

const secret = process.env.CLIENT_SECRET_SECRET || 'secret'
const appName = process.env.APP_NAME || 'KYI'

const generateClientSecret = function (client) {
  return jwt.sign({
    sub: client._id,
    iss: appName,
    usr: client.userId,
    uri: client.redirectURI
  }, secret, {
    expiresIn: '10000d'
  })
}

const verifyClientSecret = function(token) {
  try {
    return jwt.verify(token, secret)
  } catch (e) {
    return false
  }
}

module.exports = { generateClientSecret, verifyClientSecret }
