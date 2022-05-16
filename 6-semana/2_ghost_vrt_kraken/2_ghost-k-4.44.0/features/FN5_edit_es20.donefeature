Feature: Actualizar perfil

    @user1 @web
    Scenario: 20. Actualizar contraseña con el campo "old password" invalido
        Given I navigate to login page "<LOGINURL>"
        And I wait for 2 seconds
        When I enter email "<USERNAME>"
        And I wait for 2 seconds
        When I enter password "<PASSWORD>"
        And I wait for 2 seconds
        When I click login button
        And I wait for 2 seconds
        When I open staff page
        And I wait for 2 seconds
        When I go to my profile
        And I wait for 2 seconds
        When I type old user password "<WRONGPASSWORD>"
        And I wait for 2 seconds
        When I type new user password "<NEWPASSWORD>"
        And I wait for 2 seconds
        When I type new user password confirmation "<NEWPASSWORD>"
        And I wait for 2 seconds
        When I click update password profile button
        And I wait for 4 seconds
        Then I expect password was not updated