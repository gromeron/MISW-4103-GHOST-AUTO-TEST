const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require('chai').expect;

// Login steps
Given('I navigate to login page {kraken-string}', async function (url) {
  return await this.driver.url(url);
});

When("I enter email {kraken-string}", async function (email) {
  let element = await this.driver.$(".email.ember-text-field.gh-input.ember-view");

  return await element.setValue(email);
});

When("I enter password {kraken-string}", async function (password) {
  let element = await this.driver.$(".password.ember-text-field.gh-input.ember-view");

  return await element.setValue(password);
});

When("I click login button", async function () {
  let element = await this.driver.$(".login.gh-btn");
  return await element.click();
});

Then('I expect an error message login', async function () {
  let element = await this.driver.$$(".gh-btn-red.ember-view");
  expect(element.length).to.equal(1);
});

Then('I expect to be logged in', async function () {
  let element = await this.driver.$$(".ember-view.gh-nav-bottom-tabicon");
  expect(element.length).to.equal(1);
});