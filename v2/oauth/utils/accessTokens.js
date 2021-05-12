const jwt = require('jsonwebtoken')
const User = require('../../models/User')

const secret = process.env.ACCESS_TOKEN_SECRET || 'secret'
const app = process.env.APP_NAME || 'KYI'

const generateAccessToken = function (user, app) {
  return jwt.sign({
    sub: user._id,
    iss: app,
    aud: app._id,
    usr: JSON.stringify(user)
  }, secret, {
    expiresIn: '1000d'
  })
}

const verifyAccessToken = function(token) {
  try {
    return jwt.verify(token, secret)
  } catch (e) {
    return false
  }
}
