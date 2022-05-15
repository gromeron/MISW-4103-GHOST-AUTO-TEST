Feature: Actualizar perfil

    @user1 @web
    Scenario: 18. Sin información en Full Name y Email
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
        When I type new full name " "
        And I wait for 2 seconds
        When I type new user email " "
        And I wait for 2 seconds
        When I click update profile button
        And I wait for 5 seconds
        Then I expect a red button change profile