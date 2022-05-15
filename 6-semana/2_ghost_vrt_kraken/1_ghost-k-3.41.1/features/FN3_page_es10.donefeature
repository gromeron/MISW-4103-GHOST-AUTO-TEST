Feature: Crear pagina

    @user1 @web
     Scenario: 10. Usuario logueado - Crear página con título - Navegación segundo nivel
        Given I navigate to login page "<LOGINURL>"
        And I wait for 1 seconds
        When I enter email "<USERNAME>"
        And I wait for 1 seconds
        When I enter password "<PASSWORD>"
        And I wait for 2 seconds
        When I click login button
        And I wait for 2 seconds
        When I go to pages
        And I wait for 2 seconds
        When I click new page button
        And I wait for 3 seconds
        Then I expect we goes to pages editor