export class Post {

    constructor() {}

    postMain() {
        cy.get('a[href$="#/posts/"]')
            .first().click();
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/posts');
    };
    
    postNew() {
        cy.get('a[href="#/editor/post/"]').first().click();
    };

    postTitleInput(title: string) {
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(title, { force: true })
    }
    
    postPublish() {
        cy.get(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger")
            .click();
    };
    
}