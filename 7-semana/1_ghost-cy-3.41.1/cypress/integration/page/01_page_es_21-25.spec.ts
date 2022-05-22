import { faker } from '@faker-js/faker';
import { Login } from "../../pageObject/login";
import { Page } from '../../pageObject/page';
import { Tag } from '../../pageObject/tag';

const tag = new Tag;
const login = new Login;
const page = new Page;


describe('Page Escenarios 21 - 25 (ESTRATEGIA DE GENERACIÓN DE DATOS #3)', () => {

    beforeEach(() => {
        login.loginRegistrar(Cypress.env('user1Email'), Cypress.env('user1Password'));
    });



    it("21. Crear página con nombre y descripción, verificar que página quedó en estado published; con fecha actual y después editar misma página con fecha publicación x años después, verificar que queda en estado scheduled", () => {
        let pageTitle = faker.company.companyName();
        let pageDescripcion = faker.lorem.paragraphs(1);
        let yearsScheduled = faker.datatype.number({ 'min': 1, 'max': 50});
        page.pagesMain();
        page.pageNew();
        page.pageTypeTitle(pageTitle);
        page.pageTypeDescription(pageDescripcion);
        page.publishButtonPage();
        page.setLiveNowPage();
        page.pageSaveFinal();
        page.pagesMain();
        page.verifyPageList(pageTitle, "PUBLISHED");
        page.openEditPage(pageTitle);
        page.publishButtonPage();
        page.setLiveNowPage();
        page.pageSaveFinal();
        page.setSchedulePage();
        page.addYearsScheduledPage(yearsScheduled)
        page.pageSaveFinal();
        page.pagesMain();
        page.verifyPageList(pageTitle, "SCHEDULED");

    });


    it("22. Crear página con nombre y descripción con datos de twitter, verificar que página quedó en estado published.", () => {
        let pageTitle = faker.company.companyName();
        let pageDescripcion = faker.lorem.paragraphs(1);
        let twitterTitle = faker.company.companyName();
        let twitterDescripcion = faker.lorem.paragraphs(1);
        page.pagesMain();
        page.pageNew();
        page.pageTypeTitle(pageTitle);
        page.pageTypeDescription(pageDescripcion);
        page.pageSettings();
        page.selectTwitterCardPage()
        page.pageTypeTwitterTitle(twitterTitle);
        page.pageTypeTwitterDescription(twitterDescripcion);
        page.goBackPageSettings();
        page.closePageSettings();
        page.publishButtonPage();
        page.setLiveNowPage();
        page.pageSaveFinal();
        page.pagesMain();
        page.verifyPageList(pageTitle, "PUBLISHED");

    });

    it("23. Crear página con nombre y descripción con datos de meta data, verificar que página quedó en estado published.", () => {
        let pageTitle = faker.company.companyName();
        let pageDescripcion = faker.lorem.paragraphs(1);
        let metaTitle = faker.company.companyName();
        let metaDescription = faker.lorem.words(5);
        let canonicalUrl = faker.internet.url();
        page.pagesMain();
        page.pageNew();
        page.pageTypeTitle(pageTitle);
        page.pageTypeDescription(pageDescripcion);
        page.pageSettings();
        page.selectMetaDataPage();
        page.pageTypeMetaTitle(metaTitle);
        page.pageTypeMetaDescription(metaDescription);
        page.pageTypeMetaCanonicalUrl(canonicalUrl);
        page.goBackPageSettings();
        page.closePageSettings();
        page.publishButtonPage();
        page.setLiveNowPage();
        page.pageSaveFinal();
        page.pagesMain();
        page.verifyPageList(pageTitle, "PUBLISHED");

    });

    it("24. Crear página con nombre y descripción, verificar que página quedó en estado published; y borrar página recién creada. verificar que no está la pagina en la lista", () => {
        let pageTitle = faker.company.companyName();
        let pageDescripcion = faker.lorem.paragraphs(1);
        page.pagesMain();
        page.pageNew();
        page.pageTypeTitle(pageTitle);
        page.pageTypeDescription(pageDescripcion);
        page.publishButtonPage();
        page.setLiveNowPage();
        page.pageSaveFinal();
        page.pagesMain();
        page.verifyPageList(pageTitle, "PUBLISHED");
        page.openEditPage(pageTitle);
        page.pageSettings();
        page.deleteButtonPage();
        page.deleteFinalPage();
        page.verifyPageIsDeleted(pageTitle);
    });

    it("25. Crear página con nombre y descripción, verificar que página quedó en estado published; filtrar páginas por filtro de autores (escoger ultima opción)", () => {
        let pageTitle = faker.company.companyName();
        let pageDescripcion = faker.lorem.paragraphs(1);
        page.pagesMain();
        page.pageNew();
        page.pageTypeTitle(pageTitle);
        page.pageTypeDescription(pageDescripcion);
        page.publishButtonPage();
        page.setLiveNowPage();
        page.pageSaveFinal();
        page.pagesMain();
        page.verifyPageList(pageTitle, "PUBLISHED");
        page.selectFilterAutores();
        page.selectLastAuthorInFilter();
    });

});