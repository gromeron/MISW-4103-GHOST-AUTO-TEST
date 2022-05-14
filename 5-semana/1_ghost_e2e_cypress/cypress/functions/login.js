const loginRegistrar = function (cy, email, password) {
    cy.get('#ember8').type(email);
    cy.get('#ember10').type(password);
    cy.get('#ember12').click();
    cy.xpath('//*[@id="ember47"]/div/div[2]/span[2]').should('contain', email);
}

module.exports = {loginRegistrar: loginRegistrar};