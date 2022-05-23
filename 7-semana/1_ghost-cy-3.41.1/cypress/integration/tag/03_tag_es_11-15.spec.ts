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

        let tagName1 = faker.company.companyName();
        let tagName2 = faker.company.companyName();
        let tagDescription1 = faker.lorem.sentence(10);
        let tagDescription2 = faker.lorem.sentence(10);

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName1);
        tag.TypeTagDescription(tagDescription1);
        tag.tagSave();
        tag.tagMain();
        tag.selectTagCreated(tagName1)
        tag.selectTagByTagName(tagName1);
        tag.deleteTagNamefield();
        tag.TypeTagName(tagName2)
        tag.deleteTagDescriptionfield();
        tag.TypeTagDescription(tagDescription2);
        tag.tagSave();
        tag.tagMain();
        tag.verifyTagCreated(tagName2)
    });

    it('42- Crear tag con color RGB aleatorio', () => {

        let tagColor = faker.random.alphaNumeric(6);

        tag.tagMain();
        tag.tagNew();
        tag.typeRgbColor(tagColor);
        tag.tagSave();
        tag.tagError
    });

    it('43- Crear tag con color RGB aleatorio y slug con caracteres especiales', () => {

        let tagColor = faker.random.alphaNumeric(6);
        let tagSlug = 'hiy$%&-slug';

        tag.tagMain();
        tag.tagNew();
        tag.typeRgbColor(tagColor);
        tag.typeTagSlug(tagSlug);
        tag.tagSave();
        tag.tagError
    });

    it('44- Crear tag con Tag Image', () => {

        let tagImage = faker.image.animals();

        tag.tagMain();
        tag.tagNew();
        tag.typeTagImage(tagImage);
        tag.tagSave();
        tag.tagError();
    });

    it('45- Crear tag con Descripción de mas de 500 caracteres', () => {

        let tagName = faker.company.companyName();
        let tagDescription = faker.lorem.paragraph(13);

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName);
        tag.TypeTagDescription(tagDescription);
        tag.tagSave
        tag.descriptionError();
    });
});