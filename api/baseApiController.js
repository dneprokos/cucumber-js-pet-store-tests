import axios from 'axios'
import envConfig from '@env'

export default class BaseApiController {
  constructor () {
    this.instance = axios.create({
      baseURL: envConfig.baseURL,
      validateStatus: function (status) {
        return status >= 200 && status < 500
      }
    })
  }
}
