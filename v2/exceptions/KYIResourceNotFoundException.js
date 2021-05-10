const BaseException = require('../core/BaseException')
const { NOT_FOUND } = require('../constants/httpCodes')

class KYIResourceNotFoundException extends BaseException {
  /**
   * Creates an instance of KYIResourceNotFoundException.
   * @param {string} resourceName
   * @memberof NVCTIResourceNotFoundException
   */
  constructor (resourceName) {
    super({
      message: 'The requested resource ' + resourceName + ' was not found.',
      code: NOT_FOUND,
      name: 'Resource not found',
      critical: false
    })
  }
}

module.exports = KYIResourceNotFoundException
