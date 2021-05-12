const KYIInternalServerException = require('../exceptions/KYIInternalServerException')

class Rule {

  /**
   *
   * @param {string} ruleString
   */
  constructor(ruleString) {
    if (typeof ruleString === 'string') {
      this.ruleString = ruleString
      this.conditions = Rule.parse(this.ruleString)
    } else throw new KYIInternalServerException({
      name: 'Incorrect parameter',
      message: 'Rule can only be formed out of a string'
    })
  }

  static parse() {

  }

  /**
   *
   * @param {mongoose.Model} entity
   * @returns {Boolean} Whether the entity passes the rule
   */
  willAccept(entity) {
    // TODO: accept logic
    // Accept only if conditions are checked against entity's values
  }
}

module.exports = Rule
