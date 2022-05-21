import { faker } from '@faker-js/faker';
import { Login } from "../../pageObject/login";
import { Page } from '../../pageObject/page';

const login = new Login;
const page = new Page;

describe('Page Escenarios 1 - 5', () => {

    beforeEach(() => {
        login.loginRegistrar(Cypress.env('user1Email'), Cypress.env('user1Password'));
    });

    it('01. ', () => {
        faker.seed(4020);
        
        let pageTitle = faker.company.companyName();

        page.pageMain();
        page.pageNew();
        page.pageTitleInput(pageTitle);
        page.pagePublish();
    });
});