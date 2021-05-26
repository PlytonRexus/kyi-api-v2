const crypto = require('../../utils/crypto')
const nativeCrypto = require('crypto')
const OTP = require('../models/OTP')

const generateOTP = function () {
  return nativeCrypto.randomInt(100000, 1000000)
}

const hashOTP = async function (otp) {
  return await crypto.hash(otp)
}

const saveOTP = async function (otp, user, client, isUsed = false) {
  // not hashing
  const entity = new OTP({
    userId: user._id,
    clientId: client._id,
    used: isUsed,
    otpHash: otp
  })

  return entity.save()
}

const generateAndSaveOTP = async function (user, client) {
  const otp = generateOTP()
  return { otp, entity: await saveOTP(otp, user, client) }
}

module.exports = {
  generateOTP, hashOTP, saveOTP, generateAndSaveOTP
}
