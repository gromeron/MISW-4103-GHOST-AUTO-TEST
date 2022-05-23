import { faker } from '@faker-js/faker';
import { Login } from "../../pageObject/login";
import { Tag } from '../../pageObject/tag';

const login = new Login;
const tag = new Tag;

describe('Tag Escenarios 1 - 5', () => {

    beforeEach(() => {
        login.loginRegistrar(Cypress.env('user1Email'), Cypress.env('user1Password'));
    });

    it('31- Crear tag con nombre y después filtrar por tags públicos', () => {
        
        let tagName = faker.company.companyName();

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName);
        tag.tagSave();
        tag.tagMain();
        tag.selectPublicTags();
        tag.verifyTagCreated(tagName);
    });

    it('32- Crear tag con nombre y después filtrar por tags internos', () => {
        
        faker.seed(4032);

        let tagName = faker.company.companyName();

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName);
        tag.tagSave();
        tag.tagMain();
        tag.selectInternalTags();
        tag.verifyEmptyTagList();
    });

    it('33- Crear tag solo con descripción y verificar si produce error', () => {
        
        faker.seed(4033);

        let tagDescription = faker.lorem.sentence(10);

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagDescription(tagDescription);
        tag.tagSave();
        tag.tagError();
    });

    it('34- Buscar último tag creado mediante la opción de búsqueda global', () => {

        faker.seed(4099);

        let tagName = faker.company.companyName();

        tag.tagMain();
        tag.findTagByGlobalSearch(tagName);
    })

    it('35- Crear tag: sin nombre y sin descripcion', () => {

        tag.tagMain();
        tag.tagNew();
        tag.tagSave();
        tag.tagError()
    })
});