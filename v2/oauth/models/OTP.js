const mongoose = require('mongoose')
const safeDelete = require('mongoose-delete')
const BaseModelOptions = require('../../core/BaseModelOptions')

const opts = new BaseModelOptions()
const schema = new mongoose.Schema({
  used: {
    type: Boolean,
    default: false
  },
  otpHash: {
    type: String,
    trim: true,
    required: true
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  expires: {
    type: Number
  }
}, opts.schemaOptions)

schema.plugin(safeDelete, opts.safeDeleteOptions)

schema.pre('save', function (next) {
  const otp = this
  if (otp.isNew)
    otp.expires = Date.now() + (parseInt(process.env.OTP_VALIDITY || 20 * 60 * 1000))
  next()
})

const OTP = mongoose.model('OTP', schema)
module.exports = OTP
