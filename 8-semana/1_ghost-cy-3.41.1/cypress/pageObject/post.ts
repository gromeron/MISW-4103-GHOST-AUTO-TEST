export class Post {

    constructor() {}
     //Dar clic en posts y verificar que la url es correcta
    postMain() {
        cy.get('a[href*="posts"]').first().click();
        cy.wait(1000);
        cy.url().should('contain', 'http://localhost:2368/ghost/#/posts');
    }

    //Dar clic en botón de nuevo post en página principal
    postNew() {
        cy.get('a[href="#/editor/post/"]').first().click();
    }

    // Ingresar el título de un post
    postTitleInput(title: string) {
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').clear({force:true});
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(title, { force: true });
        cy.wait(1000);
    }

    postParagraphInput(postBody: string) {
        cy.get(".koenig-editor__editor.__mobiledoc-editor.__has-no-content").type(postBody, { force: true });
        cy.wait(1000);
    }

    verifyPostList(pageTitle: string, pageStatus: string) {
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

    // publicar un post
    publishPost() {
        cy.get(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger").click({force:true});
        cy.wait(1000);
        cy.get("button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view").click({force:true});
        cy.wait(1000);
    }

    // Dar clic en enlace a posts
    clickPostMenu(){
        cy.get('a').contains('Posts').click();
        cy.wait(1000);
    }


    //   clickParagraph() {
    //     cy.get('article').find('[contenteditable]').click();
    //     cy.wait(500);
    //   }

    // reescribir texto de un párrafo
      rewriteParagraph(paragraph:string) {
        cy.get('article').find('[contenteditable]').clear().type(paragraph);
        cy.wait(1000);
      }

      // reescribir título de un párrafo
      rewriteTitle(title:string) {
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').clear().type(title);
        cy.wait(1000);
      }

      // dar clic en el post con un título
      clicPostWithTitle(title:string) {
        cy.get(".gh-post-list-title").contains(title).click({force: true});
        cy.wait(1000);
      }

      // Borrar un post
      deletePost() {
        cy.get('.settings-menu-delete-button').first().click();
        cy.wait(1000);
        cy.get('.modal-footer .gh-btn-red').click({force: true});
        cy.wait(1000);
      }


      updatePost() {
        cy.get('span').contains('Update').click();
        cy.wait(1000);
        cy.get('span').contains('Update').click();
        cy.wait(3000);
      }

    // despublicar post
      unpublishPost() {
        cy.get('span').contains('Update').click();
        cy.wait(1000);
        cy.get('.gh-publishmenu-radio-label').contains('Unpublished').click();
        cy.wait(1000);
        cy.get('button').get('.gh-publishmenu-button').contains('Unpublish').click();
        cy.wait(2000);
      }

      //abrir settings
      openSettings() {
        cy.get('button').get('.post-settings').click();
        cy.wait(500);
      }

      //cerrar settings
      closeSettings() {
        cy.get('button').get('.settings-menu-header-action').first().click({force: true});
        cy.wait(500);
      }

    //   shouldNotExistPost() {
    //     cy.get('.error-description').should('contain', 'Page not found');
    //   }

    //seleccionar el primer tag
      selectFirstTag() {
        cy.get('#tag-input').click();
        cy.wait(1000);
        cy.get('.ember-power-select-option').first().click();
        cy.wait(1000);
        cy.get('#tag-input').click();
        cy.wait(1000);
      }

      backPostList() {
        cy.get('a').get('.blue').click();
        cy.wait(500);
      }

      shouldExist(title:string) {
        cy.get('.post-card-title').contains(title).should('contain', title);
      }

      shouldExistTag(title:string, tag:string) {
        cy.get('.post-card-title').contains(title).parent().get('.post-card-primary-tag').first().should('contain', tag);
      }

      shouldNotExist(title: string) {
        cy.get('.post-card-title').contains(title).should('not.exist');
      }

      shouldShowError(error: string) {
        cy.get('.gh-alert-content').contains(error).should('contain', error);
      }

      // abrir el primer post publicado
      openFirstPublishedPost() {
        cy.get(".gh-post-list-title").get('.gh-content-status-published').contains('Published').first().click({force: true},);
        cy.wait(1000);
      }

      //obtener título del primer post publicado
      getFirstPublishedPostTitle() {
        return cy.get('.gh-content-status-published').contains('Published').first().parent().parent().parent().find('.gh-content-entry-title').invoke('text');
      }

      // obtener tag del primer post publicado
      getFirstPublishedPostTag() {
        return cy.get('#tag-input .ember-power-select-multiple-option').first().invoke('text');
      }

      //obtener título del primer post en estado draft
      getFirstDraftPostTitle() {
        return cy.get('.gh-content-status-draft').contains('Draft').first().parent().parent().parent().find('.gh-content-entry-title').invoke('text');
      }

      //obtener título del primer post en listado de posts programados
      getFirstScheduledPostTitle() {
        return cy.get('.gh-content-status-draft').contains('Scheduled').first().parent().parent().parent().find('.gh-content-entry-title').invoke('text');
      }

      // obtener la url de un post
      getPostUrl() {
        return cy.get('.post-view-link').first().invoke('attr', 'href');
      }

      // verificar que el contenido de un post sea el esperado
      verifyParagraphContent(postBody: string) {
        cy.get(".koenig-editor__editor.__mobiledoc-editor").should('contain', postBody);
        cy.wait(1000);
    }

    verifyTitleContent(title:string) {
        cy.get('.gh-content-status-draft').contains('Draft').first().parent().parent().parent().find('.gh-content-entry-title').should('contain',title);
    }

    schedulePost()
    {
        cy.get(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger").click();
        cy.wait(1000);
        cy.get(".gh-publishmenu-radio-button").eq(1).click();
        cy.wait(1000);
        cy.get(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view").click();
        cy.wait(1000);
    }

    goToScheduledPostsList(){
        cy.get('a[href="#/posts/?type=scheduled"]').first().click();
        cy.wait(1000);
    }

    goToFeaturedPostsList(){
        // cy.get("[name='All posts']").first().click();
        // cy.wait(1000);
        // cy.get('a[href="#/posts/?type=featured"]').first().click();
        // cy.wait(1000);
        cy.visit("#/posts?type=featured");
        cy.wait(1000);
    }

    goToDraftPostsList(){
        cy.get('a[href="#/posts/?type=draft"]').first().click();
        cy.wait(1000);
    }


    //obtener el texto que indica el número de palabras de un post
    wordsNum()
    {
        return cy.get("div.midgrey-l2.f8.pl4.pr3.fw4").invoke("text");
    }

    assignUrl(url:string)
    {
        cy.get("input#url.post-setting-slug.ember-text-field.gh-input.ember-view").clear().type(url, { force: true })
        cy.wait(1000);
    }

    viewPost()
    {
        cy.wait(1000);
        cy.get('a.post-view-link').invoke('attr', 'target', '').click();
    }

    // Obtener el texto del primer tag asociado al post
    FirstTagText(){
        return cy.get("li.ember-power-select-multiple-option.tag-token.js-draggableObject.draggable-object.ember-view").invoke("text");
    }

    addExcerpt(excerpt:string)
    {
        cy.get("textarea.post-setting-custom-excerpt.ember-text-area.gh-input.ember-view").type(excerpt);
        cy.wait(1000);
    }

    editExcerpt(excerpt:string)
    {
        cy.get("textarea.post-setting-custom-excerpt.ember-text-area.gh-input.ember-view").clear().type(excerpt);
        cy.wait(1000);
    }

    // Ir a la lista de posts publicados:
    goToPublishedPostsList(){
        cy.wait(1000);
        cy.get('a[href="#/posts/?type=published"]').first().click();
        cy.wait(1000);
    }

    addCodeInjection(code:string)
    {
        cy.get('button').contains('Code injection').click();
        cy.wait(1000);
        cy.get("div.post-setting-codeinjection.ember-view textarea").first().type(code,{force: true,parseSpecialCharSequences:false});
        cy.wait(1000);
    }

    getCodeInjection()
    {
        return cy.get("div.post-setting-codeinjection.ember-view textarea").first().invoke('text');
    }

    getCodeInjectionFooter(code:string)
    {
        cy.get('.CodeMirror-line span').should('contain',code);
    }

    schedulePostWrongDate()
    {
        cy.get(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger").click();
        cy.wait(1000);
        cy.get(".gh-publishmenu-radio-button").eq(1).click();
        cy.wait(1000);
        cy.get("div.gh-date-time-picker-date input").first().clear().type("2022");
        cy.wait(1000);
        cy.get(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view").click();
        cy.wait(1000);
    }

    schedulePostWrongTime()
    {
        cy.get(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger").click();
        cy.wait(1000);
        cy.get(".gh-publishmenu-radio-button").eq(1).click();
        cy.wait(1000);
        cy.get("div.gh-date-time-picker-time input").first().clear().type("1");
        cy.wait(1000);
        cy.get(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view").click();
        cy.wait(1000);
    }

    schedulePostPastDate()
    {
        cy.get(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger").click();
        cy.wait(1000);
        cy.get(".gh-publishmenu-radio-button").eq(1).click();
        cy.wait(1000);
        cy.get("div.gh-date-time-picker-date input").first().clear().type("2022-01-01");
        cy.wait(1000);
        cy.get(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view").click();
        cy.wait(1000);
    }

    schedulePostFutureDate()
    {
        cy.get(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger").click();
        cy.wait(1000);
        cy.get(".gh-publishmenu-radio-button").eq(1).click();
        cy.wait(1000);
        cy.get("div.gh-date-time-picker-date input").first().clear().type("2050-01-01");
        cy.wait(1000);
        // cy.get(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view").click();
        // cy.wait(1000);
    }

    featurePost()
    {
        cy.get("div span[class='input-toggle-component']").first().click();
        cy.wait(1000);
    }


    selectCodeInjectionPost(){
        cy.get(".settings-menu-content li").contains("Code injection").first().click({ force: true });
        cy.wait(1000);
    }

    postTypeCodeInjectionFooter(pageCodeHtml: string){
        let element = cy.get('.CodeMirror textarea').last();
        element.clear({force: true});
        return element.type(pageCodeHtml, { force: true });
    }

    postTypeCodeInjectionHeader(pageCodeHtml: string){
        let element = cy.get('.CodeMirror textarea').first();
        return element.type(pageCodeHtml, { force: true });
    }

    selectMetaDataPost(){
        cy.get(".settings-menu-content li").contains("Meta data").first().click({ force: true });
        cy.wait(1000);
    }

    postTypeMetaTitle(metaTitle: string){
        let element2 = cy.get('#meta-title');
        element2.clear();
        return element2.type(metaTitle, { force: true });
    }

    postTypeMetaDescription(metaDescription: string){
        let element2 = cy.get('#meta-description');
        element2.clear();
        return element2.type(metaDescription, { force: true });
    }

    postTypeMetaCanonicalUrl(canonicalUrl: any){
        let element2 = cy.get('.post-setting-canonicalUrl');
        element2.clear();
        return element2.type(canonicalUrl, { force: true });
    }

    checkMetaDataPost(title:string,description:string,url:string){
        cy.get('#meta-title').should('have.value', title);
        cy.get('#meta-description').should('have.value', description);
        cy.get('.post-setting-canonicalUrl').should('have.value', url);
    }

    selectTwitterCardPage(){
        cy.get(".settings-menu-content li").contains("Twitter card").first().click({ force: true });
        cy.wait(1000);
    }

    pageTypeTwitterTitle(twitterTitle: string){
        let element2 = cy.get('#twitter-title');
        element2.clear({force:true});
        return element2.type(twitterTitle, { force: true });
    }

    pageTypeTwitterDescription(twitterDescription: string){
        let element2 = cy.get('#twitter-description');
        element2.clear({force:true});
        return element2.type(twitterDescription, { force: true });
    }

    checkTwitterDataPost(title:string,description:string){
        cy.get('#twitter-title').should('have.value', title);
        cy.get('#twitter-description').should('have.value', description);
    }

    pageAddPlus(){
        cy.get('.koenig-plus-menu-button').first().click();
        cy.wait(1000);
    }

    pagePlusClicAddYoutube(){
        cy.get('.koenig-cardmenu div[data-kg*="cardmenu-card"]').contains("/youtube [video url]").first().click();
        cy.wait(1000);
    }

    pagePlusClicAddEmail(){
        cy.get('.koenig-cardmenu div[data-kg*="cardmenu-card"]').contains("Only visible when delivered by email").first().click();
        cy.wait(1000);
    }

    pagePlusTypeEmail(pagePlusEmail: string){
        let element2 = cy.get('.koenig-text-replacement-html-input__editor.__mobiledoc-editor');
        return element2.type(pagePlusEmail, { force: true });
    }

    pagePlusTypeLinkYoutube(pageLinkYoutube: string){
        let element = cy.get('.koenig-editor__editor-wrapper [name*="url"]');
        element.type(pageLinkYoutube, { force: true });
        cy.wait(7000);
    }

}