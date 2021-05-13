const mongoose  = require('mongoose')
const safeDelete = require('mongoose-delete')

const BaseModelOptions = require('../core/BaseModelOptions')
const { isMimeType } = require('../utils/validation')
const { sexes, clubs } = require('../constants/userValues')
const roles = require('../constants/roles')
const { isAdmissionNumber, isHouse, isURI, isEmail, isPhoneNumber } = require('../utils/validation')

const opts = new BaseModelOptions()

const schema = new mongoose.Schema({
  house: {
    type: Number,
    validate: isHouse
  },
  admissionNumber: {
    type: String,
    validate: isAdmissionNumber,
    unique: true,
    trim: true
  },
  sex: {
    type: String,
    enum: sexes,
    trim: true
  },
  city: {
    type: String,
    trim: true
  },
  state: {
    type: String,
    trim: true
  },
  course: {
    type: String,
    trim: true
  },
  department: {
    type: String,
    trim: true
  },
  photo: {
    type: Buffer
  },
  photoURI: {
    type: String,
    validate: isURI
  },
  photoFormat: {
    type: String,
    validate: isMimeType
  },
  name: {
    type: String,
    trim: true
  },
  clubs: [{
    type: String,
    enum: clubs
  }],
  about: {
    type: String,
    trim: true
  },
  facebook: {
    type: String,
    validate: isURI,
    trim: true
  },
  linkedin: {
    type: String,
    validate: isURI,
    trim: true
  },
  instituteEmail: {
    type: String,
    lowercase: true,
    validate: isEmail,
    trim: true
  },
  personalEmail: {
    type: String,
    lowercase: true,
    validate: isEmail,
    trim: true
  },
  phone: {
    type: String,
    trim: true,
    validate: isPhoneNumber
  },
  newUser: {
    type: Boolean,
    default: true
  },
  roles: [{
    type: String,
    enum: Object.keys(roles),
    trim: true
  }],
  reputation: {
    type: Number,
    default: 1,
    max: 10000000
  }
}, opts.schemaOptions)

schema.plugin(safeDelete, opts.safeDeleteOptions)
const User = mongoose.model('User', schema, 'users')
module.exports = User
