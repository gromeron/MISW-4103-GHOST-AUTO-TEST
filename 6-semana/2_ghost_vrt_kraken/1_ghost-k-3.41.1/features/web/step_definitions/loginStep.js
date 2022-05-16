const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require('chai').expect;

// Login steps
Given('I navigate to login page {kraken-string}', async function (url) {
  return await this.driver.url(url);
});

When("I enter email {kraken-string}", async function (email) {
  let element = await this.driver.$("#ember7");

  return await element.setValue(email);
});

When("I enter password {kraken-string}", async function (password) {
  let element = await this.driver.$("#ember10");

  return await element.setValue(password);
});

When("I click login button", async function () {
  let element = await this.driver.$("#ember12");
  return await element.click();
});

Then('I expect an error message login', async function () {
  let element = await this.driver.$$('.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.gh-btn-red.ember-view');
  expect(element.length).to.equal(1);
});

Then('I expect to be logged in', async function () {
  let element = await this.driver.$$(".gh-nav-list.gh-nav-settings");
  expect(element.length).to.equal(1);
});