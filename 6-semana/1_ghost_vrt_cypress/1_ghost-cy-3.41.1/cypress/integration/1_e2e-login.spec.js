const login = require('../functions/login');
const { faker } = require('@faker-js/faker');

describe("FN01 - Login", () => {

  beforeEach(() => {
    cy.clearCookies();
    cy.visit('http://localhost:2368/ghost/');
    /* if (!cy.url('http://localhost:2368/ghost/#/signin')) {
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
    login.logout(cy); */
  });

  it("1. Inicio de sesión con usuario inválido / clave válida", () => {
    cy.screenshot("Login/Escenario1_1");
    login.loginRegistrar(cy, 'correoInvalido@correo.com', '1234567890!');
    cy.screenshot("Login/Escenario1_2");
    cy.get("p").should(($p) => {
      expect($p.first()).to.contain(
        "There is no user with that email address."
      );
    });
    cy.screenshot("Login/Escenario1_2");
  });

  it("2. Inicio de sesión con clave inválida / usuario válido", () => {
    cy.screenshot("Login/Escenario2_1");
    login.loginRegistrar(cy, 'g.romeron2@uniandes.edu.co', 'claveInvalida');
    cy.screenshot("Login/Escenario2_2");
    cy.get("p").should(($p) => {
      expect($p.first()).to.contain("Your password is incorrect.");
    });
    cy.screenshot("Login/Escenario2_3");
  });

  it("3. Inicio de sesión sin datos", () => {
    cy.screenshot("Login/Escenario3_1");
    cy.get("button#ember12.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view").first().click();
    cy.screenshot("Login/Escenario3_2");
    cy.get("p").should(($p) => {
      expect($p.first()).to.contain("Please fill out the form to sign in.");
    });
    cy.screenshot("Login/Escenario3_3");
  });

  it("4. Inicio de sesión con datos válidos", () => {
    cy.screenshot("Login/Escenario4_1");
    login.loginRegistrar(cy, Cypress.env('user1Email'), Cypress.env('user1Password'));
    cy.screenshot("Login/Escenario4_2");
    cy.wait(3000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/site");
    cy.wait(1000);
    cy.screenshot("Login/Escenario4_2");
  });
});
