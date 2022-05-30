import { faker } from '@faker-js/faker';
import { Login } from "../../pageObject/login";
import { Staff } from '../../pageObject/staff';

const login = new Login;
const staff = new Staff;

describe('Staff Escenarios 1 - 5', () => {

    beforeEach(() => {
        login.loginRegistrar(Cypress.env('user1Email'), Cypress.env('user1Password'));
    });

    it('01. ', () => {

        faker.seed(4020);
        let staffTitle = faker.company.companyName();

        staff.staffMain();
        staff.staffNew();
        staff.staffTitleInput(staffTitle);
        staff.staffPublish();
    });
});