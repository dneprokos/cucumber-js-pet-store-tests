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

    # Not real test scenario, just for example. Better to cover in lower level tests
    Scenario: Creating a new pet with negative category id
        Given I have the following pet data
            | category.id | category.name | name   | photoUrls   | tags.id | tags.name | status   |
            | -1           | fish          | doggie | some_url    | 0       | string    | invalid  |
        When I send a POST request to create a new pet
        Then I should receive a status code of 400 and an error message 'Category id should be more than 0'
    
    # Not real test scenario, just for example. Better to cover in lower level tests
    Scenario: Creating a new pet with name more than max symbols
        Given I have the following pet data
            | category.id | category.name | name                  | photoUrls   | tags.id | tags.name | status   |
            | 1           | fish          | aaaaaaaaaaaaaaaaaaaaa | some_url    | 0       | string    | invalid  |
        When I send a POST request to create a new pet
        Then I should receive a status code of 400 and an error message 'Name cannot be more than 20 symbols'

    # Not implemented
    Scenario: Creating a new pet with multiple tags
        Given I have the following pet data with multiple tags
        When I send a POST request to create a new pet
        Then I should receive a status code of 200
        And the response should contain multiple tags

    # Not implemented
    Scenario: Creating a new pet with multiple photoUrls
        Given I have the following pet data with multiple photoUrls
        When I send a POST request to create a new pet
        Then I should receive a status code of 200
        And the response should contain multiple photoUrls

    # TODO: Add more negative scenarios
    
    