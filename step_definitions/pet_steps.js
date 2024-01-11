const axios = require('axios')
const { Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert').strict
const PostPetModel = require('../api/models/pet/post_pet_req_model')
const { baseUrl } = require('../config')

let response, petData

Given('I have the following pet data', function (dataTable) {
  // Convert the data table to the desired JSON structure
  const data = dataTable.hashes()[0] // Get the first row as an object
  petData = new PostPetModel(data)
})

When('I send a POST request to create a new pet', async function () {
  response = await axios.post(`${baseUrl}pet`, petData) // TODO: Rework to use the API wrapper
})

Then('I should receive a status code of {int}', function (expectedStatusCode) {
  assert.equal(response.status, expectedStatusCode)
})

Then('the response should contain the pet\'s details', function () {
  assert.equal(response.data.name, petData.name)
  assert.deepEqual(response.data.category, petData.category)
  assert.deepEqual(response.data.photoUrls, petData.photoUrls)
  assert.deepEqual(response.data.tags, petData.tags)
  assert.equal(response.data.status, petData.status)
})

Then('I should receive a status code of {int} and an error message {string}', function (expectedStatusCode, expectedErrorMessage) {
  // Check if the status code matches
  assert.equal(response.status, expectedStatusCode)

  // Check if the error message in the response matches the expected error message
  assert.equal(response.data.errorMessage, expectedErrorMessage)
})
