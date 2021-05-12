const {
  REGISTRATION, FORGOT_PASSWORD, CONTACT_US
} = require('../../constants/mailTemplates')
const Template = require('./Template')

const templates = {
  REGISTRATION: new Template(REGISTRATION.name, REGISTRATION.subject),
  FORGOT_PASSWORD: new Template(FORGOT_PASSWORD.name, FORGOT_PASSWORD.subject),
  CONTACT_US: new Template(CONTACT_US.name, CONTACT_US.subject)
}

module.exports = templates
