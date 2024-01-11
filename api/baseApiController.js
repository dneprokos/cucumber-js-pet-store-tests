const axios = require('axios')
const envConfig = require('env')

class BaseApiController {
  constructor () {
    this.instance = axios.create({
      baseURL: envConfig.baseURL,
      validateStatus: function (status) {
        return status >= 200 && status < 500
      }
    })
  }
}

module.exports = BaseApiController
