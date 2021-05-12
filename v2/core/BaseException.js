const { INTERNAL_SERVER_ERROR } =
  require('../constants/httpCodes')

/**
 *
 * @class NVCTIBaseException
 * @extends {Error}
 */
class BaseException extends Error {
  /**
   * Creates an instance of KYIBaseException.
   *
   * @param {object} { name: string, errors: array<object>, thrownBy: string,
   * critical: boolean, message: string, code: number }
   * @memberof KYIBaseException
   */
  constructor ({ name, errors, thrownBy, critical, message, code }) {
    super()
    this.critical = critical || false
    this.thrownBy = thrownBy || process.env.APP_NAME || 'KYI Server'
    this.errors = errors || []
    this.name = name || 'Base exception'
    this.message = message || 'No message provided'
    this.code = code || INTERNAL_SERVER_ERROR
  }
}

module.exports = BaseException
