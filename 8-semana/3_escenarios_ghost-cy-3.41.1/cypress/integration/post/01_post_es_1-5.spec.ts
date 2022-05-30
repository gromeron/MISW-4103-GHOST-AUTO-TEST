import { faker } from '@faker-js/faker';
import { Login } from "../../pageObject/login";
import { Post } from "../../pageObject/post";

const login = new Login;
const post = new Post;

describe('Post Escenarios 1 - 22', () => {

    beforeEach(() => {
        login.loginRegistrar(Cypress.env('user1Email'), Cypress.env('user1Password'));
    });

    it("1. Usuario logueado - Crear post con título - Publicar - Verificar publicación", () => {
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1930, max: 2022 });
        var postBody = faker.lorem.paragraph();
        cy.get('a[href="#/posts/"]').first().click();
        cy.wait(1000);
        cy.url().should("eq", "http://localhost:2368/ghost/#/posts");
        cy.wait(1000);
        cy.get('a[href="#/editor/post/"]').first().click();
        cy.wait(1000);
        cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(postTitle, { force: true });
        cy.wait(1000);
        cy.get(".koenig-editor__editor.__mobiledoc-editor.__has-no-content").type(postBody, { force: true });
        cy.wait(1000);
        cy.get(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger").click();
        cy.wait(1000);
        cy.get(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view").click();
        cy.wait(2000);
        cy.get(".gh-notification.gh-notification-passive.ember-view").should('have.length', 1);
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
    });


    it("2. Usuario logueado - Crear post con título y cuerpo - Retornar sin publicar - Verificar que el post este guardado y esté en estado draft", () => {
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var postBody = faker.lorem.paragraph();
        var countPosts = 0;
        var countStatus = 0;
        var indexPost = 0;
        cy.get('a[href="#/posts/"]').first().click();
        cy.wait(1000);
        cy.url().should("eq", "http://localhost:2368/ghost/#/posts");
        cy.wait(1000);
        cy.get('a[href="#/editor/post/"]').first().click();
        cy.wait(1000);
        cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(postTitle, { force: true });
        cy.wait(1000);
        cy.get(".koenig-editor__editor.__mobiledoc-editor.__has-no-content").type(postBody, { force: true });
        cy.wait(1000);
        cy.get('a[href="#/posts/"]').first().click();
        cy.wait(1000);
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


        });

    it("3. Usuario logueado - Crear post con título y cuerpo - Retornar sin publicar - Verificar que el post este guardado y esté en estado draft - Volver a abrir - Publicar - Verificar que este en estado publicado", () => {
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var postBody = faker.lorem.paragraph();
        var countPosts = 0;
        var countStatus = 0;
        var indexPost = 0;
        cy.get('a[href="#/posts/"]').first().click();
        cy.wait(1000);
        cy.url().should("eq", "http://localhost:2368/ghost/#/posts");
        cy.wait(1000);
        cy.get('a[href="#/editor/post/"]').first().click();
        cy.wait(1000);
        cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(postTitle, { force: true });
        cy.wait(1000);
        cy.get(".koenig-editor__editor.__mobiledoc-editor.__has-no-content").type(postBody, { force: true });
        cy.wait(1000);
        cy.get('a[href="#/posts/"]').first().click();
        cy.wait(1000);
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
        cy.get('.content-list span.nowrap').first().click();
        cy.wait(1000);
        cy.get(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger").click();
        cy.wait(1000);
        cy.get(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view").click();
        cy.wait(2000);
        cy.get(".gh-notification.gh-notification-passive.ember-view").should('have.length', 1);
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
        cy.wait(1000);
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
    });


    it("4. Usuario logueado - Crear post con título y cuerpo - Publicar - Verificar que este en estado publicado - Abrir post recien creado - Borrar post - Verificar que el post haya sido borrado", () => {
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var postBody = faker.lorem.paragraph();
        var countPosts = 0;
        var countStatus = 0;
        var indexPost = 0;
        cy.get('a[href="#/posts/"]').first().click();
        cy.wait(1000);
        cy.url().should("eq", "http://localhost:2368/ghost/#/posts");
        cy.wait(1000);
        cy.get('a[href="#/editor/post/"]').first().click();
        cy.wait(1000);
        cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(postTitle, { force: true });
        cy.wait(1000);
        cy.get(".koenig-editor__editor.__mobiledoc-editor.__has-no-content").type(postBody, { force: true });
        cy.wait(1000);
        cy.get('a[href="#/posts/"]').first().click();
        cy.wait(1000);
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
        cy.get('.content-list span.nowrap').first().click();
        cy.wait(1000);
        cy.get(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger").click();
        cy.wait(1000);
        cy.get(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view").click();
        cy.wait(2000);
        cy.get(".gh-notification.gh-notification-passive.ember-view").should('have.length', 1);
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
        cy.wait(1000);
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
        cy.get('h3').contains(postTitle).first().click();
        cy.wait(1000);
        cy.get('.post-settings').first().click();
        cy.wait(1000);
        cy.get('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').first().click();
        cy.wait(1000);
        cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();
        cy.wait(7000);
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
    });

    it("5. Usuario logueado - crear post con título y cuerpo - cambiar el cuerpo - verificar que la edición sea exitosa",()=>{
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var postBody = faker.lorem.paragraph();
        var postBody2 = faker.lorem.paragraph();
        post.postMain();
        post.postNew();
        post.postTitleInput(postTitle);
        post.postParagraphInput(postBody);
        post.postMain();
        post.clicPostWithTitle(postTitle);
        post.rewriteParagraph(postBody2);
        post.postMain();
        post.clicPostWithTitle(postTitle);
        post.verifyParagraphContent(postBody2);
    });

    it("6. Usuario logueado - crear post con título y cuerpo - cambiar el título - verificar que la edición sea exitosa",()=>{
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var postTitle2 = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var postBody = faker.lorem.paragraph();
        post.postMain();
        post.postNew();
        post.postTitleInput(postTitle);
        post.postParagraphInput(postBody);
        post.postMain();
        post.clicPostWithTitle(postTitle);
        post.rewriteTitle(postTitle2);
        post.postMain();
        post.verifyTitleContent(postTitle2);
    });

    it("7. Crear un post en estado draft – ir a listado de posts en estado draft – elegir el post recientemente creado- programar la publicación para una fecha futura – Verificar que aparece en el listado de posts programados",()=>{
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var postBody = faker.lorem.paragraph();
        post.postMain();
        post.postNew();
        post.postTitleInput(postTitle);
        post.postParagraphInput(postBody);
        post.postMain();
        post.clicPostWithTitle(postTitle);
        post.schedulePost();
        post.postMain();
        post.goToScheduledPostsList();
        post.getFirstScheduledPostTitle().should("contain",postTitle);
    });

    it("8. Crear nuevo post – escribir párrafo – el número de palabras de la descripción debe corresponder con el número de palabras escritas",()=>{
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var postBody = faker.lorem.paragraph();
        post.postMain();
        post.postNew();
        post.postTitleInput(postTitle);
        post.postParagraphInput(postBody);
        let words = postBody.split(" ").length + 1;
        let text = words.toString() + " words";
        post.wordsNum().should("equal",text);
    });


    it("9. Crear post con url específica – ir a la lista de posts – verificar que al dar clic en el post creado se dirige a la url especificada",()=>{
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var postBody = faker.lorem.paragraph();
        var titlewords = postTitle.replace(",","").split(" ");
        var url = titlewords[0] + titlewords[titlewords.length-1];
        url = url.toLowerCase();
        post.postMain();
        post.postNew();
        post.postTitleInput(postTitle);
        post.postParagraphInput(postBody);
        post.openSettings();
        post.assignUrl(url);
        post.closeSettings();
        post.publishPost();
        post.getPostUrl().should("contain",url);
    });

    it("10. Crear un post - asignarle url específica -Abrir post creado – modificar url – verificar que el cambio se conserva",()=>{
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var postBody = faker.lorem.paragraph();
        var titlewords = postTitle.replace(",","").split(" ");
        var url = titlewords[0] + titlewords[titlewords.length-1];
        url = url.toLowerCase();
        var url2 = titlewords[0] + titlewords[titlewords.length-1] + "-editado";
        url2 = url2.toLowerCase();
        post.postMain();
        post.postNew();
        post.postTitleInput(postTitle);
        post.postParagraphInput(postBody);
        post.openSettings();
        post.assignUrl(url);
        post.closeSettings();
        post.postMain();
        post.clicPostWithTitle(postTitle);
        post.openSettings();
        post.assignUrl(url2);
        post.closeSettings();
        post.publishPost();
        post.getPostUrl().should("contain","/"+url2);
    });

    it("11. Crear post – asociarle un tag  - publicar – verificar que el post contenga el tag",()=>{
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var postBody = faker.lorem.paragraph();
        post.postMain();
        post.postNew();
        post.postTitleInput(postTitle);
        post.postParagraphInput(postBody);
        post.openSettings();
        post.selectFirstTag();
        post.closeSettings();
        post.publishPost();
        post.viewPost();
        cy.get(".post-full-tags").should("contain","Getting Started");
    });

    it("12. Crear post con excerpt  - publicar – verificar que el post contenga el excerpt",()=>{
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var postBody = faker.lorem.paragraph();
        var excerpt = "Excerpt "+postTitle;
        post.postMain();
        post.postNew();
        post.postTitleInput(postTitle);
        post.postParagraphInput(postBody);
        post.openSettings();
        post.addExcerpt(excerpt);
        post.closeSettings();
        post.publishPost();
        post.viewPost();
        cy.get(".post-full-custom-excerpt").should("contain",excerpt);
    });


    it("13. Crear post con excerpt - Ir al post creado – modificar el excerpt – verificar el cambio",()=>{
        cy.request(Cypress.env('postJson')).then((response) => {
            let datos = response.body;
            // var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
            // var postBody = faker.lorem.paragraph();
            var postTitle = datos[0]["postTitle1"];
            var postBody = datos[0]["postBody1"];
            var excerpt = "Excerpt "+postTitle;
            var excerpt2 = "Edited Excerpt "+postTitle;
            post.postMain();
            post.postNew();
            post.postTitleInput(postTitle);
            post.postParagraphInput(postBody);
            post.openSettings();
            post.addExcerpt(excerpt);
            post.closeSettings();
            post.publishPost();
            post.postMain();
            post.goToPublishedPostsList();
            post.clicPostWithTitle(postTitle);
            post.openSettings();
            post.editExcerpt(excerpt2);
            cy.wait(1000);
            post.viewPost();
            cy.get(".post-full-custom-excerpt").invoke('text').should("contain",excerpt2);
        });

    });

    it("14. Crear post – agregarle inyección de código en el header  - publicar – verificar que el post contenga el header",()=>{
        cy.request(Cypress.env('postJson')).then((response) => {
            let datos = response.body;
            var postTitle = datos[0]["postTitle1"];
            var postBody = datos[0]["postBody1"];
            var mensaje = datos[0]["word"];
            // var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
            // var postBody = faker.lorem.paragraph();
            // var mensaje = faker.lorem.word();
            var code = "$( document ).ready(function() {console.log('"+mensaje+"!');});";
            post.postMain();
            post.postNew();
            post.postTitleInput(postTitle);
            post.postParagraphInput(postBody);
            post.openSettings();
            post.addCodeInjection(code);
            post.closeSettings();
            post.publishPost();
            post.postMain();
            post.goToPublishedPostsList();
            post.clicPostWithTitle(postTitle);
            post.openSettings();
            cy.get('button').contains('Code injection').click();
            cy.wait(2000);
            let text = post.getCodeInjection();
            text.should("contain",code);
        });
    });

    it("15. Crear post sin título - verificar que se guarda con título '(Untitled)'",()=>{
        cy.request(Cypress.env('postJson')).then((response) => {
            let datos = response.body;
            var postBody = datos[0]["postBody1"];
            post.postMain();
            post.postNew();
            post.postParagraphInput(postBody);
            post.postMain();
            post.goToDraftPostsList();
            let title = post.getFirstDraftPostTitle();
            title.should("contain","(Untitled)");
        });
    });

    it("16. Crear post - publicarlo - verificar que está en lista de posts publicados -  despublicarlo - verificar que aparece en la lista de posts en estado Draft",()=>{
        cy.request(Cypress.env('postJson')).then((response) => {
            let datos = response.body;
            var postTitle = datos[0]["postTitle1"];
            var postBody = datos[0]["postBody1"];
            // var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
            // var postBody = faker.lorem.paragraph();
            post.postMain();
            post.postNew();
            post.postTitleInput(postTitle);
            post.postParagraphInput(postBody);
            post.publishPost();
            post.postMain();
            post.goToPublishedPostsList();
            post.getFirstPublishedPostTitle().should("contain", postTitle);
            post.clicPostWithTitle(postTitle);
            post.unpublishPost();
            cy.wait(1000);
            post.clickPostMenu();
            post.goToDraftPostsList();
            post.getFirstDraftPostTitle().should("contain", postTitle);
        });
    });

    it("17. Crear post  - programarlo con fecha inválida – verificar mensaje de error",()=>{
        cy.request(Cypress.env('postJson')).then((response) => {
            let datos = response.body;
            var postTitle = datos[0]["postTitle1"];
            var postBody = datos[0]["postBody1"];
            // var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
            // var postBody = faker.lorem.paragraph();
            post.postMain();
            post.postNew();
            post.postTitleInput(postTitle);
            post.postParagraphInput(postBody);
            post.schedulePostWrongDate();
            cy.get(".gh-date-time-picker-error").should("contain","Invalid date format, must be YYYY-MM-DD");
        });
    });

    it("18. Crear post  - programarlo con hora inválida – verificar mensaje de error",()=>{
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var postBody = faker.lorem.paragraph();
        post.postMain();
        post.postNew();
        post.postTitleInput(postTitle);
        post.postParagraphInput(postBody);
        post.schedulePostWrongTime();
        cy.get(".gh-date-time-picker-error").should("contain",'Must be in format: "15:00"');
    });

    it("19. Crear post – asignarle url inválida – verificar que de nuevo tenga la url por defecto",()=>{
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var postBody = faker.lorem.paragraph();
        var titlewords = postTitle.replace(",","").split(" ");
        var invalidurl = titlewords[0]+", " + titlewords[titlewords.length-1];
        var validurl = titlewords[0]+"-" + titlewords[titlewords.length-1];
        validurl = validurl.toLowerCase();
        post.postMain();
        post.postNew();
        post.postTitleInput(postTitle);
        post.postParagraphInput(postBody);
        post.openSettings();
        post.assignUrl(invalidurl);
        post.closeSettings();
        post.publishPost();
        post.getPostUrl().should("contain",validurl);
    });

    it("20. Crear post – programarlo – dar clic en set it live now – verificar que la fecha vuelve al valor original",()=>{
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var postBody = faker.lorem.paragraph();
        post.postMain();
        post.postNew();
        post.postTitleInput(postTitle);
        post.postParagraphInput(postBody);
        post.schedulePostFutureDate();
        cy.get(".gh-publishmenu-radio-button").eq(0).click();
        cy.wait(1000);
        let valor = cy.get("div.gh-date-time-picker-date input").first().invoke("val");
        valor.should("contain","2022");
    });

    it("21. Crear post - programarlo con fecha en el pasado - verificar mensaje de error",()=>{
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var postBody = faker.lorem.paragraph();
        var fecha = "2022-01-01";
        post.postMain();
        post.postNew();
        post.postTitleInput(postTitle);
        post.postParagraphInput(postBody);
        post.schedulePostPastDate();
        cy.get(".gh-date-time-picker-error").should("contain","Must be at least 2 mins in the future");
    });

    it("22. Crear post – destacarlo – publicarlo - verificar que aparece en la lista de posts destacados",()=>{
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var postBody = faker.lorem.paragraph();
        post.postMain();
        post.postNew();
        post.postTitleInput(postTitle);
        post.postParagraphInput(postBody);
        post.openSettings();
        post.featurePost();
        post.closeSettings();
        post.publishPost();
        post.postMain()
        post.goToFeaturedPostsList();
        post.getFirstPublishedPostTitle().should("contain",postTitle);
    });

});