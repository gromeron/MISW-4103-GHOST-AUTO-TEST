Feature: Crear posts

    @user1 @web
    Scenario: 6. Usuario logueado - Crear post con título y cuerpo - Retornar sin publicar - Verificar que el post este guardado y esté en estado draft
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
        When I click on post back link
        And I wait for 1 seconds
        Then Verify last post saved and is in draft status