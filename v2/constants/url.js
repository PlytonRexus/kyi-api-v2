const API_URL = process.env.API_V2_URL || 'api/v2'
const BASE_URL = process.env.BASE_URL || 'http://localhost:8080'
const COMPLETE_API_URL = BASE_URL + '/' + API_URL

module.exports = {
  API_URL, BASE_URL, COMPLETE_API_URL
}
