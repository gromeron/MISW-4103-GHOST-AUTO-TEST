const { When, Then } = require("@cucumber/cucumber");
const { expect } = require('chai').expect;
const assert = require('assert');
const { faker } = require('@faker-js/faker');

// Post steps

postTitle = faker.animal.fish();
postBody = faker.lorem.paragraphs(1);

When('I go to posts', async function () {
  return await this.driver.url("http://localhost:3002/ghost/#/posts");
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
  let element = await this.driver.$(".gh-publishmenu.ember-view");
  return await element.click();
});

When('I click on a final publish button', async function () {
    let element = await this.driver.$(".gh-publishmenu-button");
    return await element.click();
});

When('I click on a confirmation publish button', async function () {
  let element = await this.driver.$(".gh-btn.gh-btn-black.gh-btn-icon.ember-view");
  return await element.click();
});

Then('Verify post recently created', async function () {
  isMostrar = true;
  let i = 2;
  while (isMostrar) {
    let element = await this.driver.$$(".gh-list-row.gh-posts-list-item h3")[i];
    if (element.length > 0) {
      let postSave = await element[0].getText();
      if (postSave == postTitle) {
        isMostrar = false;
        return assert.equal(postSave, postTitle, 'Post creado satisfactoriamente');
      } else {
        i++;
      }
    } else {
      return assert.notEqual('', postTitle, 'Post creado, no encontrado');
    }
  }
});

When('I click on post back link', async function () {
  let element = await this.driver.$('.ember-view.gh-editor-back-button');
  return await element.click();
})

Then('Verify last post saved and is in draft status', async function () {
  isMostrar = true;
  let i = 2;
  while (isMostrar) {
    let elementTitle = await this.driver.$$('/html/body/div[2]/div/main/section/section/ol/li[' + i + ']/a[2]/h3');
    let elementDraft = await this.driver.$$('/html/body/div[2]/div/main/section/section/ol/li[' + i + ']/a[5]/div/span');
    if (elementTitle.length > 0) {
      let postSave = elementTitle[0].getText();
      let draftSave = elementDraft[0].getText();
      if (postSave == postTitle && draftSave == 'Draft') {
        isMostrar = false;
        return assert.equal(postSave, postTitle, 'El post ha sido encontrado y es draft');
      } else {
        i++;
      }
    } else {
      return assert.notEqual('', postTitle, 'El post no ha sido encontrado');
    }
  }
});

When('Select post recently created', async function () {
    isMostrar = true;
    let i = 0;
    while (isMostrar) {
        let element = await this.driver.$$(".gh-list-row.gh-posts-list-item h3")[i];
        if (element) {
            let postSave = await element.getText();
            if (postSave == postTitle) {
                isMostrar = false;
                element.click();
            } else {
                i++;
            }
        } else {
            return assert.notEqual('', postTitle);
        }
    }

    while (isMostrar) {
        let element = await this.driver.$$('/html/body/div[2]/div/main/section/section/ol/li[' + i + ']/a[2]/h3');
        if (element.length > 0) {
            let postSave = await element[0].getText();
            if (postSave == postTitle) {
                isMostrar = false;
                return await element[0].click();
            } else {
                i++;
            }
        } else {
            return assert.equal('', postTitle, 'No se encuentra el post recientemente creado');
        }
    }
});

Then('Verify post recently created is published', async function () {
  isMostrar = true;
  let i = 2;
  while (isMostrar) {
      let elementPost = await this.driver.$$('/html/body/div[2]/div/main/section/section/ol/li[' + i + ']/a[2]/h3');
      let elementPublished = await this.driver.$$('/html/body/div[2]/div/main/section/section/ol/li[' + i + ']/a[5]/div/span');
    if (elementPost.length > 0) {
      let postSave = await elementPost[0].getText();
      let publishSave = await elementPublished[0].getText();
      if (postSave == postTitle && publishSave == 'Published') {
        isMostrar = false;
        await this.driver.execute(() => {
          elementPost.window.scroll();
        });
        await this.driver.saveScreenshot('./captura.png');
        return assert.equal(postSave, postTitle, 'Post publicado satisfactoriamente');
      } else {
        i++;
      }
    } else {
      return assert.notEqual('', postTitle, 'Post creado, no publicado');
    }
  }
});

When('I click on settings post button', async function () {
  let element = await this.driver.$('.settings-menu-toggle');
  return await element.click();
})

When('I click on delete post button', async function () {
  let element = await this.driver.$('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button');
  return await element.click();
});

When('I click on delete post confirm button', async function () {
  let element = await this.driver.$('.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
  return await element.click();
});

Then('Deleted post should not be on the posts list', async function () {
  isMostrar = true;
  let i = 2;
  while (isMostrar) {
      let element = await this.driver.$$('/html/body/div[2]/div/main/section/section/ol/li[' + i + ']/a[2]/h3');
      if (element.length > 0) {
          let postSave = await element[0].getText();
          if (postSave == postTitle) {
              isMostrar = false;
              return assert.equal(postSave, postTitle, 'El post no ha sido borrado');
          } else {
              i++;
          }
      } else {
          return assert.notEqual('', postTitle, 'El post ha sido borrado con éxito');
      }
  }
});



