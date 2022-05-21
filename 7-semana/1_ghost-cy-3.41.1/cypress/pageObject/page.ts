export class Page {

    constructor() {}

    pagesMain() {
        cy.get('a[href*="pages"]').first().click();
        cy.wait(1000);
        cy.url().should("eq", "http://localhost:2368/ghost/#/pages");
    };

    pageNew() {
        cy.get('a[href*="editor/page"]').first().click();
        cy.wait(1000);
    };

    pageTypeEmptyTitle() {
        let element = cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view");
        return element.clear();
    };

    pageTypeTitle(pageTitle: string) {
        let element = cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view");
        return element.type(pageTitle);
    };

    pageTypeDescription(pageDescription: string){
        let element = cy.get(".koenig-editor__editor.__mobiledoc-editor");
        return element.type(pageDescription, { force: true });
    }

    publishButtonPage(){
        cy.get('.gh-publishmenu.ember-view').first().click();
        cy.wait(1000);
    }

    setLiveNowPage(){
        cy.get('.gh-publishmenu-radio-label').first().click();
        cy.wait(1000);
    }

    setSchedulePage(){
        cy.get('.gh-publishmenu-radio-label').last().click();
        cy.wait(1000);
    }

    pageSaveFinal() {
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').first().click();
        cy.wait(3000);
    };

    verifyPageList(pageTitle: string, pageStatus: string) {
        var countPages = 0;
        var countStatusPage = 0;
        var indexPage = 0;
        cy.get('main').scrollTo('bottom')
        cy.wait(2000);
        cy.get('main').scrollTo('bottom')
        cy.wait(2000);
        cy.get('main').scrollTo('bottom')
        cy.wait(2000);
        cy.get('.content-list h3')
            .each(($h3) => {
                countPages++;
                if ($h3.length > 0) {
                    if ($h3[0].innerText === pageTitle) {
                        indexPage = countPages;
                        expect($h3[0].innerText).to.equal(pageTitle);
                    }
                }
            });
        cy.get('.content-list span.nowrap')
            .each(($span) => {
                countStatusPage++;
                if ($span.length > 0) {
                    if (countStatusPage === indexPage) {
                        expect($span[0].innerText.toUpperCase()).to.equal(pageStatus);
                    }
                }
            });
    };

    openEditPage(pageTitle: string){
        cy.get('.content-list h3').contains(pageTitle).first().click();
        cy.wait(1000);
    };

    pageSettings(){
      cy.get(".post-settings").first().click();
      cy.wait(1000);
    };

    pageAddPlus(){
        cy.get('.koenig-plus-menu-button').first().click();
        cy.wait(1000);
    }

    pagePlusClicAddHtml(){
        cy.get('.koenig-cardmenu div[data-kg*="cardmenu-card"]').contains("Insert a raw HTML card").first().click();
        cy.wait(1000);
    }

    pagePlusClicAddEmail(){
        cy.get('.koenig-cardmenu div[data-kg*="cardmenu-card"]').contains("Only visible when delivered by email").first().click();
        cy.wait(1000);
    }

    pagePlusClicAddYoutube(){
        cy.get('.koenig-cardmenu div[data-kg*="cardmenu-card"]').contains("/youtube [video url]").first().click();
        cy.wait(1000);
    }

    pageTypeCodeHtml(pageCodeHtml: string){
        let element = cy.get('.CodeMirror textarea');
        return element.type(pageCodeHtml, { force: true });
    }

    pagePlusTypeLinkYoutube(pageLinkYoutube: string){
        let element = cy.get('.koenig-editor__editor-wrapper [name*="url"]');
        element.type(pageLinkYoutube, { force: true });
        cy.wait(7000);
    }

    pagePlusTypeEmail(pagePlusEmail: string){
        let element2 = cy.get('.koenig-text-replacement-html-input__editor.__mobiledoc-editor');
        return element2.type(pagePlusEmail, { force: true });
    }
    
}