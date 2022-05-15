const { When, Then } = require("@cucumber/cucumber");
const { expect } = require('chai').expect;
const assert = require('assert');
const { faker } = require('@faker-js/faker');


// Tags steps

tagTitle = faker.company.companyName();

When('I go to tags', async function () {
    let element = await this.driver.$('a[href*="tags"]');
    return await element.click();
});

When('I click on new tag', async function () {
    let element = await this.driver.$('a[href*="tags/new"]');
    return await element.click();
});

When('I type a tag title', async function () {
    let element = await this.driver.$('.ember-text-field.gh-input.ember-view');
    return await element.setValue(tagTitle);
});

When('I click on save tag', async function () {
    let element = await this.driver.$('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view');
    return await element.click();
});

When('I scroll to first tag', async function () {
    return await this.driver.execute(() => {
        window.scroll(0, 500);
    });
});

Then('I expect an error message', async function () {
    let element = await this.driver.$$('.gh-btn.gh-btn-blue.gh-btn-icon.gh-btn-red.ember-view');
    expect(element.length).to.equal(1);
});

Then('I expect a green button change', async function () {
    let element = await this.driver.$$('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view');
    expect(element.length).to.equal(1);
})

When('I click on the first Tag', async function () {
    let element = await this.driver.$(
        "/html/body/div[2]/div/main/section/section/ol/li[2]/a[1]/h3"
    );
    return await element.click();
});

Then('The tag name should not be empty', async function () {
    let element = await this.driver.$$('input[id="tag-name"]');
    expect(element.length).to.equal(1);
});

When('I click on delete tag button', async function () {
    let element = await this.driver.$(".gh-btn.gh-btn-red.gh-btn-icon.mb15");
    return await element.click();
});

When('I click on delete tag confirm button', async function () {
    let element = await this.driver.$(".gh-btn.gh-btn-red.gh-btn-icon.ember-view");
    return await element.click();
})

Then('Deleted tag should not be on the tag list', async function () {
    isMostrar = true;
    let i = 2;
    while (isMostrar) {
        let element = await this.driver.$$('/html/body/div[2]/div/main/section/section/ol/li[ ' + i + ']/a[1]/h3');
        if (element.length > 0) {
            let tagSave = await element[0].getText();
            if (tagSave == tagTitle) {
                isMostrar = false;
                return assert.equal(tagSave, tagTitle);
            } else {
                i++;
            }
        } else {
            return assert.notEqual('', tagTitle);
        }
    }
});

When('Select tag recently created', async function () {
    isMostrar = true;
    let i = 2;
    while (isMostrar) {
        let element = await this.driver.$$('/html/body/div[2]/div/main/section/section/ol/li[ ' + i + ']/a[1]/h3');
        if (element.length > 0) {
            let tagSave = await element[0].getText();
            if (tagSave == tagTitle) {
                isMostrar = false;
                return await element[0].click();
            } else {
                i++;
            }
        } else {
            return assert.equal('', tagTitle);
        }
    }
});

Then('Verify tag recently created', async function () {
    isMostrar = true;
    let i = 2;
    while (isMostrar) {
        let element = await this.driver.$$(".content-list li a h3")[i];
        if (element) {
            let tagSave = await element.getText();
            if (tagSave == tagTitle) {
                isMostrar = false;
                return assert.equal(tagSave, tagTitle);
            } else {
                i++;
            }
        } else {
            return assert.notEqual('', tagTitle);
        }
    }
});