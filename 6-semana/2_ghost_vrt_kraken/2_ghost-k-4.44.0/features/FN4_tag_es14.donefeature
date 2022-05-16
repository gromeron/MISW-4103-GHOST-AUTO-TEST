Feature: Crear tags

    @user1 @web
    Scenario: 14. Usuario logueado - ver página de tags - Picar primer tag - Verificar que no esté vácio
        Given I navigate to login page "<LOGINURL>"
        And I wait for 2 seconds
        When I enter email "<USERNAME>"
        And I wait for 2 seconds
        When I enter password "<PASSWORD>"
        And I wait for 2 seconds
        When I click login button
        And I wait for 1 seconds
        When I go to tags
        And I wait for 1 seconds
        When I scroll to first tag
        And I wait for 2 seconds
        When I click on the first Tag
        And I wait for 2 seconds
        Then The tag name should not be empty