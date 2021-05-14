const Client = require('../oauth/models/Client')
const KYIBadRequestException = require('../exceptions/KYIBadRequestException')
const BaseExceptionHandler = require('../core/BaseExceptionHandler')
const User = require('../models/User')
const templates = require('../utils/mail/templates')
const BaseResponse = require('../core/BaseResponse')
const httpCodes = require('../constants/httpCodes')

const { generateAndSaveOTP } = require('../oauth/utils/otps')
const { propsMissingIn } = require('../utils/objectHandler')
const send = require('../utils/mail/mailer')
const OTP = require('../oauth/models/OTP')
const { isValidValue } = require('../utils/objectHandler')
const { generateAccessToken } = require('../oauth/utils/accessTokens')

exports.initialiseSystemLoginFlow = async function (req, res) {

  const debug = require('debug')('v2:controllers:login:system:initialise')
  const requiredProps = [ 'clientId', 'clientSecret', 'username', 'usernameType' ]
  const body = req.body
  try {
    if (propsMissingIn(body, requiredProps))
      throw new KYIBadRequestException({ message: 'All required properties not supplied' })

    debug('All properties exist')
    const validUsernameTypes = ['_id', 'instituteEmail', 'admissionNumber']
    if (!isValidValue(body.usernameType, validUsernameTypes))
      throw new KYIBadRequestException({ message: 'Only ' +  validUsernameTypes.join(', ') + ' are allowed as usernames' })
    // find client and check if it is system --> Client.findOne
    // TODO: Add secret check here
    let client = await Client.findOne({ _id: body.clientId }) // , secret: body.secret, isSystem: true
    if (!!client) {
      debug('Client found')
      // check user exists --> User.findOne
      let user = await User.findOne({ [body['usernameType']]: { $regex: new RegExp(body.username), $options: 'i'  } })
      if (!!user) {
        // generate OTP, mail it, hash it, save it --> generateOTP, mailer.send, OTP.save
        let generated = await generateAndSaveOTP(user, client)
        debug('OTP generated')
        await send(templates.LOGIN_OTP, { to: user['instituteEmail'] }, {
          otp: generated.otp
        })

        // respond with userId
        let resp = new BaseResponse({ userId: user['_id'] }, httpCodes.OK, {})
        res.status(resp.status).json(resp.getOneResponse)
      } else throw new KYIBadRequestException({message: 'Non-existent user'})
    } else throw new KYIBadRequestException(({message: 'Invalid client'}))
  } catch(err) {
    err = BaseExceptionHandler(err)
    res.status(err.code).json(err)
  }
}

exports.verifySystemOTP = async function(req, res) {
  const debug = require('debug')('v2:controllers:login:system:verifyOTP')
  const requiredProps = [ 'otp', 'userId' ]
  const body = req.body
  try {
    if (propsMissingIn(body, requiredProps))
      throw new KYIBadRequestException({ message: 'All required properties not supplied' })

    // find the OTP --> OTP.findOne(clientId, userId)
    let otpEntity = await OTP.findOne({ used: false, otpHash: body.otp, userId: body.userId, expires: { $gt: Date.now() } })
    if(!!otpEntity) {
      let [user, client] = await Promise.all([
        User.findById(otpEntity.userId),
        Client.findById(otpEntity.clientId)
      ])
      await OTP.deleteById(otpEntity._id)

      // generate access_token --> generateAccessToken
      let token = generateAccessToken(user, client, true)

      // respond with access_token
      let resp = new BaseResponse({accessToken: token}, httpCodes.OK, {})
      res.status(resp.status).json(resp.getOneResponse)
    } else throw new KYIBadRequestException({ message: 'Incorrect or invalid OTP' })
  } catch (err) {
    err = BaseExceptionHandler(err)
    res.status(err.code).json(err)
  }
}
