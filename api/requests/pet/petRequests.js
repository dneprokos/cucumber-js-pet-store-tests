const BaseApiController = require('../../baseApiController')

class PetResourceApiRequests extends BaseApiController {
  async getPetById (id) {
    try {
      const response = await this.instance.get(`/pet/${id}`)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * @description: Create a pet
   * @param: {Object} Pet
   */
  async createPet (pet) {
    try {
      const response = await this.instance.post('/pet', pet)
      return response
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = PetResourceApiRequests
