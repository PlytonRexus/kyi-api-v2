const {
  REGISTRATION, LOGIN_OTP, CONTACT_US
} = require('../../constants/mailTemplates')
const Template = require('./Template')

const templates = {
  REGISTRATION: new Template(REGISTRATION.name, REGISTRATION.subject),
  LOGIN_OTP: new Template(LOGIN_OTP.name, LOGIN_OTP.subject),
  CONTACT_US: new Template(CONTACT_US.name, CONTACT_US.subject)
}

module.exports = templates
