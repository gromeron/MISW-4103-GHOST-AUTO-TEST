Feature: Crear tags

    @user1 @web
    Scenario: 13. Usuario logueado - Crear tag nuevo - Sin información
        Given I navigate to login page "<LOGINURL>"
        And I wait for 1 seconds
        When I enter email "<USERNAME>"
        And I wait for 1 seconds
        When I enter password "<PASSWORD>"
        And I wait for 2 seconds
        When I click login button
        And I wait for 2 seconds
        When I go to tags
        And I wait for 2 seconds
        When I click on new tag
        And I wait for 2 seconds
        When I click on save tag
        Then I expect an error message