/// <reference types="cypress-xpath" />

import { faker } from '@faker-js/faker';
import { Login } from "../../pageObject/login";
import { Tag } from '../../pageObject/tag';

const login = new Login;
const tag = new Tag;

describe('Tag Escenarios 16 - 20', () => {

    beforeEach(() => {
        login.loginRegistrar(Cypress.env('user1Email'), Cypress.env('user1Password'));
    });

    it('46- Crear tag con color RGB de mas de 6 caracteres', () => {

        faker.seed(4036);

        let tagName = faker.company.companyName();

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName);
        tag.tagSave();
        tag.tagMain();
        tag.verifyTagCreated(tagName);
    });

    it('47- Crear tag con todos los datos principales y Título de Metadata de mas de 70 caracteres', () => {

        faker.seed(4037);

        let tagSlug = faker.commerce.productAdjective();

        tag.tagMain();
        tag.tagNew();
        tag.typeTagSlug(tagSlug);
        tag.tagSave();
        tag.tagError
    });

    it('48- Crear tag con todos los datos principales y Título de Metadata de 70 caracteres', () => {

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

    it('49- Crear tag con todos los datos principales y Descripción de Metadata de mas de 156 caracteres', () => {

        /* faker.seed(4038); */

        let tagName = faker.company.companyName();
        let tagDescription = faker.lorem.sentence(10);

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName);
        tag.TypeTagDescription(tagDescription);
        tag.tagSave();
        tag.tagMain();
        /* tag.verifyTagCreated(tagName) */
        tag.selectTagByTagName(tagName);
        tag.deleteTagNamefield();
        tag.deleteTagDescriptionfield();
        tag.tagSave();
        tag.tagError();
    });

    it('50- Crear tag con todos los datos principales y Descripción de Metadata de 156 caracteres', () => {

        /* faker.seed(4038); */

        let tagName1 = faker.company.companyName();
        let tagName2 = faker.company.companyName();
        let tagDescription = faker.lorem.sentence(10);

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName1);
        tag.TypeTagDescription(tagDescription);
        tag.tagSave();
        tag.tagMain();
        tag.verifyTagCreated(tagName1)
        tag.selectTagByTagName(tagName1);
        tag.deleteTagNamefield();
        tag.TypeTagName(tagName2)
        tag.deleteTagDescriptionfield();
        tag.tagSave();
        tag.tagMain();
        tag.verifyTagCreated(tagName2)
    });
});