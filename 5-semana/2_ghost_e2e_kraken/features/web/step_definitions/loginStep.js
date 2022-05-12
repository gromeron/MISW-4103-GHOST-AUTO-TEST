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