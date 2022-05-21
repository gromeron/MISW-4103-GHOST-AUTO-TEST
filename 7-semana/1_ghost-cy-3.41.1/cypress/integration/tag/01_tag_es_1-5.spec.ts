import { faker } from '@faker-js/faker';
import { Login } from "../../pageObject/login";
import { Tag } from '../../pageObject/tag';

const login = new Login;
const tag = new Tag;

describe('Tag Escenarios 1 - 5', () => {

    beforeEach(() => {
        login.loginRegistrar(Cypress.env('user1Email'), Cypress.env('user1Password'));
    });

    it('01. ', () => {
        faker.seed(4020);

        let tagTitle = faker.company.companyName();

        tag.tagMain();
        tag.tagNew();
        tag.tagTitleInput(tagTitle);
        tag.tagPublish();
    });
});