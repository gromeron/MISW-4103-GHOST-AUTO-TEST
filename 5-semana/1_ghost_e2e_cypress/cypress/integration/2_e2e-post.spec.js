const { faker } = require('@faker-js/faker');

context("Actions", () => {

    var postTitle = faker.animal.fish();
    var postBody = faker.lorem.paragraphs(1);


     beforeEach(() => {
                cy.visit("http://localhost:2368/ghost/#/signin");
                cy.get(".email.ember-text-field.gh-input.ember-view").type("g.romeron2@uniandes.edu.co", { force: true });
                cy.get(".password.ember-text-field.gh-input.ember-view").type("1234567890!", { force: true });
                cy.get(".login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view").click();
                cy.wait(3000);
            });


           it("5. Usuario logueado - Crear post con título - Publicar - Verificar publicación", () => {
               var postTitle = faker.company.companyName() +" "+ faker.random.number({ min: 1900, max: 2022 });
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
               cy.get(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger").click();
               cy.wait(1000);
               cy.screenshot("Post/Escenario5_6");
               cy.get(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view").click();
               cy.wait(2000);
               cy.get(".gh-notification.gh-notification-passive.ember-view").should('have.length', 1);
               cy.screenshot("Post/Escenario5_7");
               cy.wait(1000);
               cy.get('a[href="#/posts/"]').first().click();
               cy.wait(1000);
               cy.get('.content-list h3')
                   .each(($h3, index, $lis) => {
                       if($h3.length > 0){
                           if($h3[0].innerText === postTitle){
                               expect($h3[0].innerText).to.equal(postTitle)
                           }
                       }
                   });
               cy.screenshot("Post/Escenario5_8");
           });



           it("6. Usuario logueado - Crear post con título y cuerpo - Retornar sin publicar - Verificar que el post este guardado y esté en estado draft", () => {
               var postTitle = faker.company.companyName() +" "+ faker.random.number({ min: 1900, max: 2022 });
               var countPosts = 0;
               var countStatus = 0;
               var indexPost = 0;
               cy.get('a[href="#/posts/"]').first().click();
               cy.wait(1000);
               cy.screenshot("Post/Escenario6_1");
               cy.url().should("eq", "http://localhost:2368/ghost/#/posts");
               cy.screenshot("Post/Escenario6_2");
               cy.wait(1000);
               cy.get('a[href="#/editor/post/"]').first().click();
               cy.wait(1000);
               cy.screenshot("Post/Escenario6_3");
               cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(postTitle, { force: true });
               cy.wait(1000);
               cy.screenshot("Post/Escenario6_4");
               cy.get(".koenig-editor__editor.__mobiledoc-editor.__has-no-content").type(postBody, { force: true });
               cy.wait(1000);
               cy.screenshot("Post/Escenario6_5");
               cy.get('a[href="#/posts/"]').first().click();
               cy.wait(1000);
               cy.screenshot("Post/Escenario6_6");
               cy.get('.content-list h3')
                   .each(($h3, index, $lis) => {
                       countPosts++;
                       if($h3.length > 0){
                           if($h3[0].innerText === postTitle){
                               indexPost = countPosts;
                               expect($h3[0].innerText).to.equal(postTitle);
                           }
                       }
                   });
               cy.get('.content-list span.nowrap')
                   .each(($span, index, $lis) => {
                       countStatus++;
                       if($span.length > 0){
                           if(countStatus === indexPost){
                               expect($span[0].innerText.toUpperCase()).to.equal("DRAFT");
                           }
                       }
                   });
               cy.screenshot("Post/Escenario6_8");
           });
/*
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
