import { faker } from '@faker-js/faker';
import { Login } from "../../pageObject/login";
import { Page } from '../../pageObject/page';
import { Tag } from '../../pageObject/tag';

const tag = new Tag;
const login = new Login;
const page = new Page;


describe('Page Escenarios 16 - 20 (ESTRATEGIA DE GENERACIÓN DE DATOS #3: ESCENARIO ALEATORIO)', () => {

    beforeEach(() => {
        login.loginRegistrar(Cypress.env('user1Email'), Cypress.env('user1Password'));
    });


    it("16. Crear pagina con nombre y descripción, verificar que página quedó en estado published; editar página y añadir tags. verificar página en estado published. / ESCENARIO ALEATORIO", () => {
        let pageTitle = faker.company.companyName();
        let pageDescripcion = faker.lorem.paragraphs(1);
        let tagName = faker.company.companyName();
        page.pagesMain();
        page.pageNew();
        page.pageTypeTitle(pageTitle);
        page.pageTypeDescription(pageDescripcion);
        page.publishButtonPage();
        page.setLiveNowPage();
        page.pageSaveFinal();
        page.pagesMain();
        page.verifyPageList(pageTitle, "PUBLISHED");
        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName);
        tag.tagSave();
        tag.tagMain();
        tag.verifyTagCreated(tagName);
        page.pagesMain();
        page.openEditPage(pageTitle);
        page.pageSettings();
        page.addTagsPage();
        page.selectTagToPage(tagName);
        page.closePageSettings();
        page.publishButtonPage();
        page.pageSaveFinal();
        page.pagesMain();
        page.selectFilterTags();
        page.selectTagInFilter(tagName)
        page.verifyPageList(pageTitle, "PUBLISHED");
    });



    it("17. Crear pagina con nombre y descripción, verificar que página quedó en estado published; editar página y añadir page-URL,  verificar que página quedó en estado published. / ESCENARIO ALEATORIO", () => {
        let pageUrl = faker.internet.url().split("/").pop();
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
        page.typePageUrlSettings(pageUrl);
        page.closePageSettings();
        page.publishButtonPage();
        page.pageSaveFinal();
        page.pagesMain();
        page.verifyPageList(pageTitle, "PUBLISHED");
    });

    it("18. Crear pagina con nombre y descripción; sin opcion -feature this page-, verificar que página quedó en estado published; editar página y añadir opción -feature this page-. / ESCENARIO ALEATORIO", () => {
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
        page.selectFeatureThisPage();
        page.closePageSettings();
        page.publishButtonPage();
        page.pageSaveFinal();
        page.pagesMain();
        page.verifyPageList(pageTitle, "PUBLISHED");
    });

    it("19. Crear pagina con nombre y descripción, verificar que página quedó en estado published; editar página y añadir Excerpt, verificar que página quedó en estado published. / ESCENARIO ALEATORIO", () => {
        let pageTitle = faker.company.companyName();
        let pageDescripcion = faker.lorem.paragraphs(1);
        let pageExcerpt = faker.lorem.paragraphs(1);
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
        page.typeExcerptPage(pageExcerpt);
        page.closePageSettings();
        page.publishButtonPage();
        page.pageSaveFinal();
        page.pagesMain();
        page.verifyPageList(pageTitle, "PUBLISHED");
    });

    it("20. Crear página con nombre y descripción, verificar que página quedó en estado published; con fecha actual y después editar misma página con fecha publicación al mes siguiente, verificar que queda en estado scheduled. / ESCENARIO ALEATORIO", () => {
        let pageTitle = faker.company.companyName();
        let pageDescripcion = faker.lorem.paragraphs(1);
        let monthsScheduled = faker.datatype.number({ 'min': 1, 'max': 11});
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
        page.addMonthsScheduledPage(monthsScheduled)
        page.pageSaveFinal();
        page.pagesMain();
        page.verifyPageList(pageTitle, "SCHEDULED");

    });

});