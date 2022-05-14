const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const { faker } = require('@faker-js/faker');
const expect = require('chai').expect;

pageTitleDraft = faker.company.companyName();

// Pages steps
When('I go to pages', async function () {
  let element = await this.driver.$('a[href*="pages"]');
  return await element.click();
});

When('I click new page button', async function () {
  let element = await this.driver.$(".ember-view.gh-btn.gh-btn-green");
  return await element.click();
});

When('I type page title draft', async function () {
  let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
  return await element.setValue(pageTitleDraft);
});

When('I type page title {kraken-string}', async function (newPageTitle) {
  let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
  let randomNum = Math.round(Math.random() * 10000);
  newPageTitle = newPageTitle + randomNum;
  return await element.setValue(newPageTitle);
});

When('I type page description {kraken-string}', async function (newDescription) {
  let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor.__has-no-content');
  let randomNum = Math.round(Math.random() * 10000);
  newDescription = newDescription + randomNum;
  return await element.setValue(newDescription);
});

When('I click on publish link button', async function () {
  let element = await this.driver.$('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger')
  return await element.click();
});

When('I click on publish button', async function () {
  let element = await this.driver.$('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
  return await element.click();
});

When('I click on schedule link button', async function () {
  let element = await this.driver.$$(".gh-publishmenu-radio-button")[1];
  return await element.click();
});

When('I click on schedule button', async function () {
  let element = await this.driver.$('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
  return await element.click();
});

Then('I expect page was published', async function () {
  let element = await this.driver.$$('.gh-notification.gh-notification-passive.ember-view');
  expect(element.length).to.equal(1);
});

Then('I expect page was scheduled', async function () {
  let element = await this.driver.$$('.gh-notification.gh-notification-passive.ember-view');
  expect(element.length).to.equal(1);
});

Then('I expect there are more than zero pages created', async function () {
  let element = await this.driver.$$(".gh-list-row.gh-posts-list-item");
  let totalPages = element.length > 0;
  expect(totalPages).to.equal(true);
});

Then('I expect page title recently edited is in draft', async function () {
  isMostrar = true;
  let i = 2;
  while (isMostrar) {
    let element = await this.driver.$$(".content-list li a h3")[i];
    let elementStatus = await this.driver.$$(".content-list li a span.nowrap")[i];
    if (element && elementStatus) {
      let pageSave = await element.getText();
      let pageStatus = await elementStatus.getText();
      if (pageSave == pageTitleDraft) {
        if(pageStatus.toUpperCase() == "DRAFT"){
          isMostrar = false;
          return assert.equal(pageSave, pageTitleDraft);
        }
      } else {
        i++;
      }
    } else {
      return assert.notEqual('', pageTitleDraft);
    }
  }
});

When('I click on publish link', async function () {
  let element = await this.driver.$('.ember-view.ember-basic-dropdown-trigger ember-basic-dropdown-trigger--right.ember-basic-dropdown-trigger--below.gh-btn gh-btn-outline.gh-publishmenu-trigger')
  return await element.click();
});
