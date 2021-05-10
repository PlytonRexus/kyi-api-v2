const BaseException = require('../core/BaseException')
const { BAD_REQUEST } = require('../constants/httpCodes')

class KYIValidationException extends BaseException {
  /**
   * Creates an instance of KYIValidationException.
   * @param {object} { message, name }
   * @memberof NVCTIValidationException
   */
  constructor ({ message, name, errors }) {
    super({
      message: message || 'Some validation error occurred.',
      name: name || 'Validation error',
      code: BAD_REQUEST,
      errors: errors || []
    })
  }
}

module.exports = KYIValidationException
