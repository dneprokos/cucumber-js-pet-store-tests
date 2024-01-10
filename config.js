require('dotenv').config()

const config = {
  baseUrl: process.env.BASE_URL || 'https://petstore.swagger.io/v2/'
}

module.exports = config
