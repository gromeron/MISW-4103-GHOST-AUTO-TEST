Feature: Iniciar sesión

    @user1 @web
    Scenario: 1. Inicio de sesión con usuario inválido / clave válida
        Given I navigate to page "http://localhost:2368/ghost/#/signin"
        And I wait for 5 seconds
        When I enter email "<WRONGUSERNAME>"
        And I wait for 5 seconds
        When I enter password "<PASSWORD>"
        And I wait for 2 seconds
        When I click button

    @user2 @web
    Scenario: 2. Inicio de sesión con usuario válido / clave inválida
        Given I navigate to page "http://localhost:2368/ghost/#/signin"
        And I wait for 5 seconds
        When I enter email "<USERNAME>"
        And I wait for 5 seconds
        When I enter password "<WRONGPASSWORD>"
        And I wait for 2 seconds
        When I click button

    @user3 @web
    Scenario: 3. Inicio de sesión sin datos
        Given I navigate to page "http://localhost:2368/ghost/#/signin"
        And I wait for 5 seconds
        When I enter email " "
        And I wait for 5 seconds
        When I enter password " "
        And I wait for 2 seconds
        When I click button

    @user4 @web
    Scenario: 4. Inicio de sesión con datos válidos
        Given I navigate to page "http://localhost:2368/ghost/#/signin"
        And I wait for 5 seconds
        When I enter email "<USERNAME>"
        And I wait for 5 seconds
        When I enter password "<PASSWORD>"
        And I wait for 2 seconds
        When I click button