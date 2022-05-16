const loginRegistrar = function (cy, email, password) {
    cy.get("input#ember8.email.ember-text-field.gh-input.ember-view").type(email);
    cy.get("input#ember10.password.ember-text-field.gh-input.ember-view").type(password);
    cy.get("button#ember12.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view").first().click();
};

const setUpNewUser = function (cy, siteTitle, fullName, email, password) {
    cy.get('a#ember12.gh-btn.gh-btn-green.gh-btn-lg.gh-btn-icon.gh-btn-icon-right.ember-view').click();
    cy.wait(2000);
    cy.get('input#blog-title.ember-text-field.gh-input.ember-view').type(siteTitle);
    cy.get('input#name.ember-text-field.gh-input.ember-view').type(fullName);
    cy.get('input#email.ember-text-field.gh-input.ember-view').type(email);
    cy.get('input#password.ember-text-field.gh-input.ember-view').type(password);
    cy.get('button#ember29.gh-btn.gh-btn-green.gh-btn-lg.gh-btn-block.gh-btn-icon.ember-view').first().click();
    cy.wait(3000);
    cy.xpath('/html/body/div[2]/div/main/div/div/section/button').first().click();
};

const logout = function (cy) {
    cy.wait(2000);
    cy.get('span.gh-user-email').click();
    cy.wait(2000);
    cy.get('a#ember69.dropdown-item user-menu-signout ember-view').click();
};

module.exports = {
    loginRegistrar: loginRegistrar,
    setUpNewUser : setUpNewUser,
    logout : logout
};