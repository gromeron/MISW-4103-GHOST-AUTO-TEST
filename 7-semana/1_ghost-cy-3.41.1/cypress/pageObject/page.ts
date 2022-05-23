import dayjs from "dayjs";

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
        cy.get('main').scrollTo('bottom', {ensureScrollable: false});
        cy.wait(1000);
        cy.get('main').scrollTo('bottom', {ensureScrollable: false});
        cy.wait(1000);
        cy.get('main').scrollTo('bottom', {ensureScrollable: false});
        cy.wait(1000);
        cy.get('.content-list h3')
            .each(($h3) => {
                countPages++;
                if ($h3.length > 0) {
                    if ($h3[0].innerText === pageTitle) {
                        indexPage = countPages;
                        countStatusPage = 0;
                        cy.get('.content-list span.nowrap')
                            .each(($span) => {
                                countStatusPage++;
                                if ($span.length > 0) {
                                    if (countStatusPage === indexPage) {
                                        if($span[0].innerText.toUpperCase() == pageStatus){
                                            expect($h3[0].innerText).to.equal(pageTitle);
                                            expect($span[0].innerText.toUpperCase()).to.equal(pageStatus);
                                        }
                                    }
                                }
                            });

                    }
                }
            });

    };

    verifyPageIsDeleted(pageTitle: string) {
        cy.get('.content-list h3').contains(pageTitle).should('have.length', 0);
    };

    openEditPage(pageTitle: string){
        cy.get('main').scrollTo('bottom', {ensureScrollable: false});
        cy.wait(1000);
        cy.get('main').scrollTo('bottom', {ensureScrollable: false});
        cy.wait(1000);
        cy.get('main').scrollTo('bottom', {ensureScrollable: false});
        cy.wait(1000);
        cy.get('.content-list h3').contains(pageTitle).first().click();
        cy.wait(1000);
    };

    pageSettings(){
      cy.get(".post-settings").first().click();
      cy.wait(1000);
    };

    closePageSettings(){
        cy.get(".close.settings-menu-header-action").first().click();
        cy.wait(1000);
    }

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

    addDayScheduledPage(numberDays: number) {
        let newDate = dayjs().add(numberDays, 'day').format('YYYY-MM-DD');
        let element = cy.get('.gh-publishmenu-dropdown .gh-date-time-picker .gh-date-time-picker-date input');
        element.clear();
        element.type(String(newDate), {force: true});
        cy.wait(1000);
    }

    addMonthsScheduledPage(numberMonths: number) {
        let newDate = dayjs().add(numberMonths, 'month').format('YYYY-MM-DD');
        let element = cy.get('.gh-publishmenu-dropdown .gh-date-time-picker .gh-date-time-picker-date input');
        element.clear();
        element.type(String(newDate), {force: true});
        cy.wait(1000);
    }

    addYearsScheduledPage(numberYears: number) {
        let newDate = dayjs().add(numberYears, 'year').format('YYYY-MM-DD');
        let element = cy.get('.gh-publishmenu-dropdown .gh-date-time-picker .gh-date-time-picker-date input');
        element.clear();
        element.type(String(newDate), {force: true});
        cy.wait(1000);
    }

    addTagsPage(){
        cy.get("#tag-input .ember-power-select-status-icon").first().click();
        cy.wait(1000);
    }

    selectTagToPage(tagName: string){
        cy.contains(tagName).click();
        cy.wait(1000);
    }


    typePageUrlSettings(url: any){
        let element = cy.get("#url");
        element.clear();
        element.type(url, { force: true });
        cy.wait(1000);
    }



    typeExcerptPage(excerptPage: string){
        let element = cy.get("#custom-excerpt");
        element.clear();
        element.type(excerptPage, { force: true });
        cy.wait(1000);
    }

    selectFeatureThisPage(){
        cy.get(".gh-input.post-settings-featured").first().click({ force: true });
        cy.wait(1000);
    }

    selectTwitterCardPage(){
        cy.get(".settings-menu-content li").contains("Twitter card").first().click({ force: true });
        cy.wait(1000);
    }

    selectMetaDataPage(){
        cy.get(".settings-menu-content li").contains("Meta data").first().click({ force: true });
        cy.wait(1000);
    }

    goBackPageSettings(){
        cy.get(".back.settings-menu-header-action").first().click({ force: true });
        cy.wait(1000);
    }

    pageTypeTwitterTitle(twitterTitle: string){
        let element2 = cy.get('#twitter-title');
        return element2.type(twitterTitle, { force: true });
    }

    pageTypeTwitterDescription(twitterDescription: string){
        let element2 = cy.get('#twitter-description');
        return element2.type(twitterDescription, { force: true });
    }

    pageTypeMetaTitle(metaTitle: string){
        let element2 = cy.get('#meta-title');
        return element2.type(metaTitle, { force: true });
    }

    pageTypeMetaDescription(metaDescription: string){
        let element2 = cy.get('#meta-description');
        return element2.type(metaDescription, { force: true });
    }

    pageTypeMetaCanonicalUrl(canonicalUrl: any){
        let element2 = cy.get('.post-setting-canonicalUrl');
        return element2.type(canonicalUrl, { force: true });
    }

    deleteButtonPage(){
        cy.get(".settings-menu-delete-button").first().click({ force: true });
        cy.wait(1000);
    }

    deleteFinalPage(){
        cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view").first().click({ force: true });
        cy.wait(1000);

    }

    selectFilterTags(){
        cy.get(".gh-contentfilter-menu.gh-contentfilter-tag").first().click();
        cy.wait(1000);
    }

    selectFilterSortPage(){
        cy.get(".gh-contentfilter-menu.gh-contentfilter-sort").first().click();
        cy.wait(1000);
    }

    selectFilterAutores(){
        cy.get(".gh-contentfilter-menu.gh-contentfilter-author").first().click();
        cy.wait(1000);
    }

    selectFilterTypePage(){
        cy.get(".gh-contentfilter-menu.gh-contentfilter-type").first().click();
        cy.wait(1000);
    }

    selectTagInFilter(tagName: string){
        cy.get(".gh-contentfilter-menu-dropdown li").contains(tagName).first().click();
        cy.wait(1000);
    }

    selectDraftTypePageFilter(){
        cy.get(".gh-contentfilter-menu-dropdown li").contains("Draft pages").first().click();
        cy.wait(1000);
    }

    selectScheduledTypePageFilter(){
        cy.get(".gh-contentfilter-menu-dropdown li").contains("Scheduled pages").first().click();
        cy.wait(1000);
    }

    selectLastTagInFilter(){
        cy.get(".gh-contentfilter-menu-dropdown li").last().click();
        cy.wait(1000);
    }

    selectLastAuthorInFilter(){
        cy.get(".gh-contentfilter-menu-dropdown li").last().click();
        cy.wait(1000);
    }

    selectLastTypePageInFilter(){
        cy.get(".gh-contentfilter-menu-dropdown li").last().click();
        cy.wait(1000);
    }

    selectLastSortPageInFilter(){
        cy.get(".gh-contentfilter-menu-dropdown li").last().click();
        cy.wait(1000);
    }



    
}