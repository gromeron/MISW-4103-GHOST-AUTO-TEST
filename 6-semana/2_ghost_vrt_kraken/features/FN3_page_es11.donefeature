Feature: Crear pagina

    @user1 @web
        Scenario: 11. Usuario logueado - Crear página con título - Dejar en estado Draft - Verificar en listas de paginas que esté el recien dejado en Draft.
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
        When I type page title draft
        And I wait for 2 seconds
        When I type page description "<PAGEDESCRIPTION>"
        And I wait for 2 seconds
        When I go to pages
        And I wait for 4 seconds
        Then I expect page title recently edited is in draft
