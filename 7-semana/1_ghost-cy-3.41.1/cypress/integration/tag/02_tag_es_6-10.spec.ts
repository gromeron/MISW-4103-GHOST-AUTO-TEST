import { faker } from '@faker-js/faker';
import { Login } from "../../pageObject/login";
import { Tag } from '../../pageObject/tag';

const login = new Login;
const tag = new Tag;

describe('Tag Escenarios 6 - 10', () => {

    beforeEach(() => {
        login.loginRegistrar(Cypress.env('user1Email'), Cypress.env('user1Password'));
    });

    it('36- Crear tag: con nombre y sin descripcion', () => {

        faker.seed(4036);

        let tagName = faker.company.companyName();

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName);
        tag.tagSave();
        tag.tagMain();
        tag.verifyTagCreated(tagName);
    });

    it('37- Crear tag: solo con slug', () => {

        faker.seed(4037);

        let tagSlug = faker.commerce.productAdjective();

        tag.tagMain();
        tag.tagNew();
        tag.typeTagSlug(tagSlug);
        tag.tagSave();
        tag.tagError
    });

    it('38- Crear tag con nombre y con descripción', () => {

        faker.seed(4038);

        let tagName = faker.company.companyName();
        let tagDescription = faker.lorem.sentence(10);

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName);
        tag.TypeTagDescription(tagDescription);
        tag.tagSave();
        tag.tagMain();
        tag.verifyTagCreated(tagName);
    });

    it('39- Crear tag con nombre y descripción; editar tag recién creado sin nombre y sin descripción', () => {

        faker.seed(4039);

        let tagName = faker.company.companyName();
        let tagDescription = faker.lorem.sentence(10);

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName);
        tag.TypeTagDescription(tagDescription);
        tag.tagSave();
        tag.tagMain();
        tag.verifyTagCreated(tagName);
        
    });

});