const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require('chai').expect;

// Post steps
When('I open staff page', async function () {
    return await this.driver.url("http://localhost:3002/ghost/#/settings/staff");
    let element = await this.driver.$('.ember-view.ember-basic-dropdown-trigger.flex.items-center.outline-0.pointer.space-between.pa2.pl4.pr3.mt3.mb6');
    return await element.click();
});

When('I go to my profile', async function () {
    let element = await this.driver.$(".apps-grid span.gh-badge.owner");
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

When('I type old user password {kraken-string}', async function (oldPassword) {
    let element = await this.driver.$('#user-password-old');
    return await element.setValue(oldPassword);
});

When('I type new user password {kraken-string}', async function (newPassword) {
    let element = await this.driver.$('#user-password-new');
    return await element.setValue(newPassword);
});

When('I type new user password confirmation {kraken-string}', async function (newPassword) {
    let element = await this.driver.$('#user-new-password-verification');
    return await element.setValue(newPassword);
});

When('I click update profile button', async function () {
    let element = await this.driver.$(".gh-btn.gh-btn-primary.gh-btn-icon.ember-view");
    return await element.click();
});

When('I click update password profile button', async function () {
    let element = await this.driver.$(".gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view");
    return await element.click();
});

Then('I expect new email profile saved {kraken-string}', async function (newEmail) {
    let element = await this.driver.$('#user-email');
    let value = await element.getValue();
    return await expect(value).to.equal(newEmail);
})

Then('I expect original email profile updated {kraken-string}', async function (originalEmail) {
    let element = await this.driver.$('#user-email');
    let value = await element.getValue();
    return await expect(value).to.equal(originalEmail);
})

Then('I expect a red button change profile', async function () {
    let element = await this.driver.$$(".gh-btn.gh-btn-primary.gh-btn-icon.gh-btn-red.ember-view");
    expect(element.length).to.equal(1);
})

Then('I expect password was updated', async function () {
    let element = await this.driver.$$('.gh-notification.gh-notification-passive.ember-view');
    expect(element.length).to.equal(1);
})

Then('I expect password was not updated', async function () {
    let element = await this.driver.$$('.gh-alert.gh-alert-red.ember-view');
    expect(element.length).to.equal(1);
})


