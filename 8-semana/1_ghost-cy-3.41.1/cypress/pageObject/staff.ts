export class Staff {

    constructor() {}

    staffMain() {
        cy.get('a[href$="#/staff/"]')
            .first().click();
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/staff');
    };
    
    staffNew() {
        cy.get('a[href="#/editor/staff/"]').first().click();
    };

    staffTitleInput(title: string) {
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(title, { force: true })
    }
    
    staffPublish() {
        cy.get(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger")
            .click();
    };
    
}