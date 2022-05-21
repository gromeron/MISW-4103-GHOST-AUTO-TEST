export class Page {

    constructor() {}

    pageMain() {
        cy.get('a[href$="#/pages/"]')
            .first().click();
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/pages');
    };
    
    pageNew() {
        cy.get('a[href="#/editor/page/"]').first().click();
    };

    pageTitleInput(title: string) {
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(title, { force: true })
    }
    
    pagePublish() {
        cy.get(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger")
            .click();
    };
    
}