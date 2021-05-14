const mongoose = require('mongoose')
const safeDelete = require('mongoose-delete')
const BaseModelOptions = require('../../core/BaseModelOptions')
const KYIBadRequestException = require('../../exceptions/KYIBadRequestException')
const { isURI } = require('../../utils/validation')
const { generateClientSecret } = require('../utils/clientSecrets')

const opts = new BaseModelOptions()
const schema = new mongoose.Schema({
  secret: {
    type: String,
    trim: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  redirectURI: {
    type: String,
    required: true,
    validate: isURI
  },
  isSystem: {
    type: Boolean,
    default: false
  }
}, opts.schemaOptions)

schema.pre("save", async function (next) {
	const client = this
	if (client.isNew) {
		client.secret = generateClientSecret(client)
    client.isSystem = false
	} else {
	  throw new KYIBadRequestException({message: 'Cannot modify client'})
  }
	next();
});

/* Schema Hooks */
schema.methods.toJSON = function () {
  const client = this
  const clientJson = client.toObject({ virtuals: true })
  // delete clientJson.secret
  delete clientJson.deleted
  return clientJson
}

schema.plugin(safeDelete, opts.safeDeleteOptions)

const Client = mongoose.model('Client', schema)
module.exports = Client
