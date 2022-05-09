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

When('I go to posts', async function () {
  let element = await this.driver.$('a[href*="posts"]');
  return await element.click();
});

When('I click on new post', async function () {
  let element = await this.driver.$('a[href*="editor/post"]');
  return await element.click();
});

When('I enter post title', async function () {
  let element = await this.driver.$(".gh-editor-title.ember-text-area.gh-input.ember-view");
  return await element.setValue("Titulo post nuevo");
});

When('I click on a publish link selector', async function () {
  let element = await this.driver.$(".gh-publishmenu.ember-view");
  return await element.click();
});

When('I click on a final publish button', async function () {
  let element = await this.driver.$(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view");
  return await element.click();
});

When('I go to pages', async function () {
  let element = await this.driver.$('a[href*="pages"]');
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