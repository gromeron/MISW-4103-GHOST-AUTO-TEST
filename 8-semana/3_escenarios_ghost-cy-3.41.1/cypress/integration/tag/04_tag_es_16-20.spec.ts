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

        let tagColor = faker.random.alphaNumeric(7);
        let tagName = faker.company.companyName();

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName);
        tag.typeRgbColor(tagColor);
        tag.tagSave();
    });

    it('47- Crear tag con todos los datos principales y Título de Metadata de mas de 70 caracteres', () => {

        let tagName = faker.company.companyName();
        let tagMetaTitle = faker.lorem.words(75);

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName);
        tag.metadataExpand();
        tag.metadataInputTitle(tagMetaTitle);
        tag.tagSave();
        tag.tagMain();
    });

    it('48- Crear tag con todos los datos principales y Título de Metadata de 70 caracteres', () => {

        let tagName = faker.company.companyName();
        let tagMetaTitle = faker.lorem.words(70);

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName);
        tag.metadataExpand();
        tag.metadataInputTitle(tagMetaTitle);
        tag.tagSave();
        tag.tagMain();
    });

    it('49- Crear tag con todos los datos principales y Descripción de Metadata de mas de 156 caracteres', () => {

        let tagName = faker.company.companyName();
        let tagDescription = faker.lorem.sentence(10);
        let tagMetaTitle = faker.lorem.words(70);
        let tagMetaDescription = faker.lorem.words(157);

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName);
        tag.TypeTagDescription(tagDescription);
        tag.metadataExpand();
        tag.metadataInputTitle(tagMetaTitle);
        tag.metadataInputDescription(tagMetaDescription);
        tag.tagSave();
        tag.tagMain();
    });

    it('50- Crear tag con todos los datos principales y Descripción de Metadata de 156 caracteres', () => {

        let tagName = faker.company.companyName();
        let tagDescription = faker.lorem.sentence(10);
        let tagMetaTitle = faker.lorem.words(70);
        let tagMetaDescription = faker.lorem.words(156);

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName);
        tag.TypeTagDescription(tagDescription);
        tag.metadataExpand();
        tag.metadataInputTitle(tagMetaTitle);
        tag.metadataInputDescription(tagMetaDescription);
        tag.tagSave();
        tag.tagMain();
    });
});