Feature: Crear posts

    @user1 @web
    Scenario: 5. Usuario logueado - Crear post con título - Publicar - Verificar publicación
        Given I navigate to login page "<LOGINURL>"
        And I wait for 1 seconds
        When I enter email "<USERNAME>"
        And I wait for 1 seconds
        When I enter password "<PASSWORD>"
        And I wait for 2 seconds
        When I click login button
        And I wait for 1 seconds
        When I go to posts
        And I wait for 1 seconds
        When I click on new post
        And I wait for 1 seconds
        When I type a post title
        And I wait for 1 seconds
        When I type a post body
        And I wait for 1 seconds
        When I click on a publish link
        And I wait for 1 seconds
        When I click on a final publish button
        And I wait for 1 seconds
        When I click on a confirmation publish button
        And I wait for 1 seconds
        When I go to posts
        And I wait for 1 seconds
        Then Verify post recently created