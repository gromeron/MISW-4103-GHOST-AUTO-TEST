Feature: Actualizar perfil

    @user1 @web
    Scenario: 19. Actualizar con nueva contraseña, verificar que se actualizó y finalmente actualizar con la contraseña original
        Given I navigate to login page "<LOGINURL>"
        And I wait for 5 seconds
        When I enter email "<USERNAME>"
        And I wait for 5 seconds
        When I enter password "<PASSWORD>"
        And I wait for 2 seconds
        When I click login button
        And I wait for 5 seconds
        When I open tab settings-profile
        And I wait for 2 seconds
        When I go to my profile
        And I wait for 5 seconds
        When I type old user password "<PASSWORD>"
        And I wait for 2 seconds
        When I type new user password "<NEWPASSWORD>"
        And I wait for 2 seconds
        When I type new user password confirmation "<NEWPASSWORD>"
        And I wait for 2 seconds
        When I click update password profile button
        And I wait for 4 seconds
        Then I expect password was updated
        And I wait for 3 seconds
        When I open tab settings-profile
        And I wait for 2 seconds
        When I go to my profile
        And I wait for 5 seconds
        When I type old user password "<NEWPASSWORD>"
        And I wait for 2 seconds
        When I type new user password "<PASSWORD>"
        And I wait for 2 seconds
        When I type new user password confirmation "<PASSWORD>"
        And I wait for 2 seconds
        When I click update password profile button
        And I wait for 4 seconds
        Then I expect password was updated