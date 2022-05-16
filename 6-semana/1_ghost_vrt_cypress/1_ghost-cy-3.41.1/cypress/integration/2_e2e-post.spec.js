const login = require('../functions/login');
const { faker } = require('@faker-js/faker');

describe("FN02 - Post", () => {

    var postTitle = faker.animal.fish();
    var postBody = faker.lorem.paragraphs(1);


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


    it("5. Usuario logueado - Crear post con título - Publicar - Verificar publicación", () => {
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
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
                if ($h3.length > 0) {
                    if ($h3[0].innerText === postTitle) {
                        expect($h3[0].innerText).to.equal(postTitle)
                    }
                }
            });
        cy.screenshot("Post/Escenario5_8");
    });


    it("6. Usuario logueado - Crear post con título y cuerpo - Retornar sin publicar - Verificar que el post este guardado y esté en estado draft", () => {
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
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
                if ($h3.length > 0) {
                    if ($h3[0].innerText === postTitle) {
                        indexPost = countPosts;
                        expect($h3[0].innerText).to.equal(postTitle);
                    }
                }
            });
        cy.get('.content-list span.nowrap')
            .each(($span, index, $lis) => {
                countStatus++;
                if ($span.length > 0) {
                    if (countStatus === indexPost) {
                        expect($span[0].innerText.toUpperCase()).to.equal("DRAFT");
                    }
                }
            });
        cy.screenshot("Post/Escenario6_8");
    });

    it("7. Usuario logueado - Crear post con título y cuerpo - Retornar sin publicar - Verificar que el post este guardado y esté en estado draft - Volver a abrir - Publicar - Verificar que este en estado publicado", () => {
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var countPosts = 0;
        var countStatus = 0;
        var indexPost = 0;
        cy.get('a[href="#/posts/"]').first().click();
        cy.wait(1000);
        cy.screenshot("Post/Escenario7_1");
        cy.url().should("eq", "http://localhost:2368/ghost/#/posts");
        cy.screenshot("Post/Escenario7_2");
        cy.wait(1000);
        cy.get('a[href="#/editor/post/"]').first().click();
        cy.wait(1000);
        cy.screenshot("Post/Escenario7_3");
        cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(postTitle, { force: true });
        cy.wait(1000);
        cy.screenshot("Post/Escenario7_4");
        cy.get(".koenig-editor__editor.__mobiledoc-editor.__has-no-content").type(postBody, { force: true });
        cy.wait(1000);
        cy.screenshot("Post/Escenario7_5");
        cy.get('a[href="#/posts/"]').first().click();
        cy.wait(1000);
        cy.screenshot("Post/Escenario7_6");
        cy.get('.content-list h3')
            .each(($h3) => {
                countPosts++;
                if ($h3.length > 0) {
                    if ($h3[0].innerText === postTitle) {
                        indexPost = countPosts;
                        expect($h3[0].innerText).to.equal(postTitle);
                    }
                }
            });
        cy.get('.content-list span.nowrap')
            .each(($span) => {
                countStatus++;
                if ($span.length > 0) {
                    if (countStatus === indexPost) {
                        expect($span[0].innerText.toUpperCase()).to.equal("DRAFT");
                    }
                }
            });
        cy.wait(1000);
        cy.screenshot("Post/Escenario7_7");
        cy.get('.content-list span.nowrap')
            .each(($span) => {
                countStatus++;
                if ($span.length > 0) {
                    if (countStatus === indexPost) {
                        expect($span[0].innerText.toUpperCase()).to.equal("DRAFT");
                    }
                }
            });
        cy.wait(1000);
        cy.screenshot("Post/Escenario7_8");
        cy.get('.content-list span.nowrap').first().click();
        cy.wait(1000);
        cy.screenshot("Post/Escenario7_9");
        cy.get(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger").click();
        cy.wait(1000);
        cy.screenshot("Post/Escenario7_10");
        cy.get(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view").click();
        cy.wait(2000);
        cy.get(".gh-notification.gh-notification-passive.ember-view").should('have.length', 1);
        cy.screenshot("Post/Escenario7_11");
        cy.wait(1000);
        cy.get('a[href="#/posts/"]').first().click();
        cy.wait(1000);
        cy.get('.content-list h3')
            .each(($h3) => {
                if ($h3.length > 0) {
                    if ($h3[0].innerText === postTitle) {
                        expect($h3[0].innerText).to.equal(postTitle)
                    }
                }
            });
        cy.screenshot("Post/Escenario7_12");
        cy.wait(1000);
        cy.screenshot("Post/Escenario7_13");
        cy.get('.content-list span.nowrap')
            .each(($span) => {
                countStatus++;
                if ($span.length > 0) {
                    if (countStatus === indexPost) {
                        expect($span[0].innerText.toUpperCase()).to.equal("PUBLISHED");
                    }
                }
            });
        cy.wait(1000);
        cy.screenshot("Post/Escenario7_14");
    });


    it("8. Usuario logueado - Crear post con título y cuerpo - Publicar - Verificar que este en estado publicado - Abrir post recien creado - Borrar post - Verifcar que el post haya sido borrado", () => {
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var countPosts = 0;
        var countStatus = 0;
        var indexPost = 0;
        cy.get('a[href="#/posts/"]').first().click();
        cy.wait(1000);
        cy.screenshot("Post/Escenario8_1");
        cy.url().should("eq", "http://localhost:2368/ghost/#/posts");
        cy.screenshot("Post/Escenario8_2");
        cy.wait(1000);
        cy.get('a[href="#/editor/post/"]').first().click();
        cy.wait(1000);
        cy.screenshot("Post/Escenario8_3");
        cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(postTitle, { force: true });
        cy.wait(1000);
        cy.screenshot("Post/Escenario8_4");
        cy.get(".koenig-editor__editor.__mobiledoc-editor.__has-no-content").type(postBody, { force: true });
        cy.wait(1000);
        cy.screenshot("Post/Escenario8_5");
        cy.get('a[href="#/posts/"]').first().click();
        cy.wait(1000);
        cy.screenshot("Post/Escenario8_6");
        cy.get('.content-list h3')
            .each(($h3) => {
                countPosts++;
                if ($h3.length > 0) {
                    if ($h3[0].innerText === postTitle) {
                        indexPost = countPosts;
                        expect($h3[0].innerText).to.equal(postTitle);
                    }
                }
            });
        cy.get('.content-list span.nowrap')
            .each(($span) => {
                countStatus++;
                if ($span.length > 0) {
                    if (countStatus === indexPost) {
                        expect($span[0].innerText.toUpperCase()).to.equal("DRAFT");
                    }
                }
            });
        cy.wait(1000);
        cy.screenshot("Post/Escenario8_7");
        cy.get('.content-list span.nowrap')
            .each(($span) => {
                countStatus++;
                if ($span.length > 0) {
                    if (countStatus === indexPost) {
                        expect($span[0].innerText.toUpperCase()).to.equal("DRAFT");
                    }
                }
            });
        cy.wait(1000);
        cy.screenshot("Post/Escenario8_8");
        cy.get('.content-list span.nowrap').first().click();
        cy.wait(1000);
        cy.screenshot("Post/Escenario8_9");
        cy.get(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger").click();
        cy.wait(1000);
        cy.screenshot("Post/Escenario8_10");
        cy.get(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view").click();
        cy.wait(2000);
        cy.get(".gh-notification.gh-notification-passive.ember-view").should('have.length', 1);
        cy.screenshot("Post/Escenario8_11");
        cy.wait(1000);
        cy.get('a[href="#/posts/"]').first().click();
        cy.wait(1000);
        cy.get('.content-list h3')
            .each(($h3) => {
                if ($h3.length > 0) {
                    if ($h3[0].innerText === postTitle) {
                        expect($h3[0].innerText).to.equal(postTitle)
                    }
                }
            });
        cy.screenshot("Post/Escenario8_12");
        cy.wait(1000);
        cy.screenshot("Post/Escenario8_13");
        cy.get('.content-list span.nowrap')
            .each(($span) => {
                countStatus++;
                if ($span.length > 0) {
                    if (countStatus === indexPost) {
                        expect($span[0].innerText.toUpperCase()).to.equal("PUBLISHED");
                    }
                }
            });
        cy.wait(1000);
        cy.screenshot("Post/Escenario8_14");
        cy.get('h3').contains(postTitle).first().click();
        cy.wait(1000);
        cy.screenshot("Post/Escenario8_15");
        cy.get('.post-settings').first().click();
        cy.wait(1000);
        cy.screenshot("Post/Escenario8_16");
        cy.get('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').first().click();
        cy.wait(1000);
        cy.screenshot("Post/Escenario8_17");
        cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();
        cy.wait(7000);
        cy.screenshot("Post/Escenario8_18");
        var contador = 0;
        cy.get('.content-list h3')
            .each(($h3) => {
                if ($h3.length > 0) {
                    if ($h3[0].innerText === postTitle) {
                        contador++;
                    }
                }

            })
        expect(contador).to.equal(0);
        cy.wait(1000);
        cy.screenshot("Post/Escenario8_19");
    });
});
