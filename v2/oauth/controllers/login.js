exports.getAccessToken = async function (req, res) {
  //  read client_id, verify it with client_secret (both in params)
  //  read request_token, verify it with client_id
  //  generate the access_token and send it back

}

exports.initLoginFlow = async function (req, res) {
  // check client exists --> App.findById
  // check user exists --> User.findOne
  // generate OTP, mail it, hash it, save it --> generateOTP, mailer.send, OTP.save
  // respond with userId
}

exports.verifyOtp = async function (req, res) {
  // find the OTP --> OTP.findOne(clientId, userId)
  // match OTP --> bcrypt.verify
  // generate request_token, save it --> generateRequestToken, RequestToken.save
  // redirect to redirectUrl saved in OTP with the request_token as parameter

  const redirectUrl = ''
  const requestToken = ''
  res.redirect(redirectUrl + '?request_token=' + requestToken)
}

exports.loadLoginScreen = async function (req, res) {
  // send file
}
