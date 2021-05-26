const validator = require('validator')
const Filter = require('bad-words')
const filter = new Filter()

const KYIValidationException = require('../exceptions/KYIValidationException')
const { admissionNumberRegex } = require('../constants/regularExpressions')

const isAdmissionNumber = function (v) {
  if (!admissionNumberRegex.test(v)) {
    throw new KYIValidationException({
      message: 'Not a valid admission number'
    })
  }
  return true
}

const isEmail = function (v) {
  if (!validator.isEmail(v)) {
    throw new KYIValidationException({
      message: 'Not a valid email address'
    })
  }
}

const isPhoneNumber = validator.isMobilePhone

const isHouse = function (v) {
  if (v < 1 || v > 8) {
    throw new KYIValidationException({
      message: 'Not a valid house number'
    })
  }
}

const isURI = validator.isURL

const isMimeType = validator.isMimeType

const isClean = v => !filter.isProfane(v)

module.exports = {
  isAdmissionNumber,
  isPhoneNumber,
  isEmail,
  isURI,
  isHouse,
  isMimeType,
  isClean
}
