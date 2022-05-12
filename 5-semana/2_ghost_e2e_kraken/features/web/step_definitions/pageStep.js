const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require('chai').expect;

// Pages steps
When('I go to pages', async function () {
  let element = await this.driver.$('a[href*="pages"]');
  return await element.click();
});

When('I click on publish link', async function () {
  let element = await this.driver.$('.ember-view.ember-basic-dropdown-trigger ember-basic-dropdown-trigger--right.ember-basic-dropdown-trigger--below.gh-btn gh-btn-outline.gh-publishmenu-trigger')
  return await element.click();
});