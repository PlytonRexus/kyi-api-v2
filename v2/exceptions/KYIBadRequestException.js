const BaseException = require('../core/BaseException')
const { BAD_REQUEST } = require('../constants/httpCodes')

class KYIBadRequestException extends BaseException {
  /**
   * Creates an instance of KYIBadRequestException.
   * @param {object} { errors, message, name, critical }
   * @memberof NVCTIBadRequestException
   */
  constructor ({ errors, message, name, critical }) {
    super({
      message: message || 'Bad request exception',
      errors: errors || [],
      name: name || 'Bad request',
      critical: critical || true,
      code: BAD_REQUEST
    })
  }
}

module.exports = KYIBadRequestException
