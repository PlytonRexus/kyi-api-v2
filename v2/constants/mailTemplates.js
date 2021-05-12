const mailTemplates = {
  REGISTRATION: { name: "registration-template", subject: "Welcome to the NVCTI Family!" },
  FORGOT_PASSWORD: { name: "forgot-password-template", subject: "Reset Password" },
  CONTACT_US: { name: "contact-us-template", subject: "Contact Request on Website" },
  STATUS_CHANGE: { name: "status-change-template", subject: "Application Status Changed" },
  APPLICATION_ACCEPTED: { name: "application-accepted-template", subject: "Application Accepted" },
  APPLICATION_REJECTED: { name: "application-rejected-template", subject: "Application Rejected" },
}
module.exports = mailTemplates
