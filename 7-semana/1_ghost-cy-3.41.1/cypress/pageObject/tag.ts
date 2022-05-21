export class Tag {

    constructor() {}

    tagMain() {
        cy.get('a[href$="#/tags/"]')
            .first().click();
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/tags');
    };
    
    tagNew() {
        cy.get('a[href="#/editor/tag/"]').first().click();
    };

    tagTitleInput(title: string) {
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(title, { force: true })
    }
    
    tagPublish() {
        cy.get(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger")
            .click();
    };
    
}