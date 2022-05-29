import { faker } from '@faker-js/faker';
import { Login } from "../../pageObject/login";
import { Tag } from '../../pageObject/tag';

const login = new Login;
const tag = new Tag;

describe('Tag Escenarios 1 - 5 (ESTRATEGIA DE GENERACIÓN DE DATOS #1: POOL DE DATOS A-PRIORI)', () => {

    beforeEach(() => {
        login.loginRegistrar(Cypress.env('user1Email'), Cypress.env('user1Password'));
    });

    it('31- Crear tag con nombre y después filtrar por tags públicos', () => {

        cy.request(Cypress.env('pageJson'))
            .then((response) => {
                let datos = response.body;
                let tagName = datos[Math.floor(Math.random() * datos.length)]["titulo"];

                tag.tagMain();
                tag.tagNew();
                tag.TypeTagName(tagName);
                tag.tagSave();
                tag.tagMain();
                tag.selectPublicTags();
                tag.verifyTagCreated(tagName);
            })
    });

    it('32- Crear tag con nombre y después filtrar por tags internos', () => {

        cy.request(Cypress.env('pageJson'))
            .then((response) => {
                let datos = response.body;
                let tagName = datos[Math.floor(Math.random() * datos.length)]["titulo"];

                tag.tagMain();
                tag.tagNew();
                tag.TypeTagName(tagName);
                tag.tagSave();
                tag.tagMain();
                tag.selectInternalTags();
                tag.verifyEmptyTagList();
            });
    });

    it('33- Crear tag solo con descripción y verificar si produce error', () => {

        cy.request(Cypress.env('pageJson'))
            .then((response) => {
                let datos = response.body;
                let tagDescription = datos[Math.floor(Math.random() * datos.length)]["descripcion1"];

                tag.tagMain();
                tag.tagNew();
                tag.TypeTagDescription(tagDescription);
                tag.tagSave();
                tag.tagError();
            });
    });

    it('34- Buscar último tag creado mediante la opción de búsqueda global', () => {

        cy.request(Cypress.env('pageJson'))
            .then((response) => {
                let datos = response.body;
                let tagName = datos[Math.floor(Math.random() * datos.length)]["titulo"];

                tag.tagMain();
                tag.findTagByGlobalSearch(tagName);
            });
    });

    it('35- Crear tag: sin nombre y sin descripcion', () => {

        cy.request(Cypress.env('pageJson'))
            .then((response) => {

                tag.tagMain();
                tag.tagNew();
                tag.tagSave();
                tag.tagError()
            });
    });
});