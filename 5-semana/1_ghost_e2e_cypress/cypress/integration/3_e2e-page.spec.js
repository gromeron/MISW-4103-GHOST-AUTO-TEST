context("Actions", () => {
    beforeEach(() => {
        cy.visit("http://localhost:2368/ghost/#/signin");
        cy.get("#ember8").type("g.romeron2@uniandes.edu.co", { force: true });
        cy.get("#ember10").type("1234567890!", { force: true });
        cy.get("#ember12").click();
        cy.wait(7000);
    });

    it("12. Usuario logueado - Crear página con título - Navegación", () => {
        cy.get("#ember37").click();
        cy.wait(7000);
        cy.screenshot("Page/Escenario12_1");
        cy.url().should("eq", "http://localhost:2368/ghost/#/pages");
        cy.screenshot("Page/Escenario12_2");
    });

    it("13. Usuario logueado - Crear página con título - Navegación segundo nivel", () => {
        cy.get("#ember37").click();
        cy.wait(7000);
        cy.url().should("eq", "http://localhost:2368/ghost/#/pages");
        cy.get('a[href*="editor/page"]').first().click();
        cy.wait(7000);
        cy.screenshot("Page/Escenario13_1");
        cy.url().should("eq", "http://localhost:2368/ghost/#/editor/page");
        cy.screenshot("Page/Escenario13_2");
    });

    it("14. Usuario logueado - Crear página con título", () => {
        cy.get("#ember37").click();
        cy.wait(7000);
        cy.url().should("eq", "http://localhost:2368/ghost/#/pages");
        cy.get('a[href*="editor/page"]').first().click();
        cy.wait(7000);
        cy.url().should("eq", "http://localhost:2368/ghost/#/editor/page");
        cy.screenshot("Page/Escenario14_1");
        cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
            .type("Cypress page")
            .should("have.value", "Cypress page");
        cy.screenshot("Page/Escenario14_2");
    });

    it("15. Usuario logueado - Crear página con título - Ir al listado de páginas", () => {
        cy.get("#ember37").click();
        cy.wait(2000);
        cy.url().should("eq", "http://localhost:2368/ghost/#/pages");
        cy.get('a[href*="editor/page"]').first().click();
        cy.wait(2000);
        cy.url().should("eq", "http://localhost:2368/ghost/#/editor/page");
        cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(
            "Cypress page consulta"
        );
        cy.wait(7000);
        cy.visit("http://localhost:2368/ghost/#/pages");
        cy.screenshot("Page/Escenario15_1");
        cy.wait(2000);
        cy.screenshot("Page/Escenario15_2");
    });

    it("16. Usuario logueado - Crear página con título - Buscar en el listado", () => {
        cy.get("#ember37").click();
        cy.wait(2000);
        cy.url().should("eq", "http://localhost:2368/ghost/#/pages");
        cy.get('a[href*="editor/page"]').first().click();
        cy.wait(2000);
        cy.url().should("eq", "http://localhost:2368/ghost/#/editor/page");
        cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(
            "Cypress page consulta"
        );
        cy.get(".blue.link.fw4.flex.items-center.ember-view").click();
        cy.wait(7000);
        cy.visit("http://localhost:2368/ghost/#/pages");
        cy.wait(2000);
        cy.screenshot("Page/Escenario16_1");
        cy.get(".gh-list-row.gh-posts-list-item.ember-view").should(($p) => {
            expect($p.first()).to.contain("Cypress page consulta");
        });
        cy.screenshot("Page/Escenario16_2");
    });
});