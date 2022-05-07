context("Actions", () => {
    beforeEach(() => {
      cy.visit("http://localhost:2368/ghost/#/signin");
    });
  
    it("1. Inicio de sesión con usuario inválido / clave válida", () => {
      cy.get("#ember8").type("correoInvalido@correo.com", { force: true });
      cy.get("#ember10").type("1234567890!", { force: true });
      cy.get("#ember12").click();
      cy.wait(2000);
      cy.screenshot("Login/Escenario1_1");
      cy.get("p").should(($p) => {
        expect($p.first()).to.contain(
          "There is no user with that email address."
        );
      });
      cy.screenshot("Login/Escenario1_2");
    });
  
    it("2. Inicio de sesión con clave inválida / usuario válido", () => {
      cy.get("#ember8").type("g.romeron2@uniandes.edu.co", { force: true });
      cy.get("#ember10").type("claveInvalida", { force: true });
      cy.get("#ember12").click();
      cy.wait(2000);
  
      cy.screenshot("Login/Escenario2_1");
      cy.get("p").should(($p) => {
        expect($p.first()).to.contain("Your password is incorrect.");
      });
      cy.screenshot("Login/Escenario2_2");
    });
  
    it("3. Inicio de sesión sin datos", () => {
      cy.get("#ember12").click();
      cy.wait(2000);
      cy.screenshot("Login/Escenario3_1");
      cy.get("p").should(($p) => {
        expect($p.first()).to.contain("Please fill out the form to sign in.");
      });
      cy.screenshot("Login/Escenario3_2");
    });
  
    it("4. Inicio de sesión con datos válidos", () => {
      cy.get("#ember8").type("g.romeron2@uniandes.edu.co", { force: true });
      cy.get("#ember10").type("1234567890!", { force: true });
      cy.get("#ember12").click();
      cy.screenshot("Login/Escenario4_1");
      cy.wait(7000);
      cy.url().should("eq", "http://localhost:2368/ghost/#/site");
      cy.screenshot("Login/Escenario4_2");
    });
  });