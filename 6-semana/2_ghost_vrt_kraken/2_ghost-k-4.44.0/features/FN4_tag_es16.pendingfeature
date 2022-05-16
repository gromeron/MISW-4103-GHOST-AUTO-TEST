Feature: Crear tags

    @user1 @web
    Scenario: 16. Usuario logueado - Crear tag nuevo - Con titulo - Grabar - Verificar tag creado en la lista - Seleccionar tag recientemente creado - Borrar tag - Verificar que el tag haya sido borrado
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
        When I click on new tag
        And I wait for 1 seconds
        When I type a tag title
        And I wait for 1 seconds
        When I click on save tag
        And I wait for 1 seconds
        Then Verify tag recently created
        And I wait for 1 seconds
        When I go to tags
        And I wait for 1 seconds
        When Select tag recently created
        And I wait for 1 seconds
        When I click on delete tag button
        And I wait for 1 seconds
        When I click on delete tag confirm button
        And I wait for 1 seconds
        Then Deleted tag should not be on the tag list