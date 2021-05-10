const {
  JsonWebTokenError,
  TokenExpiredError,
  NotBeforeError
} = require('jsonwebtoken')
const { MulterError } = require('multer')

const KYIInternalServerException = require('../exceptions/KYIInternalServerException')
const KYIBadRequestException = require('../exceptions/KYIBadRequestException')
const KYIUnauthorisedException = require('../exceptions/KYIUnauthorisedException')
const BaseException = require('./BaseException')

function BaseExceptionHandler (E) {
  if (!E || !(E instanceof Error)) {
    throw new KYIInternalServerException({
      message: 'No error supplied',
      critical: true
    })
  }

  if (E instanceof JsonWebTokenError) {
    if (E instanceof TokenExpiredError) {
      return (new KYIUnauthorisedException({
        message: E.message,
        name: 'JWT Error',
        thrownBy: 'jsonwebtoken',
        critical: true,
        errors: [],
        code: 401
      }))
    } else if (E instanceof NotBeforeError) {
      return (new KYIBadRequestException({
        message: E.message,
        name: 'JWT Error',
        thrownBy: 'jsonwebtoken',
        critical: true,
        errors: []
      }))
    }
  } else if (E instanceof MulterError) {
    return (new KYIBadRequestException({
      name: E.name,
      message: E.message + ' with field: ' + E.field + '.',
      thrownBy: 'multer',
      critical: false,
      errors: [E],
      code: E.code
    }))
  } else if (E instanceof BaseException) {
    return E
  } else if (E instanceof Error) {
    return (new BaseException({
      name: E.name,
      message: E.message,
      errors: [E],
      critical: true,
      thrownBy: E.stack
    }))
  }
}

module.exports = BaseExceptionHandler
