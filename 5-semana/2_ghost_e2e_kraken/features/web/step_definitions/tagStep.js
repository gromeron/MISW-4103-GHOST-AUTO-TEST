const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require('chai').expect;
const assert = require('assert');

// Tags steps

When('I go to tags', async function () {
    let element = await this.driver.$('a[href*="tags"]');
    return await element.click();
});

When('I click on new tag', async function () {
    let element = await this.driver.$('a[href*="tags/new"]');
    return await element.click();
});

When('I type a tag title {kraken-string}', async function (title) {
    let element = await this.driver.$('.ember-text-field.gh-input.ember-view');
    return await element.setValue(title);
});

When('I click on save tag', async function () {
    let element = await this.driver.$('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view');
    return await element.click();
});

When('I scroll to first tag', async function () {
    return await this.driver.execute(() => {
        window.scroll(0, 500);
    });
});

Then('I expect an error message', async function () {
    let element = await this.driver.$$('.gh-btn.gh-btn-blue.gh-btn-icon.gh-btn-red.ember-view');
    expect(element.length).to.equal(1);
});

Then('I expect a green button change', async function () {
    let element = await this.driver.$$('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view');
    expect(element.length).to.equal(1);
})


When("I click on the first Tag", async function () {
    let element = await this.driver.$(
        "/html/body/div[2]/div/main/section/section/ol/li[2]/a[1]/h3"
    );
    return await element.click();
});

Then('The tag name should not be empty', async function () {
    let element = await this.driver.$$('input[id="tag-name"]');
    expect(element.length).to.equal(1);
});

When('I click on delete tag button', async function () {
    let element = await this.driver.$(".gh-btn.gh-btn-red.gh-btn-icon.mb15");
    return await element.click();
});

When('I click on delete confirm button', async function () {
    let element = await this.driver.$(".gh-btn.gh-btn-red.gh-btn-icon.ember-view");
    return await element.click();
})


