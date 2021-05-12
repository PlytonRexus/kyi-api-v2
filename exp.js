const path = require('path')

const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const exp = express()
const apiV1Url = process.env.API_V1_URL || 'api'
const apiV2Url = process.env.API_V2_URL || 'api/v2'

require('./config/database/mongoose')

exp.use(`/${apiV1Url}/views`, express.static('v1/views'))
exp.use(`/${apiV2Url}/views`, express.static(path.join(__dirname, 'v2/public')))
exp.use(`/${apiV2Url}/oauth/authorise`, express.static(path.join(__dirname, 'v2/oauth/views')))

exp.use(express.json())
exp.use(express.urlencoded({ extended: true }))

exp.use(morgan('dev'))
exp.use(cookieParser())
exp.use(cors())

exp.use('/' + apiV1Url, require('./v1/routes/index'))
exp.use('/' + apiV2Url, require('./v2/routes/index'))

exp.use(require('./v1/routes/404'))

module.exports = exp
