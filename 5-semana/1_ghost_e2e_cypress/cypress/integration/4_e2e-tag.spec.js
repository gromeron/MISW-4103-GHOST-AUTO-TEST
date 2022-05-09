context("Actions", () => {
    beforeEach(() => {
        cy.visit("http://localhost:2368/ghost/#/signin");
        cy.get("#ember8").type("g.romeron2@uniandes.edu.co", { force: true });
        cy.get("#ember10").type("1234567890!", { force: true });
        cy.get("#ember12").click();
        cy.wait(7000);
    });

    it("17. Usuario logueado - Ver página de tags", () => {
        cy.screenshot("Tag/Escenario17_1");
        cy.get('a[href*="tags"]').click();
        cy.wait(7000);
        cy.screenshot("Tag/Escenario17_2");
        cy.url().should("eq", "http://localhost:2368/ghost/#/tags");
        cy.screenshot("Tag/Escenario17_3");
    });

    it("18. Usuario logueado - Crear tag nuevo - Sin información", () => {
        cy.screenshot("Tag/Escenario18_1");
        cy.get('a[href*="tags"]').click();
        cy.wait(7000);
        cy.screenshot("Tag/Escenario18_2");
        cy.url().should("eq", "http://localhost:2368/ghost/#/tags");
        cy.screenshot("Tag/Escenario18_3");
        cy.get('a[href*="tags/new"]').first().click();
        cy.wait(4000);
        cy.screenshot("Tag/Escenario18_4");
        cy.url().should("eq", "http://localhost:2368/ghost/#/tags/new")
        cy.screenshot("Tag/Escenario18_5");
        cy.get(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click();
        cy.screenshot("Tag/Escenario18_6");
    });

    it("19. Usuario logueado - Crear tag nuevo - Con información", () => {
        cy.screenshot("Tag/Escenario19_1");
        cy.get('a[href*="tags"]').click();
        cy.wait(7000);
        cy.screenshot("Tag/Escenario19_2");
        cy.url().should("eq", "http://localhost:2368/ghost/#/tags");
        cy.screenshot("Tag/Escenario19_3");
        cy.get('a[href*="tags/new"]').first().click();
        cy.wait(4000);
        cy.screenshot("Tag/Escenario19_4");
        cy.url().should("eq", "http://localhost:2368/ghost/#/tags/new")
        cy.screenshot("Tag/Escenario19_5");
        cy.get("#tag-name")
          .type("Tag nuevo");
        cy.get(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click();
        cy.screenshot("Tag/Escenario19_6");
    });
});