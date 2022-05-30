/// <reference types="cypress-xpath" />

import { faker } from '@faker-js/faker';
import { Login } from "../../pageObject/login";
import { Tag } from '../../pageObject/tag';

const login = new Login;
const tag = new Tag;

describe('Tag Escenarios 26 - 30', () => {

    beforeEach(() => {
        login.loginRegistrar(Cypress.env('user1Email'), Cypress.env('user1Password'));
    });

    it('56- Crear tag con todos los datos principales y Tarjeta de Twitter con Descripción de Twitter de 156 caracteres', () => {

        let tagName = faker.company.companyName();
        let tagDescription = faker.lorem.sentence();
        let tagMetaTitle = faker.lorem.words();
        let tagMetaDescription = faker.lorem.words();
        let urlCanonical = faker.internet.url();
        let twitterTitle = faker.lorem.word(10);
        let twitterDescription = faker.lorem.word(156);

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
        tag.twitterInputDescription(twitterDescription);
        tag.tagSave();
        tag.tagMain();
    });

    it('57- Crear tag con todos los datos principales y Tarjeta de Facebook con Título de Facebook de mas de 70 caracteres', () => {

        let tagName = faker.company.companyName();
        let tagDescription = faker.lorem.sentence();
        let tagMetaTitle = faker.lorem.words();
        let tagMetaDescription = faker.lorem.words();
        let urlCanonical = faker.internet.url();
        let twitterTitle = faker.lorem.word(10);
        let twitterDescription = faker.lorem.word(157);
        let facebookTitle = faker.lorem.word(71);

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
        tag.twitterInputDescription(twitterDescription);
        tag.facebookExpand();
        tag.facebookInputTitle(facebookTitle);
        tag.tagSave();
        tag.tagMain();
    });

    it('58- Crear tag con todos los datos principales y Tarjeta de Facebook con Título de Facebook de 70 caracteres', () => {

        let tagName = faker.company.companyName();
        let tagDescription = faker.lorem.sentence();
        let tagMetaTitle = faker.lorem.words();
        let tagMetaDescription = faker.lorem.words();
        let urlCanonical = faker.internet.url();
        let twitterTitle = faker.lorem.word(10);
        let twitterDescription = faker.lorem.word(157);
        let facebookTitle = faker.lorem.word(70);

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
        tag.twitterInputDescription(twitterDescription);
        tag.facebookExpand();
        tag.facebookInputTitle(facebookTitle);
        tag.tagSave();
        tag.tagMain();
    });

    it('59- Crear tag con todos los datos principales y Tarjeta de Facebook con Descripción de Facebook de mas de 156 caracteres', () => {

        let tagName = faker.company.companyName();
        let tagDescription = faker.lorem.sentence();
        let tagMetaTitle = faker.lorem.words();
        let tagMetaDescription = faker.lorem.words();
        let urlCanonical = faker.internet.url();
        let twitterTitle = faker.lorem.word(10);
        let twitterDescription = faker.lorem.word(157);
        let facebookTitle = faker.lorem.word(71);
        let facebookDescription = faker.lorem.word(157);

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
        tag.twitterInputDescription(twitterDescription);
        tag.facebookExpand();
        tag.facebookInputTitle(facebookTitle);
        tag.facebookInputDescription(facebookDescription);
        tag.tagSave();
    });

    it('60- Crear tag con todos los datos principales y Tarjeta de Facebook con Descripción de Facebook con 156 caracteres', () => {

        let tagName = faker.company.companyName();
        let tagDescription = faker.lorem.sentence();
        let tagMetaTitle = faker.lorem.words();
        let tagMetaDescription = faker.lorem.words();
        let urlCanonical = faker.internet.url();
        let twitterTitle = faker.lorem.word(10);
        let twitterDescription = faker.lorem.word(157);
        let facebookTitle = faker.lorem.word(71);
        let facebookDescription = faker.lorem.word(156);

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
        tag.twitterInputDescription(twitterDescription);
        tag.facebookExpand();
        tag.facebookInputTitle(facebookTitle);
        tag.facebookInputDescription(facebookDescription);
        tag.tagSave();
    });
});