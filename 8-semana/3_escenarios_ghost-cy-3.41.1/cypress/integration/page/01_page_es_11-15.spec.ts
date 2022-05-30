import { faker } from '@faker-js/faker';
import { Login } from "../../pageObject/login";
import { Page } from '../../pageObject/page';
import { Tag } from '../../pageObject/tag';

const tag = new Tag;
const login = new Login;
const page = new Page;

const createJsonData = () => {
    return {
        pageTitle: faker.company.companyName(),
        pageDescription: faker.lorem.paragraphs(1),
        daysScheduled: faker.datatype.number({ 'min': 2, 'max': 27}),
        tagName: faker.company.companyName(),
        pageUrl: faker.internet.url().split("/").pop(),
        pageExcerpt: faker.lorem.paragraphs(1)
    }
}

const createArrayJsonData = (numData = 5) => {
    return new Array(numData)
        .fill(undefined)
        .map(createJsonData);
}

let fakeDataJson = createArrayJsonData(100);
let finalJsons = Array();

describe('Page Escenarios 11 - 15 (ESTRATEGIA DE GENERACIÓN DE DATOS #2: POOL DE DATOS (PSEUDO) ALEATORIO DINÁMICO)', () => {

    beforeEach(() => {
        login.loginRegistrar(Cypress.env('user1Email'), Cypress.env('user1Password'));
    });


    it("11. Crear página programada con nombre, descripción y con la fecha predeterminada, verificar que página quedó en estado scheduled y después editar misma página con fecha publicación x dias después de la fecha original, verificar que página quedó en estado scheduled. / POOL DE DATOS (PSEUDO) ALEATORIO DINÁMICO", () => {
        let fakeJson = fakeDataJson[Math.floor(Math.random()*fakeDataJson.length)];
        let pageTitle = fakeJson["pageTitle"];
        let pageDescription = fakeJson["pageDescription"];
        let daysScheduled = fakeJson["daysScheduled"];
        finalJsons.push(fakeJson);
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
        page.publishButtonPage();
        page.setSchedulePage();
        page.addDayScheduledPage(daysScheduled)
        page.pageSaveFinal();
        page.pagesMain();
        page.verifyPageList(pageTitle, "SCHEDULED");
    });



    it("12. Crear página con nombre, descripción y con tags, verificar que página quedó en estado published. / POOL DE DATOS (PSEUDO) ALEATORIO DINÁMICO", () => {
        let fakeJson = fakeDataJson[Math.floor(Math.random()*fakeDataJson.length)];
        let tagName = fakeJson["tagName"];
        let pageTitle = fakeJson["pageTitle"];
        let pageDescription = fakeJson["pageDescription"];
        finalJsons.push(fakeJson);
        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName);
        tag.tagSave();
        tag.tagMain();
        tag.verifyTagCreated(tagName);
        page.pagesMain();
        page.pageNew();
        page.pageTypeTitle(pageTitle);
        page.pageTypeDescription(pageDescription);
        page.pageSettings();
        page.addTagsPage();
        page.selectTagToPage(tagName);
        page.closePageSettings();
        page.publishButtonPage();
        page.setLiveNowPage();
        page.pageSaveFinal();
        page.pagesMain();
        page.selectFilterTags();
        page.selectTagInFilter(tagName);
        page.verifyPageList(pageTitle, "PUBLISHED");
    });

    it("13. Crear página con nombre, descripción y con page-URL, verificar que página quedó en estado published. / POOL DE DATOS (PSEUDO) ALEATORIO DINÁMICO", () => {
        let fakeJson = fakeDataJson[Math.floor(Math.random()*fakeDataJson.length)];
        let pageUrl = fakeJson["pageUrl"];
        let pageTitle = fakeJson["pageTitle"];
        let pageDescription = fakeJson["pageDescription"];
        finalJsons.push(fakeJson);
        page.pagesMain();
        page.pageNew();
        page.pageTypeTitle(pageTitle);
        page.pageTypeDescription(pageDescription);
        page.pageSettings();
        page.typePageUrlSettings(pageUrl);
        page.closePageSettings();
        page.publishButtonPage();
        page.setLiveNowPage();
        page.pageSaveFinal();
        page.pagesMain();
        page.verifyPageList(pageTitle, "PUBLISHED");
    });

    it("14. Crear página con nombre, descripción y con opcion -feature this page-, verificar que página quedó en estado published. / POOL DE DATOS (PSEUDO) ALEATORIO DINÁMICO", () => {
        let fakeJson = fakeDataJson[Math.floor(Math.random()*fakeDataJson.length)];
        let pageTitle = fakeJson["pageTitle"];
        let pageDescription = fakeJson["pageDescription"];
        finalJsons.push(fakeJson);
        page.pagesMain();
        page.pageNew();
        page.pageTypeTitle(pageTitle);
        page.pageTypeDescription(pageDescription);
        page.pageSettings();
        page.selectFeatureThisPage();
        page.closePageSettings();
        page.publishButtonPage();
        page.setLiveNowPage();
        page.pageSaveFinal();
        page.pagesMain();
        page.verifyPageList(pageTitle, "PUBLISHED");
    });

    it("15. Crear página con nombre, descripción y con Excerpt, verificar que página quedó en estado published. / POOL DE DATOS (PSEUDO) ALEATORIO DINÁMICO", () => {
        let fakeJson = fakeDataJson[Math.floor(Math.random()*fakeDataJson.length)];
        let pageTitle = fakeJson["pageTitle"];
        let pageDescription = fakeJson["pageDescription"];
        let pageExcerpt = fakeJson["pageExcerpt"];
        finalJsons.push(fakeJson);
        page.pagesMain();
        page.pageNew();
        page.pageTypeTitle(pageTitle);
        page.pageTypeDescription(pageDescription);
        page.pageSettings();
        page.typeExcerptPage(pageExcerpt);
        page.closePageSettings();
        page.publishButtonPage();
        page.setLiveNowPage();
        page.pageSaveFinal();
        page.pagesMain();
        page.verifyPageList(pageTitle, "PUBLISHED");
        console.log(finalJsons);
    });

});