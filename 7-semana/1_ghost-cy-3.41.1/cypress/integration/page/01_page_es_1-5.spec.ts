import { faker } from '@faker-js/faker';
import { Login } from "../../pageObject/login";
import { Page } from '../../pageObject/page';

const login = new Login;
const page = new Page;

describe('Page Escenarios 1 - 5 (ESTRATEGIA DE GENERACIÓN DE DATOS #1: POOL DE DATOS A-PRIORI)', () => {

    beforeEach(() => {
        login.loginRegistrar(Cypress.env('user1Email'), Cypress.env('user1Password'));
    });

    it("1. Crear página con nombre y con descripción, verificar que página quedó en estado published. / POOL DE DATOS A-PRIORI ", () => {

        cy.request(Cypress.env('pageJson')).then((response) => {
            let datos = response.body;
            let pageTitle = datos[Math.floor(Math.random()*datos.length)]["titulo"];
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
        });

    });

    it("2. Crear página programada con nombre y con descripción , verificar que página quedó en estado scheduled. / POOL DE DATOS A-PRIORI", () => {

        cy.request(Cypress.env('pageJson')).then((response) => {
            let datos = response.body;
            let pageTitle = datos[Math.floor(Math.random()*datos.length)]["titulo"];
            let pageDescription = datos[Math.floor(Math.random()*datos.length)]["descripcion1"];
            page.pagesMain();
            page.pageNew();
            page.pageTypeTitle(pageTitle);
            page.pageTypeDescription(pageDescription);
            page.publishButtonPage();
            page.setSchedulePage();
            page.pageSaveFinal();
            page.pagesMain();
            page.verifyPageList(pageTitle, "SCHEDULED");
        });
    });

    it("3. Crear página sin guardar con nombre y con descripción, verificar que página quedó en estado draft. / POOL DE DATOS A-PRIORI", () => {

        cy.request(Cypress.env('pageJson')).then((response) => {
            let datos = response.body;
            let pageTitle = datos[Math.floor(Math.random()*datos.length)]["titulo"];
            let pageDescription = datos[Math.floor(Math.random()*datos.length)]["descripcion1"];
            page.pagesMain();
            page.pageNew();
            page.pageTypeTitle(pageTitle);
            page.pageTypeDescription(pageDescription);
            page.pagesMain();
            page.verifyPageList(pageTitle, "DRAFT");
        });

    });

    it("4. Crear página programada con nombre y con descripción, verificar que página quedó en estado scheduled, editar página-descripción y publicar (live now), verificar que quedó en estado published. / POOL DE DATOS A-PRIORI", () => {

        cy.request(Cypress.env('pageJson')).then((response) => {
            let datos = response.body;
            let pageTitle = datos[Math.floor(Math.random()*datos.length)]["titulo"];
            let pageDescription = datos[Math.floor(Math.random()*datos.length)]["descripcion1"];
            let pageDescription2 = datos[Math.floor(Math.random()*datos.length)]["descripcion2"];
            page.pagesMain();
            page.pageNew();
            page.pageTypeTitle(pageTitle);
            page.pageTypeDescription(pageDescription);
            page.publishButtonPage();
            page.setSchedulePage();
            page.pageSaveFinal();
            page.pagesMain();
            page.verifyPageList(pageTitle, "SCHEDULED");
            page.openEditPage(pageTitle);
            page.pageTypeDescription(pageDescription2);
            page.publishButtonPage();
            page.setLiveNowPage();
            page.pageSaveFinal();
            page.pageSaveFinal();
            page.pagesMain();
            page.verifyPageList(pageTitle, "PUBLISHED");
        });


    });

    it("5. Crear página sin guardar con nombre y con descripción , verificar que página quedó en estado draft, editar página-descripción y publicar (live now), verificar que quedó en estado published. / POOL DE DATOS A-PRIORI", () => {

        cy.request(Cypress.env('pageJson')).then((response) => {
            let datos = response.body;
            let pageTitle = datos[Math.floor(Math.random()*datos.length)]["titulo"];
            let pageDescription = datos[Math.floor(Math.random()*datos.length)]["descripcion1"];
            let pageDescription2 = datos[Math.floor(Math.random()*datos.length)]["descripcion2"];
            page.pagesMain();
            page.pageNew();
            page.pageTypeTitle(pageTitle);
            page.pageTypeDescription(pageDescription);
            page.pagesMain();
            page.verifyPageList(pageTitle, "DRAFT");
            page.openEditPage(pageTitle);
            page.pageTypeDescription(pageDescription2);
            page.publishButtonPage();
            page.setLiveNowPage();
            page.pageSaveFinal();
            page.pagesMain();
            page.verifyPageList(pageTitle, "PUBLISHED");
        });


    });
    
});