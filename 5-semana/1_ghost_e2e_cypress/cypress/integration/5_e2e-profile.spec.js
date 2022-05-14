const { faker } = require('@faker-js/faker');

context("Actions", () => {

    beforeEach(() => {
        cy.visit("http://localhost:2368/ghost/#/signin");
        cy.get(".email.ember-text-field.gh-input.ember-view").type("g.romeron2@uniandes.edu.co", { force: true });
        cy.get(".password.ember-text-field.gh-input.ember-view").type("1234567890!", { force: true });
        cy.get(".login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view").click();
        cy.wait(3000);
        cy.url().should("eq", "http://localhost:2368/ghost/#/site");
    });

    it("20. actualizar perfil datos básicos (nombre, slug, email) ", () => {
        var name = faker.name.findName();
        var userName = faker.internet.userName(name);
        var fakeEmail = faker.internet.email(name);
        cy.get('a[href="#/staff/"]').first().click();
        cy.wait(3000);
        cy.get('.apps-grid a').first().click();
        cy.wait(3000);
        cy.screenshot("Perfil/Escenario20_1");
        cy.get("#user-name").clear();
        cy.get("#user-slug").clear();
        cy.get("#user-email").clear();
        cy.get("#user-name").type(name, { force: true });
        cy.get("#user-slug").type(userName, { force: true });
        cy.get("#user-email").type(fakeEmail, { force: true });
        cy.get(".view-actions button").click();
        cy.wait(2000);
        cy.get(".gh-btn.gh-btn-blue.gh-btn-icon.gh-btn-green.ember-view").should('have.length', 1);
        cy.screenshot("Perfil/Escenario20_2");
        cy.get("#user-name").clear();
        cy.get("#user-slug").clear();
        cy.get("#user-email").clear();
        cy.get("#user-name").type("Gustavo Romero", { force: true });
        cy.get("#user-slug").type("gustavo", { force: true });
        cy.get("#user-email").type("g.romeron2@uniandes.edu.co", { force: true });
        cy.get(".view-actions button").click();
        cy.wait(2000);
        cy.get(".gh-btn.gh-btn-blue.gh-btn-icon.gh-btn-green.ember-view").should('have.length', 1);
        cy.screenshot("Perfil/Escenario20_3");
    });

});