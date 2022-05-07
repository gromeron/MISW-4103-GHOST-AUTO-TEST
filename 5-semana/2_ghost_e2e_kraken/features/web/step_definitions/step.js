const { Given, When, Then } = require("@cucumber/cucumber");

When("I enter email {kraken-string}", async function (email) {
  let element = await this.driver.$("#ember7");

  return await element.setValue(email);
});

When("I enter password {kraken-string}", async function (password) {
  let element = await this.driver.$("#ember10");

  return await element.setValue(password);
});

When("I click button", async function () {
  let element = await this.driver.$("#ember12");

  return await element.click();
});

When('I go to tags', async function () {
  let element = await this.driver.$('a[href*="tags"]');
  return await element.click();
});

When('I click on new tag', async function () {
  let element = await this.driver.$('a[href*="tags/new"]');
  return await element.click();
});

When('I click on save tag', async function () {
  let element = await this.driver.$('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view');
  return await element.click();
});