const gmail = require("gmail-send")
const Template = require('./Template')
const KYIInternalServerException = require('../../exceptions/KYIInternalServerException')

let send = async function (template, opts, variables) {
  if (!(template instanceof Template))
    throw new KYIInternalServerException({message: 'Invalid template'})
  try {
    opts.html = await template.getBody(variables);
    opts.subject = template.getSubject();
    opts.from = opts.from || process.env.APP_NAME
      + "<" + process.env.EMAIL_ID + ">" || process.env.EMAIL_ID;
    opts.user = process.env.EMAIL_ID;
    opts.replyTo = opts.replyTo || opts.from;
    opts.pass = process.env.EMAIL_PASSWORD;

    if (opts.to && !(opts.to instanceof Array))
      opts.to = opts.to.split(",");

    const send = gmail(opts);
    return await send();
  } catch (err) {
    const errOpts = {
      name: "Mailing failure",
      message: "Mailing server error",
      errors: err,
      critical: true,
    };

    throw new KYIInternalServerException(errOpts);
  }
}

module.exports = send
