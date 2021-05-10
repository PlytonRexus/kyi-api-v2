const BaseException = require('../core/BaseException')

class KYIInternalServerException extends BaseException {
  /**
   * Creates an instance of KYIInternalServerException.
   * @param {object} { errors, message, name, critical }
   * @memberof NVCTIInternalServerException
   */
  constructor ({ errors, message, name, critical }) {
    super({
      message:
        'This is probably an error on the server' +
          'and has nothing to do with your request.' ||
        message,
      name: 'Internal server error' || name,
      critical: critical || false,
      errors: errors || [],
      code: 500
    })
  }
}

module.exports = KYIInternalServerException
