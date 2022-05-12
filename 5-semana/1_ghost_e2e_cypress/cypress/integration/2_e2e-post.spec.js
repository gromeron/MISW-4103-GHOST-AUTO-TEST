const { faker } = require('@faker-js/faker');

context("Actions", () => {

    var postTitle = faker.animal.fish();
    var postBody = faker.lorem.paragraphs(2);


    beforeEach(() => {
        cy.visit("http://localhost:2368/ghost/#/signin");
        cy.get("#ember8").type("g.romeron2@uniandes.edu.co", { force: true });
        cy.get("#ember10").type("1234567890!", { force: true });
        cy.get("#ember12").click();
        cy.wait(7000);
    });

    it("5. Usuario logueado - Crear post con título - Publicar - Verificar publicación", () => {
        cy.get('a[href="#/posts/"]').first().click();
        cy.wait(1000);
        cy.screenshot("Post/Escenario5_1");
        cy.url().should("eq", "http://localhost:2368/ghost/#/posts");
        cy.screenshot("Post/Escenario5_2");
        cy.wait(1000);
        cy.get('a[href="#/editor/post/"]').first().click();
        cy.wait(1000);
        cy.screenshot("Post/Escenario5_3");
        cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(postTitle, { force: true });
        cy.wait(1000);
        cy.screenshot("Post/Escenario5_4");
        cy.get(".koenig-editor__editor.__mobiledoc-editor.__has-no-content").type(postBody, { force: true });
        cy.wait(1000);
        cy.screenshot("Post/Escenario5_5");
    });

    /* it("6. Usuario logueado - Crear post con título navegación segundo nivel", () => {
        cy.get("#ember28").click();
        cy.wait(7000);
        cy.url().should("eq", "http://localhost:2368/ghost/#/posts");
        cy.get('a[href*="editor/post"]').first().click();
        cy.wait(7000);
        cy.screenshot("Post/Escenario6_1");
        cy.url().should("eq", "http://localhost:2368/ghost/#/editor/post");
        cy.screenshot("Post/Escenario6_2");
    });

    it("7. Usuario logueado -Crear post con título", () => {
        cy.get("#ember28").click();
        cy.wait(7000);
        cy.url().should("eq", "http://localhost:2368/ghost/#/posts");
        cy.get('a[href*="editor/post"]').first().click();
        cy.wait(7000);
        cy.url().should("eq", "http://localhost:2368/ghost/#/editor/post");
        cy.screenshot("Post/Escenario7_1");
        cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
            .type("Cypress post title from cypress")
            .should("have.value", "Cypress post title from cypress");
        cy.screenshot("Post/Escenario7_2");
    });

    it("8. Usuario logueado -Crear post con título - ir al listado de post", () => {
        cy.get("#ember28").click();
        cy.wait(2000);
        cy.url().should("eq", "http://localhost:2368/ghost/#/posts");
        cy.get('a[href*="editor/post"]').first().click();
        cy.wait(2000);
        cy.url().should("eq", "http://localhost:2368/ghost/#/editor/post");
        cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(
            "Cypress post consulta"
        );
        cy.wait(2000);
        cy.screenshot("Post/Escenario8_1");
        cy.visit("http://localhost:2368/ghost/#/posts");
        cy.screenshot("Post/Escenario8_2");
    });

    it("9. Usuario logueado -Crear post con título - buscar en el listado", () => {
        cy.get("#ember28").click();
        cy.wait(2000);
        cy.url().should("eq", "http://localhost:2368/ghost/#/posts");
        cy.get('a[href*="editor/post"]').first().click();
        cy.wait(2000);
        cy.url().should("eq", "http://localhost:2368/ghost/#/editor/post");
        cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(
            "Cypress post consulta"
        );
        cy.wait(1000);
        cy.get(".koenig-editor__editor-wrapper").click();
        cy.wait(7000);
        cy.visit("http://localhost:2368/ghost/#/posts");
        cy.wait(2000);
        cy.screenshot("Post/Escenario9_1");
        cy.get(".gh-list-row.gh-posts-list-item").should(($p) => {
            expect($p.first()).to.contain("Cypress post consulta");
        });
        cy.screenshot("Post/Escenario9_1");
    });

    it('10. Usuario logueado - buscar post existente - publicar', () => {
        cy.visit('http://localhost:2368/ghost/#/posts')
        cy.wait(2000);
        cy.get(".gh-content-entry-title").first().click({ force: true });
        cy.wait(7000);
        cy.get(".gh-btn span").first().click({ force: true });
        cy.wait(2000);
        cy.get(".gh-btn-blue").click();
        cy.wait(2000);
        cy.screenshot('Post/Escenario10_1')
        cy.get('#ember245').first().should(($p) => {
            expect($p.first()).to.contain('Published')
        });
        cy.screenshot('Post/Escenario10_2')
    })

    it('11. Usuario logueado - buscar post existente - despublicar', () => {
        cy.visit('http://localhost:2368/ghost/#/posts')
        cy.wait(2000);
        cy.get(".gh-content-entry-title").first().click({ force: true });
        cy.wait(7000);
        cy.log("Update derecho superior")
        cy.get(".gh-btn span").first().click({ force: true });
        cy.wait(2000);
        cy.log("Radio para despublicar")
        cy.get(".gh-publishmenu-radio-label").first().click({ force: true });
        cy.wait(2000);
        cy.log("Click en el botón para despublicar.")
        cy.get("#ember321").click();
        cy.wait(2000);
        cy.log("El post fue publicado. Comparación.")
        cy.screenshot('Post/Escenario11_1')
        cy.get('#ember245').first().should(($p) => {
            expect($p.first()).to.contain('Draft')
        });
        cy.screenshot('Post/Escenario11_2')
    }) */
});