import { faker } from '@faker-js/faker';
import { Login } from "../../pageObject/login";
import { Post } from "../../pageObject/post";

const login = new Login;
const post = new Post;

describe('Post Escenarios 1 - 5', () => {

    beforeEach(() => {
        login.loginRegistrar(Cypress.env('user1Email'), Cypress.env('user1Password'));
    });

    it('01. ', () => {

        faker.seed(4020);
        let postTitle = faker.company.companyName();

        post.postMain();
        post.postNew();
        post.postTitleInput(postTitle);
        post.postPublish();
    });
});