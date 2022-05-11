Feature: Crear tags

    @user1 @web
    Scenario: 13. Usuario logueado - Crear tag nuevo - Sin información
        Given I navigate to page "http://localhost:2368/ghost/#/signin"
        And I wait for 1 seconds
        When I enter email "<USERNAME>"
        And I wait for 1 seconds
        When I enter password "<PASSWORD>"
        And I wait for 2 seconds
        When I click button loggin
        And I wait for 2 seconds
        When I go to tags
        And I wait for 2 seconds
        When I click on new tag
        And I wait for 2 seconds
        When I click on save tag
        And I wait for 2 seconds
        Then I expect an error message