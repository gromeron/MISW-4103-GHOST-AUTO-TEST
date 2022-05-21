import { faker } from '@faker-js/faker';
import { Login } from "../../pageObject/login";
import { Page } from '../../pageObject/page';

const login = new Login;
const page = new Page;

describe('Page Escenarios 6 - 10', () => {

    beforeEach(() => {
        login.loginRegistrar(Cypress.env('user1Email'), Cypress.env('user1Password'));
    });


    it("6. Crear página sin guardar con nombre y con descripción , verificar que página quedó en estado draft, editar página-nombre y publicar (scheduled), verificar que quedó en estado scheduled.", () => {
        let pageTitle = faker.company.companyName();
        let pageDescripcion = faker.lorem.paragraphs(1);
        let pageTitle2 = faker.company.companyName();
        page.pagesMain();
        page.pageNew();
        page.pageTypeTitle(pageTitle);
        page.pageTypeDescription(pageDescripcion);
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


    it("7. Crear página con nombre y descripción, verificar que página quedó en estado published, editar página-nombre y publicar (scheduled), verificar que quedó en estado scheduled", () => {
        let pageTitle = faker.company.companyName();
        let pageDescripcion = faker.lorem.paragraphs(1);
        let pageTitle2 = faker.company.companyName();
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

    it("8. Crear página con nombre y con opción (+) Html Code, verificar que página quedó en estado published.", () => {
        let pageTitle = faker.company.companyName();
        let pageDescripcionHtml = `<h1>${faker.word.verb()}</h1><p>${faker.lorem.paragraphs(1)}</p>`;
        page.pagesMain();
        page.pageNew();
        page.pageAddPlus();
        page.pagePlusClicAddHtml();
        page.pageTypeCodeHtml(pageDescripcionHtml);
        page.pageTypeEmptyTitle();
        page.pageTypeTitle(pageTitle);
        page.publishButtonPage();
        page.setLiveNowPage();
        page.pageSaveFinal();
        page.pagesMain();
        page.verifyPageList(pageTitle, "PUBLISHED");
    });

    it("9. Crear página con nombre y con opción (+) Email, verificar que página quedó en estado published.", () => {
        let pageTitle = faker.company.companyName();
        let pageEmail = ` How you doing ${faker.name.firstName()}?, your email is ${faker.internet.email()}` ;
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

    it("10. Crear página con nombre, descripción y con opción (+) Youtube (pegar link), verificar que página quedó en estado published.", () => {
        let pageTitle = faker.company.companyName();
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