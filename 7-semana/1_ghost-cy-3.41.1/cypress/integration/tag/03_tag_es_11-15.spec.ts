/// <reference types="cypress-xpath" />

import { faker } from '@faker-js/faker';
import { Login } from "../../pageObject/login";
import { Tag } from '../../pageObject/tag';

const login = new Login;
const tag = new Tag;

describe('Tag Escenarios 11 - 15', () => {

    beforeEach(() => {
        login.loginRegistrar(Cypress.env('user1Email'), Cypress.env('user1Password'));
    });

    it('41- Crear tag con nombre y descripción; editar tag recién creado sin nombre y con descripción', () => {

        faker.seed(4036);

        let tagName = faker.company.companyName();

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName);
        tag.tagSave();
        tag.tagMain();
        tag.verifyTagCreated(tagName);
    });

    it('42- Crear tag con color RGB aleatorio', () => {

        faker.seed(4037);

        let tagSlug = faker.commerce.productAdjective();

        tag.tagMain();
        tag.tagNew();
        tag.typeTagSlug(tagSlug);
        tag.tagSave();
        tag.tagError
    });

    it('43- Crear tag con color RGB aleatorio y slug con caracteres especiales', () => {

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

    it('44- Crear tag con Tag Image', () => {

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

    it('45- Crear tag con Descripción de mas de 500 caracteres', () => {

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