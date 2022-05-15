Feature: Iniciar sesión

    @user1 @web
    Scenario: 4. Inicio de sesión con datos válidos
        Given I navigate to login page "<LOGINURL>"
        And I wait for 5 seconds
        When I enter email "<USERNAME>"
        And I wait for 5 seconds
        When I enter password "<PASSWORD>"
        And I wait for 2 seconds
        When I click login button
        And I wait for 5 seconds
        When I go to my profile
        Then I expect to be logged in