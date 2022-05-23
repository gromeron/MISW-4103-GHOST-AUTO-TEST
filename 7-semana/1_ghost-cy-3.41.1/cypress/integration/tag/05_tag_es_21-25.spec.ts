/// <reference types="cypress-xpath" />

import { faker } from '@faker-js/faker';
import { Login } from "../../pageObject/login";
import { Tag } from '../../pageObject/tag';

const login = new Login;
const tag = new Tag;

describe('Tag Escenarios 21 - 25', () => {

    beforeEach(() => {
        login.loginRegistrar(Cypress.env('user1Email'), Cypress.env('user1Password'));
    });

    /* it('51- Crear tag con todos los datos principales y Canonical URL de Metadata inválida', () => {

        let tagName = faker.company.companyName();
        let tagDescription = faker.lorem.sentence();
        let tagMetaTitle = faker.lorem.words();
        let tagMetaDescription = faker.lorem.words();
        let urlWrongCanonical = faker.lorem.sentences(2);

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName);
        tag.TypeTagDescription(tagDescription);
        tag.metadataExpand();
        tag.metadataInputTitle(tagMetaTitle);
        tag.metadataInputDescription(tagMetaDescription);
        tag.metadataInputCanonicalUrl(urlWrongCanonical);
        tag.tagSave();
        tag.errorCanonicalUrl();
    });

    it('52- Crear tag con todos los datos principales y Canonical URL de Metadata válida', () => {

        let tagName = faker.company.companyName();
        let tagDescription = faker.lorem.sentence();
        let tagMetaTitle = faker.lorem.words();
        let tagMetaDescription = faker.lorem.words();
        let urlCanonical = faker.internet.url();

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName);
        tag.TypeTagDescription(tagDescription);
        tag.metadataExpand();
        tag.metadataInputTitle(tagMetaTitle);
        tag.metadataInputDescription(tagMetaDescription);
        tag.metadataInputCanonicalUrl(urlCanonical);
        tag.tagSave();
        tag.tagMain();
    }); */

    it('53- Crear tag con todos los datos principales y Tarjeta de Twitter con Título de twitter de mas de 70 caracteres', () => {

        let tagName = faker.company.companyName();
        let tagDescription = faker.lorem.sentence();
        let tagMetaTitle = faker.lorem.words();
        let tagMetaDescription = faker.lorem.words();
        let urlCanonical = faker.internet.url();
        let twitterTitle = faker.lorem.word(71);

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName);
        tag.TypeTagDescription(tagDescription);
        tag.metadataExpand();
        tag.metadataInputTitle(tagMetaTitle);
        tag.metadataInputDescription(tagMetaDescription);
        tag.metadataInputCanonicalUrl(urlCanonical);
        tag.twitterExpand();
        tag.twitterInputTitle(twitterTitle);
        tag.tagSave();
        tag.tagMain();
    });

    it('54- Crear tag con todos los datos principales y Tarjeta de Twitter con Título de twitter de 70 caracteres', () => {

        let tagName = faker.company.companyName();
        let tagDescription = faker.lorem.sentence();
        let tagMetaTitle = faker.lorem.words();
        let tagMetaDescription = faker.lorem.words();
        let urlCanonical = faker.internet.url();
        let twitterTitle = faker.lorem.word(70);

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName);
        tag.TypeTagDescription(tagDescription);
        tag.metadataExpand();
        tag.metadataInputTitle(tagMetaTitle);
        tag.metadataInputDescription(tagMetaDescription);
        tag.metadataInputCanonicalUrl(urlCanonical);
        tag.twitterExpand();
        tag.twitterInputTitle(twitterTitle);
        tag.tagSave();
        tag.tagMain();
    });

    it('55- Crear tag con todos los datos principales y Tarjeta de Twitter con Descripción de twitter de mas de 156 caracteres', () => {

        let tagName = faker.company.companyName();
        let tagDescription = faker.lorem.sentence();
        let tagMetaTitle = faker.lorem.words();
        let tagMetaDescription = faker.lorem.words();
        let urlCanonical = faker.internet.url();
        let twitterTitle = faker.lorem.word(71);

        tag.tagMain();
        tag.tagNew();
        tag.TypeTagName(tagName);
        tag.TypeTagDescription(tagDescription);
        tag.metadataExpand();
        tag.metadataInputTitle(tagMetaTitle);
        tag.metadataInputDescription(tagMetaDescription);
        tag.metadataInputCanonicalUrl(urlCanonical);
        tag.twitterExpand();
        tag.twitterInputTitle(twitterTitle);
        tag.tagSave();
        tag.tagMain();
    });
});