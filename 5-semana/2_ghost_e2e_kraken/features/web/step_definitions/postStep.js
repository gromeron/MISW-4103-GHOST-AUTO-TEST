const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require('chai').expect;

// Post steps
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