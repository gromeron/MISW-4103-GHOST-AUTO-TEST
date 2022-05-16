Feature: Iniciar sesión

    @user1 @web
    Scenario: 2. Inicio de sesión con usuario válido / clave inválida
        Given I navigate to login page "<LOGINURL>"
        And I wait for 3 seconds
        When I enter email "<USERNAME>"
        And I wait for 3 seconds
        When I enter password "<WRONGPASSWORD>"
        And I wait for 3 seconds
        When I click login button
        And I wait for 3 seconds
        Then I expect an error message login