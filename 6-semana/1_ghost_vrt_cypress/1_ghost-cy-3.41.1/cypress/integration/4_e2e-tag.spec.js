const login = require('../functions/login');
const { faker } = require('@faker-js/faker');
const tag = require('../functions/tag');

describe("FN04 - Tags", () => {

    beforeEach(() => {
        cy.clearCookies();
        cy.visit('http://localhost:2368/ghost/');
        if (!cy.url('http://localhost:2368/ghost/#/signin')) {
            cy.get('main').then(($m) => {
                if ($m.find('form')) {
                    if ($m.find('form[id="setup"]')) {
                        login.setUpNewUser(cy, Cypress.env('siteTitle'), Cypress.env('fullName'), Cypress.env('user1Email'), Cypress.env('user1Password'));
                    }
                }
            })
        } else {
            login.loginRegistrar(cy, Cypress.env('user1Email'), Cypress.env('user1Password'));
        }
        cy.wait(3000);
    });

    it("13. Usuario logueado - Crear tag nuevo - Sin información", () => {
        cy.screenshot("Tag/Escenario13_1");
        tag.tagMain(cy);
        cy.screenshot("Tag/Escenario13_2");
        tag.tagNew(cy);
        cy.screenshot("Tag/Escenario13_3");
        tag.tagSave(cy);
        cy.screenshot("Tag/Escenario13_4");
        tag.tagError(cy);
        cy.screenshot("Tag/Escenario13_5");
    });

    it("14. Usuario logueado - ver página de tags - Picar primer tag - Verificar que no esté vácio", () => {
        cy.screenshot("Tag/Escenario14_1");
        tag.tagMain(cy);
        cy.screenshot("Tag/Escenario14_2");
        tag.tagFirstElement(cy);
        cy.screenshot("Tag/Escenario14_3");
        tag.tagNameNotEmpty(cy);
        cy.screenshot("Tag/Escenario14_4");
    });

    it("15. Usuario logueado - Crear tag nuevo - Con titulo - Grabar - Verificar que se haya creado el tag", () => {
        let tagTitle = faker.company.companyName();

        cy.screenshot("Tag/Escenario15_1");
        tag.tagMain(cy);
        cy.screenshot("Tag/Escenario15_2");
        tag.tagNew(cy);
        cy.screenshot("Tag/Escenario15_3");
        tag.tagTypeTitle(cy, tagTitle);
        cy.screenshot("Tag/Escenario15_4");
        tag.tagSave(cy);
        cy.screenshot("Tag/Escenario15_5");
        tag.tagMain(cy);
        cy.screenshot("Tag/Escenario15_6");
        tag.verifyTagCreated(cy, tagTitle);
        cy.screenshot("Tag/Escenario15_7");
    });

    it("16. Usuario logueado - Crear tag nuevo - Con titulo - Grabar - Verificar tag creado en la lista - Seleccionar tag recientemente creado - Borrar tag - Verificar que el tag haya sido borrado", () => {
        let tagTitle = faker.company.companyName();

        cy.screenshot("Tag/Escenario15_1");
        tag.tagMain(cy);
        cy.screenshot("Tag/Escenario15_2");
        tag.tagNew(cy);
        cy.screenshot("Tag/Escenario15_3");
        tag.tagTypeTitle(cy, tagTitle);
        cy.screenshot("Tag/Escenario15_4");
        tag.tagSave(cy);
        cy.screenshot("Tag/Escenario15_5");
        tag.tagMain(cy);
        cy.screenshot("Tag/Escenario15_6");
        tag.verifyTagCreated(cy, tagTitle);
        cy.wait(3000);
        cy.screenshot("Tag/Escenario15_7");
        tag.selectTagCreated(cy, tagTitle)
        cy.screenshot("Tag/Escenario15_8");
        tag.deleteTagButton(cy);
        cy.screenshot("Tag/Escenario15_9");
        tag.deleteTagButtonConfirm(cy);
        cy.screenshot("Tag/Escenario15_10");
        tag.verifyDeletedTag(cy, tagTitle);
        cy.screenshot("Tag/Escenario15_11");
    });
});