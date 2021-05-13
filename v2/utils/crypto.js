const bcrypt = require('bcrypt')

const saltRounds = process.env.BCRYPT_SALT_ROUNDS || 4

const hash = async function(data, salt = saltRounds) {
  return await bcrypt.hash(data, salt)
}

const compare = async function(data, hashed) {
  return await bcrypt.compare(data, hashed)
}

module.exports = {
  hash, compare
}
