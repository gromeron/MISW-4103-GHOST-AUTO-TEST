Feature: Iniciar sesión

    @user1 @web
    Scenario: 1. Inicio de sesión con usuario inválido / clave válida
        Given I navigate to login page "<LOGINURL>"
        And I wait for 5 seconds
        When I enter email "<WRONGUSERNAME>"
        And I wait for 5 seconds
        When I enter password "<PASSWORD>"
        And I wait for 2 seconds
        When I click login button
        And I wait for 5 seconds
        Then I expect an error message login