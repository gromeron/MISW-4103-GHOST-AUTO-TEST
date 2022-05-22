import { faker } from '@faker-js/faker';
import { Login } from "../../pageObject/login";
import { Page } from '../../pageObject/page';

const login = new Login;
const page = new Page;

describe('Page Escenarios 6 - 10 (ESTRATEGIA DE GENERACIÓN DE DATOS #1: POOL DE DATOS A-PRIORI) ', () => {

    beforeEach(() => {
        login.loginRegistrar(Cypress.env('user1Email'), Cypress.env('user1Password'));
    });


    it("6. Crear página sin guardar con nombre y con descripción , verificar que página quedó en estado draft, editar página-nombre y publicar (scheduled), verificar que quedó en estado scheduled. / POOL DE DATOS A-PRIORI", () => {

        cy.request("https://my.api.mockaroo.com/pages.json?key=5b1e5630").then((response) => {
            let datos = response.body;
            let pageTitle = datos[Math.floor(Math.random()*datos.length)]["titulo"];
            let pageTitle2 = datos[Math.floor(Math.random()*datos.length)]["titulo2"];
            let pageDescription = datos[Math.floor(Math.random()*datos.length)]["descripcion1"];
            page.pagesMain();
            page.pageNew();
            page.pageTypeTitle(pageTitle);
            page.pageTypeDescription(pageDescription);
            page.pagesMain();
            page.verifyPageList(pageTitle, "DRAFT");
            page.openEditPage(pageTitle);
            page.pageTypeEmptyTitle();
            page.pageTypeTitle(pageTitle2);
            page.publishButtonPage();
            page.setSchedulePage();
            page.pageSaveFinal();
            page.pagesMain();
            page.verifyPageList(pageTitle2, "SCHEDULED");
        });

    });


    it("7. Crear página con nombre y descripción, verificar que página quedó en estado published, editar página-nombre y publicar (scheduled), verificar que quedó en estado scheduled. / POOL DE DATOS A-PRIORI", () => {

        cy.request("https://my.api.mockaroo.com/pages.json?key=5b1e5630").then((response) => {
            let datos = response.body;
            let pageTitle = datos[Math.floor(Math.random()*datos.length)]["titulo"];
            let pageTitle2 = datos[Math.floor(Math.random()*datos.length)]["titulo2"];
            let pageDescription = datos[Math.floor(Math.random()*datos.length)]["descripcion1"];
            page.pagesMain();
            page.pageNew();
            page.pageTypeTitle(pageTitle);
            page.pageTypeDescription(pageDescription);
            page.publishButtonPage();
            page.setLiveNowPage();
            page.pageSaveFinal();
            page.pagesMain();
            page.verifyPageList(pageTitle, "PUBLISHED");
            page.openEditPage(pageTitle);
            page.pageTypeEmptyTitle();
            page.pageTypeTitle(pageTitle2);
            page.publishButtonPage();
            page.setLiveNowPage();
            page.pageSaveFinal();
            page.setSchedulePage();
            page.pageSaveFinal();
            page.pagesMain();
            page.verifyPageList(pageTitle2, "SCHEDULED");
        });

    });

    it("8. Crear página con nombre y con opción (+) Html Code, verificar que página quedó en estado published. / POOL DE DATOS A-PRIORI", () => {

        cy.request("https://my.api.mockaroo.com/pages.json?key=5b1e5630").then((response) => {
            let datos = response.body;
            let pageTitle = datos[Math.floor(Math.random()*datos.length)]["titulo"];
            let pageDescriptionHtml = `<h1>${pageTitle}</h1><p>${datos[Math.floor(Math.random()*datos.length)]["descripcion1"]}</p>`;
            page.pagesMain();
            page.pageNew();
            page.pageAddPlus();
            page.pagePlusClicAddHtml();
            page.pageTypeCodeHtml(pageDescriptionHtml);
            page.pageTypeEmptyTitle();
            page.pageTypeTitle(pageTitle);
            page.publishButtonPage();
            page.setLiveNowPage();
            page.pageSaveFinal();
            page.pagesMain();
            page.verifyPageList(pageTitle, "PUBLISHED");
        });



    });

    it("9. Crear página con nombre y con opción (+) Email, verificar que página quedó en estado published. / POOL DE DATOS A-PRIORI", () => {

        cy.request("https://my.api.mockaroo.com/pages.json?key=5b1e5630").then((response) => {
            let datos = response.body;
            let pageTitle = datos[Math.floor(Math.random()*datos.length)]["titulo"];
            let pageEmail = datos[Math.floor(Math.random()*datos.length)]["email"];
            page.pagesMain();
            page.pageNew();
            page.pageAddPlus();
            page.pagePlusClicAddEmail();
            page.pagePlusTypeEmail(pageEmail);
            page.pageTypeEmptyTitle();
            page.pageTypeTitle(pageTitle);
            page.publishButtonPage();
            page.setLiveNowPage();
            page.pageSaveFinal();
            page.pagesMain();
            page.verifyPageList(pageTitle, "PUBLISHED");
        });


    });

    it("10. Crear página con nombre, descripción y con opción (+) Youtube (pegar link), verificar que página quedó en estado published. / POOL DE DATOS A-PRIORI", () => {

        cy.request("https://my.api.mockaroo.com/pages.json?key=5b1e5630").then((response) => {
            let datos = response.body;
            let pageTitle = datos[Math.floor(Math.random()*datos.length)]["titulo"];
            let pageUrlYoutube = Cypress.env('youtubeUrl');
            page.pagesMain();
            page.pageNew();
            page.pageAddPlus();
            page.pagePlusClicAddYoutube();
            page.pagePlusTypeLinkYoutube(pageUrlYoutube);
            page.pageTypeEmptyTitle();
            page.pageTypeTitle(pageTitle);
            page.publishButtonPage();
            page.setLiveNowPage();
            page.pageSaveFinal();
            page.pagesMain();
            page.verifyPageList(pageTitle, "PUBLISHED");
        });


    });
    
});