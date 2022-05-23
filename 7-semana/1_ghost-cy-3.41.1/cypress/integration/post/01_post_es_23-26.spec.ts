import { faker } from '@faker-js/faker';
import { Login } from "../../pageObject/login";
import { Post } from "../../pageObject/post";

const login = new Login;
const post = new Post;

describe('Post Escenarios 23 - 26', () => {

    beforeEach(() => {
        login.loginRegistrar(Cypress.env('user1Email'), Cypress.env('user1Password'));
    });



    it("23. Crear post – agregarle inyección de código en el footer  - publicar – verificar que el post contenga el footer",()=>{
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var postBody = faker.lorem.paragraph();
        var mensaje = faker.lorem.word();
        let code = `<h1>${postTitle}</h1><p>${mensaje}</p>`;
        post.postMain();
        post.postNew();
        post.postTitleInput(postTitle);
        post.postParagraphInput(postBody);
        post.openSettings();
        post.selectCodeInjectionPost();
        post.postTypeCodeInjectionFooter(code);
        post.closeSettings();
        post.publishPost();
        post.postMain()
        post.goToPublishedPostsList();
        post.clicPostWithTitle(postTitle);
        post.openSettings();
        post.selectCodeInjectionPost();
        post.getCodeInjectionFooter(code);
    });


    it("24. Crear post – agregarle inyección de código en el footer  - publicar – verificar que el post contenga el footer – editar el footer – actualizar - verificar el cambio",()=>{
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var postBody = faker.lorem.paragraph();
        var mensaje = faker.lorem.word();
        var mensaje2 = faker.lorem.word();
        let code = `<h1>${postTitle}</h1><p>${mensaje}</p>`;
        let code2 = `<h1>${mensaje2}</h1><p>${postBody}</p>`;
        post.postMain();
        post.postNew();
        post.postTitleInput(postTitle);
        post.postParagraphInput(postBody);
        post.openSettings();
        post.selectCodeInjectionPost();
        post.postTypeCodeInjectionFooter(code);
        post.closeSettings();
        post.publishPost();
        post.postMain()
        post.goToPublishedPostsList();
        post.clicPostWithTitle(postTitle);
        post.openSettings();
        post.selectCodeInjectionPost();
        post.getCodeInjectionFooter(code);
        post.postTypeCodeInjectionFooter(code2);
        post.closeSettings();
        post.publishPost();
        post.postMain();
        post.goToPublishedPostsList();
        post.clicPostWithTitle(postTitle);
        post.openSettings();
        post.selectCodeInjectionPost();
        post.getCodeInjectionFooter(code2);
    });


    it("25. Crear post – agregar meta data - publicar – verificar que el post contenga la meta data",()=>{
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var postBody = faker.lorem.paragraph();
        let metaTitle = faker.company.companyName();
        let metaDescription = faker.lorem.words(5);
        let canonicalUrl = faker.internet.url();
        post.postMain();
        post.postNew();
        post.postTitleInput(postTitle);
        post.postParagraphInput(postBody);
        post.openSettings();
        post.selectMetaDataPost();
        post.postTypeMetaTitle(metaTitle);
        post.postTypeMetaDescription(metaDescription);
        post.postTypeMetaCanonicalUrl(canonicalUrl);
        post.closeSettings();
        post.publishPost();
        post.postMain();
        post.goToPublishedPostsList();
        post.clicPostWithTitle(postTitle);
        post.openSettings();
        post.selectMetaDataPost();
        post.checkMetaDataPost(metaTitle,metaDescription,canonicalUrl);
    });


    it("26. Crear post – agregar meta data - publicar – verificar que el post contenga la meta data – editar metadata – actualizar - verificar el cambio",()=>{
        var postTitle = faker.company.companyName() + " " + faker.random.number({ min: 1900, max: 2022 });
        var postBody = faker.lorem.paragraph();
        let metaTitle = faker.company.companyName();
        let metaTitle2 = faker.company.companyName();
        let metaDescription = faker.lorem.words(5);
        let metaDescription2 = faker.lorem.words(5);
        let canonicalUrl = faker.internet.url();
        let canonicalUrl2 = faker.internet.url();
        post.postMain();
        post.postNew();
        post.postTitleInput(postTitle);
        post.postParagraphInput(postBody);
        post.openSettings();
        post.selectMetaDataPost();
        post.postTypeMetaTitle(metaTitle);
        post.postTypeMetaDescription(metaDescription);
        post.postTypeMetaCanonicalUrl(canonicalUrl);
        post.closeSettings();
        post.publishPost();
        post.postMain();
        post.goToPublishedPostsList();
        post.clicPostWithTitle(postTitle);
        post.openSettings();
        post.selectMetaDataPost();
        post.checkMetaDataPost(metaTitle,metaDescription,canonicalUrl);
        post.postTypeMetaTitle(metaTitle2);
        post.postTypeMetaDescription(metaDescription2);
        post.postTypeMetaCanonicalUrl(canonicalUrl2);
        post.closeSettings();
        post.publishPost();
        post.postMain();
        post.goToPublishedPostsList();
        post.clicPostWithTitle(postTitle);
        post.openSettings();
        post.selectMetaDataPost();
        post.checkMetaDataPost(metaTitle2,metaDescription2,canonicalUrl2);
    });


});