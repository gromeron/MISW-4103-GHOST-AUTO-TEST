Feature: Crear tags

    @user1 @web
    Scenario: 18. Usuario logueado - Crear tag nuevo - Sin información
        Given I navigate to page "http://localhost:2368/ghost/#/signin"
        And I wait for 5 seconds
        When I enter email "<USERNAME>"
        And I wait for 5 seconds
        When I enter password "<PASSWORD>"
        And I wait for 2 seconds
        When I click button
        And I wait for 3 seconds
        When I go to tags
        And I wait for 3 seconds
        When I click on new tag
        And I wait for 3 seconds
        When I click on save tag