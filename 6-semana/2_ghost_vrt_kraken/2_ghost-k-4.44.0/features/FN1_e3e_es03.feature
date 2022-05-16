Feature: Iniciar sesión

    @user1 @web
    Scenario: 3. Inicio de sesión sin datos
         Given I navigate to login page "<LOGINURL>"
        And I wait for 3 seconds
        When I enter email " "
        And I wait for 3 seconds
        When I enter password " "
        And I wait for 2 seconds
        When I click login button
        And I wait for 3 seconds
        Then I expect an error message login