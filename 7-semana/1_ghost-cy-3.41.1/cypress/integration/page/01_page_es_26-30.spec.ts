import { faker } from '@faker-js/faker';
import { Login } from "../../pageObject/login";
import { Page } from '../../pageObject/page';
import { Tag } from '../../pageObject/tag';

const login = new Login;
const page = new Page;


describe('Page Escenarios 26 - 30', () => {

    beforeEach(() => {
        login.loginRegistrar(Cypress.env('user1Email'), Cypress.env('user1Password'));
    });



    it("26. Crear página con nombre y descripción, verificar que página quedó en estado published; filtrar páginas por filtro de tipo (escoger ultima opcion)", () => {
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
        page.selectFilterTypePage();
        page.selectLastTypePageInFilter();
    });


    it("27. Crear página con nombre y descripción, verificar que página quedó en estado published; filtrar páginas por filtro de tipo (escoger ultima opcion)", () => {
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
        page.selectFilterTags();
        page.selectLastTagInFilter();
    });

    it("28. Crear página sin guardar con nombre y descripción, verificar que página quedó en estado draft; Filtrar páginas por filtro de pages(escoger opción draft pages y verificar que está en la lista)", () => {
        let pageTitle = faker.company.companyName();
        let pageDescripcion = faker.lorem.paragraphs(1);
        page.pagesMain();
        page.pageNew();
        page.pageTypeTitle(pageTitle);
        page.pageTypeDescription(pageDescripcion);
        page.pagesMain();
        page.verifyPageList(pageTitle, "DRAFT");
        page.selectFilterTypePage();
        page.selectDraftTypePageFilter();
        page.verifyPageList(pageTitle, "DRAFT");
    });


    it("29. Crear página programada con nombre y descripción, verificar que página quedó en estado scheduled; Filtrar páginas por filtro de pages(escoger opción scheduled pages y verificar que está en la lista)", () => {
        let pageTitle = faker.company.companyName();
        let pageDescripcion = faker.lorem.paragraphs(1);
        page.pagesMain();
        page.pageNew();
        page.pageTypeTitle(pageTitle);
        page.pageTypeDescription(pageDescripcion);
        page.publishButtonPage();
        page.setSchedulePage();
        page.pageSaveFinal();
        page.pagesMain();
        page.verifyPageList(pageTitle, "SCHEDULED");
        page.selectFilterTypePage();
        page.selectScheduledTypePageFilter();
        page.verifyPageList(pageTitle, "SCHEDULED");
    });


    it("30. Crear página con nombre y descripción, verificar que página quedó en estado published; Ordenar páginas (escoger ultima opción)", () => {
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
        page.selectFilterSortPage();
        page.selectLastSortPageInFilter();
        page.verifyPageList(pageTitle, "PUBLISHED");
    });

});