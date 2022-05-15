const tagMain = function (cy) {
    cy.get('a[href*="tags"]').first().click();
    cy.wait(1000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/tags");
};

const tagNew = function (cy) {
    cy.get('a[href*="tags/new"]').first().click();
    cy.wait(1000);
};

const tagSave = function (cy) {
    cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').first().click();
    cy.wait(1000);
};

const tagFind = function (cy, tagTitle, tagSave) {
    cy.get('.gh-tag-list-name').then(($li) => {
        if ($li.length > 0) {
            for (let i = 0; i <= $li[0].children.length - 1; i++) {
                if ($li[0].children[i].innerText.includes(tagTitle)) {
                    return true;
                }
            }
            return false;
        }
    }).should('eq', tagSave);
};

const tagError = function (cy) {
    let element = cy.xpath('/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/span/p[1]');
    return element.should('contain', 'You must specify a name for the tag');
};

const tagFirstElement = function (cy) {
    let element = cy.xpath('/html/body/div[2]/div/main/section/section/ol/li[2]/a[1]/h3');
    return element.click();
};

const tagNameNotEmpty = function (cy) {
    let element = cy.get('input[id="tag-name"]');
    return element.should('have.length', 1);
};

const tagTypeTitle = function (cy, tagTitle) {
    let element = cy.xpath('/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input');
    return element.type(tagTitle);
};

const verifyTagCreated = function (cy, tagTitle) {
    let isMostrar = true;
    let i = 2;
    while (isMostrar) {
        let element = cy.xpath('/html/body/div[2]/div/main/section/section/ol/li[' + i + ']/a[1]/h3');
        if (element.find('h3').contains(tagTitle)) {
                isMostrar = false;
                return element.find('h3').contains(tagTitle).should('eq', tagTitle);
            } else {
                i++;
            }
    }
};

const selectTagCreated = function (cy, tagTitle) {
    let isMostrar = true;
    let i = 2;
    while (isMostrar) {
        let element = cy.xpath('/html/body/div[2]/div/main/section/section/ol/li[' + i + ']/a[1]/h3');
        if (element.length > 0) {
            let tagFlag = element[0].getText();
            if (tagFlag == tagTitle) {
                isMostrar = false;
                return element[0].click();
            } else {
                i++;
            }
        } else {
            return element.should('not.eq', tagTitle);
        }
    }
};

const deleteTagButton = function (cy) {
    let element = cy.get('.gh-btn.gh-btn-red.gh-btn-icon.mb15');
    return element.click();
};

const deleteTagButtonConfirm = function (cy) {
    let element = cy.xpath('.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
    return element.click();
};

const verifyDeletedTag = function (cy, tagTitle) {
    let isMostrar = true;
    let i = 2;
    while (isMostrar) {
        let element = cy.xpath('/html/body/div[2]/div/main/section/section/ol/li[' + i + ']/a[1]/h3');
        if (element.length > 0) {
            let tagFlag = element[0].getText();
            if (tagFlag == tagTitle) {
                isMostrar = false;
                return element.should('eq', tagTitle);
            } else {
                i++;
            }
        } else {
            return element.should('not.eq', tagTitle);
        }
    }
};


module.exports = {
    tagMain: tagMain,
    tagNew: tagNew,
    tagSave: tagSave,
    tagFind: tagFind,
    tagError: tagError,
    tagFirstElement: tagFirstElement,
    tagNameNotEmpty: tagNameNotEmpty,
    tagTypeTitle: tagTypeTitle,
    verifyTagCreated: verifyTagCreated,
    selectTagCreated: selectTagCreated,
    deleteTagButton: deleteTagButton,
    deleteTagButtonConfirm: deleteTagButtonConfirm,
    verifyDeletedTag: verifyDeletedTag
}