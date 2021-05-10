const MongooseStore = require('express-brute-mongoose');
const BaseExceptionHandler = require('../core/BaseExceptionHandler')

/**
 * Sets the request timeout in express for local environments
 * Won't be useful on platforms with fixed timeouts like Heroku,
 * but the route will keep working
 *
 * Middleware
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
let setRequestTimeout =
    function (req, res, next) {
    req.setTimeout(
      parseInt(
        process.env.REQUEST_TIMEOUT || 30,
        10) * 60 * 1000);
    next();
  },

  setSecurityHeader = function () {
    return (require('helmet')(...arguments));
  },

  bruteforceInstance = function (store, retries) {
    const ExpressBrute = require('express-brute');
    if (store instanceof MongooseStore) {
      const opts = {
        freeRetries: retries || 6,
        handleStoreError: BaseExceptionHandler
      };
      return (new ExpressBrute(store, opts));
    }
  },

  bruteforce = function () {
    const Bruteforce = require('../models/Bruteforce');
    const store = new MongooseStore(Bruteforce);
    return bruteforceInstance(store);
  }

  module.exports = {
    bruteforce, setSecurityHeader, setRequestTimeout
  }

