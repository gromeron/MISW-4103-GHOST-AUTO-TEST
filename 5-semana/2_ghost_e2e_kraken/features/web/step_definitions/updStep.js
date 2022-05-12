const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require('chai').expect;

// Post steps
When('I open tab settings-profile', async function () {
    let element = await this.driver.$('.ember-view.ember-basic-dropdown-trigger.flex.items-center.outline-0.pointer.space-between.pa2.pl4.pr3.mt3.mb6');
    return await element.click();
});

When('I go to my profile', async function () {
    let element = await this.driver.$$(".dropdown-menu.dropdown-triangle-top li a")[1];
    return await element.click();
});

When('I type new full name {kraken-string}', async function (name) {
    let element = await this.driver.$('#user-name');
    return await element.setValue(name);
});

When('I type new user slug {kraken-string}', async function (slug) {
    let element = await this.driver.$('#user-slug');
    return await element.setValue(slug);
});

When('I type new user email {kraken-string}', async function (email) {
    let element = await this.driver.$('#user-email');
    return await element.setValue(email);
});

When('I type original user email {kraken-string}', async function (email) {
    let element = await this.driver.$('#user-email');
    return await element.setValue(email);
});

When('I click update profile button', async function () {
    let element = await this.driver.$(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view");
    return await element.click();
});

Then('I expect original email profile updated {kraken-string}', async function (originalEmail) {
    let element = await this.driver.$('#user-email');
    let value = await element.getValue();
    return await expect(value).to.equal(originalEmail);
})

