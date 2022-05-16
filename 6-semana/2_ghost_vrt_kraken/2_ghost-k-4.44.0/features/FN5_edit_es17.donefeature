Feature: Actualizar perfil

    @user1 @web
    Scenario: 17. Cambiar información Full Name, Slug y Email, verificar que se actualizó y volver actualizar al email original.
        Given I navigate to login page "<LOGINURL>"
        And I wait for 2 seconds
        When I enter email "<USERNAME>"
        And I wait for 2 seconds
        When I enter password "<PASSWORD>"
        And I wait for 2 seconds
        When I click login button
        And I wait for 3 seconds
        When I open staff page
        And I wait for 2 seconds
        When I go to my profile
        And I wait for 5 seconds
        When I type new full name "<NEWFULLNAME>"
        And I wait for 2 seconds
        When I type new user slug "<NEWSLUGNAME>"
        And I wait for 2 seconds
        When I type new user email "<NEWEMAIL>"
        And I wait for 2 seconds
        When I click update profile button
        And I wait for 5 seconds
        When I open staff page
        And I wait for 2 seconds
        When I go to my profile
        And I wait for 5 seconds
        Then I expect new email profile saved "<NEWEMAIL>"
        And I wait for 3 seconds
        When I type original user email "<USERNAME>"
        And I wait for 2 seconds
        When I click update profile button
        And I wait for 5 seconds
        When I open staff page
        And I wait for 2 seconds
        When I go to my profile
        Then I expect original email profile updated "<USERNAME>"