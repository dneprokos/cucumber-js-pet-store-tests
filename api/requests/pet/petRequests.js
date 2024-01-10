import { BaseApiController } from './BaseApiController'

export class PetResourceApiRequests extends BaseApiController {
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
  async postPet (pet) {
    try {
      const response = await this.instance.post('/pet', pet)
      return response
    } catch (error) {
      console.error(error)
    }
  }
}
