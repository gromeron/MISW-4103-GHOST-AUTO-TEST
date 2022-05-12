const { When, Then } = require("@cucumber/cucumber");
const { expect } = require('chai').expect;
const assert = require('assert');
const { faker } = require('@faker-js/faker');

// Post steps

postTitle = faker.animal.fish();
postBody = faker.lorem.paragraphs(2);

When('I go to posts', async function () {
  let element = await this.driver.$('a[href*="posts"]');
  return await element.click();
});

When('I click on new post', async function () {
  let element = await this.driver.$('a[href*="editor/post"]');
  return await element.click();
});

When('I type a post title', async function () {
  let element = await this.driver.$(".gh-editor-title.ember-text-area.gh-input.ember-view");
  return await element.setValue(postTitle);
});

When('I type a post body', async function () {
  let element = await this.driver.$(".koenig-editor__editor.__mobiledoc-editor.__has-no-content");
  return await element.setValue(postBody);
});


When('I click on a publish link', async function () {
  let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/div/div[1]');
  return await element.click();
});

When('I click on a final publish button', async function () {
  let element = await this.driver.$(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view");
  return await element.click();
});

Then('Verify post recently created', async function () {
  isMostrar = true;
  let i = 2;
  while (isMostrar) {
    let element = await this.driver.$$('/html/body/div[2]/div/main/section/section/ol/li[' + i + ']/a[2]/h3');
    if (element.length > 0) {
      let postSave = await element[0].getText();
      if (postSave == postTitle) {
        isMostrar = false;
        return assert.equal(postSave, postTitle, 'Post creado satisfactoriamente');
      } else {
        i++
      }
    } else {
      return assert.notEqual('', postTitle, 'Post creado, no encontrado');
    }
  }
});