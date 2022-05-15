const loginRegistrar = function (cy, email, password) {
    cy.get(".email.ember-text-field.gh-input.ember-view").type(email);
    cy.get(".password.ember-text-field.gh-input.ember-view").type(password);
    cy.get(".login.gh-btn").click();
};

const setUpNewUser = function (cy, siteTitle, fullName, email, password) {
    cy.xpath('/html/body/div[2]/div/main/div/div/section/a/span').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[2]/div/main/div/div/section/form/div[2]/span/input').type(siteTitle);
    cy.xpath('/html/body/div[2]/div/main/div/div/section/form/div[3]/span/input').type(fullName);
    cy.xpath('/html/body/div[2]/div/main/div/div/section/form/div[4]/span/input').type(email);
    cy.xpath('/html/body/div[2]/div/main/div/div/section/form/div[5]/span/input').type(password);
    cy.xpath('/html/body/div[2]/div/main/div/div/section/form/button/span').first().click();
    cy.wait(3000);
    cy.xpath('/html/body/div[2]/div/main/div/div/section/button').first().click();
};

module.exports = {
    loginRegistrar: loginRegistrar,
    setUpNewUser : setUpNewUser
};