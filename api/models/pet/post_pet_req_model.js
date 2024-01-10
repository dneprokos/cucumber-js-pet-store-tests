class PostPetModel {
  constructor (data) {
    this.category = {
      id: parseInt(data['category.id'], 10),
      name: data['category.name']
    }
    this.name = data.name
    this.photoUrls = [data.photoUrls]
    this.tags = [{
      id: parseInt(data['tags.id'], 10),
      name: data['tags.name']
    }]
    this.status = data.status
  }
// Add any additional methods or validation logic here
}

module.exports = PostPetModel
