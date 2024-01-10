Feature: Petstore POST /pet service
    
    Scenario: Successfully creating a new pet
        Given I have the following pet data
            | category.id | category.name | name   | photoUrls   | tags.id | tags.name | status   |
            | 1           | fish          | doggie | some_url    | 0       | string    | available|
            | 1           | fish          | doggie | some_url    | 0       | string    | pending  |
            | 1           | fish          | doggie | some_url    | 0       | string    | sold     |
        When I send a POST request to create a new pet
        Then I should receive a status code of 200
        And the response should contain the pet's details

    Scenario: Creating a new pet with invalid status
        Given I have the following pet data
            | category.id | category.name | name   | photoUrls   | tags.id | tags.name | status   |
            | 1           | fish          | doggie | some_url    | 0       | string    | invalid  |
        When I send a POST request to create a new pet
        Then I should receive a status code of 400 and an error message 'Invalid status value'
    
    