const {faker} = require("@faker-js/faker");
context("Actions", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3002/ghost/#/signin");
        cy.get(".email.ember-text-field.gh-input.ember-view").type("g.romeron2@uniandes.edu.co", { force: true });
        cy.get(".password.ember-text-field.gh-input.ember-view").type("1234567890!", { force: true });
        cy.get(".login.gh-btn").click();
        cy.wait(3000);
    });

    it("09. Usuario logueado - Crear página con título - Publicar página", () => {
        var pageTitle = faker.animal.fish();
        var postBody = faker.lorem.paragraphs(1);
        cy.get('a[href="#/pages/"]').first().click();
        cy.wait(7000);
        cy.url().should("eq", "http://localhost:3002/ghost/#/pages");
        cy.get('a[href*="editor/page"]').first().click();
        cy.wait(7000);
        cy.url().should("eq", "http://localhost:3002/ghost/#/editor/page");
        cy.screenshot("Page/Escenario9_1");
        cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(pageTitle).should("have.value", pageTitle);
        cy.wait(1000);
        cy.get(".koenig-editor__editor.__mobiledoc-editor").type(postBody, { force: true });
        cy.get(".gh-publishmenu.ember-view").click();
        cy.wait(1000);
        cy.screenshot("Post/Escenario9_2");
        cy.get(".gh-publishmenu-button").click();
        cy.wait(2000);
        cy.get(".gh-notification.gh-notification-passive.ember-view").should('have.length', 1);
        cy.screenshot("Page/Escenario9_3");
    });

    it("10. Usuario logueado - Crear página con título - Navegación segundo nivel", () => {
        cy.get('a[href="#/pages/"]').first().click();
        cy.screenshot("Page/Escenario10_1");
        cy.wait(7000);
        cy.url().should("eq", "http://localhost:3002/ghost/#/pages");
        cy.get('a[href*="editor/page"]').first().click();
        cy.wait(7000);
        cy.screenshot("Page/Escenario10_2");
        cy.url().should("eq", "http://localhost:3002/ghost/#/editor/page");
    });

    it("11. Usuario logueado - Crear página con título - Buscar en el listado la pagina en estado DRAFT", () => {
        var pageTitle = faker.animal.fish();
        var postBody = faker.lorem.paragraphs(1);
        cy.get('a[href="#/pages/"]').first().click();
        cy.wait(2000);
        cy.url().should("eq", "http://localhost:3002/ghost/#/pages");
        cy.screenshot("Page/Escenario11_1");
        cy.get('a[href*="editor/page"]').first().click();
        cy.wait(2000);
        cy.url().should("eq", "http://localhost:3002/ghost/#/editor/page");
        cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(pageTitle).should("have.value", pageTitle);
        cy.wait(1000);
        cy.get(".koenig-editor__editor.__mobiledoc-editor").type(postBody, { force: true });
        cy.screenshot("Page/Escenario11_2");
        cy.wait(1000);
        cy.visit("http://localhost:3002/ghost/#/pages");
        cy.wait(2000);
        cy.get('.gh-list-row.gh-posts-list-item h3')
            .each(($h3, index, $lis) => {
                if ($h3.length > 0) {
                    if ($h3[0].innerText === pageTitle) {
                        expect($h3[0].innerText).to.equal(pageTitle)
                    }
                }
            });
        cy.screenshot("Page/Escenario11_3");
    });

    it("12. Usuario logueado - Crear página con título - Buscar en el listado la pagina en estado PUBLISHED", () => {
        var pageTitle = faker.animal.fish();
        var postBody = faker.lorem.paragraphs(1);
        cy.get('a[href="#/pages/"]').first().click();
        cy.wait(2000);
        cy.url().should("eq", "http://localhost:3002/ghost/#/pages");
        cy.screenshot("Page/Escenario12_1");
        cy.get('a[href*="editor/page"]').first().click();
        cy.wait(2000);
        cy.url().should("eq", "http://localhost:3002/ghost/#/editor/page");
        cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(pageTitle).should("have.value", pageTitle);
        cy.wait(1000);
        cy.get(".koenig-editor__editor.__mobiledoc-editor").type(postBody, { force: true });
        cy.screenshot("Page/Escenario12_2");
        cy.wait(1000);
        cy.get(".gh-publishmenu.ember-view").click();
        cy.wait(1000);
        cy.get(".gh-publishmenu-button").click();
        cy.wait(2000);
        cy.get(".gh-notification.gh-notification-passive.ember-view").should('have.length', 1);
        cy.screenshot("Page/Escenario12_3");
        cy.wait(1000);
        cy.visit("http://localhost:3002/ghost/#/pages");
        cy.wait(5000);
        cy.get('.gh-list-row.gh-posts-list-item h3')
            .each(($h3, index, $lis) => {
                if ($h3.length > 0) {
                    if ($h3[0].innerText === pageTitle) {
                        expect($h3[0].innerText).to.equal(pageTitle)
                    }
                }
            });
        cy.screenshot("Page/Escenario12_4");
    });


});