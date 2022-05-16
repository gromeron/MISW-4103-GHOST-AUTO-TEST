const tagMain = function (cy) {
    cy.get('a[href*="tags"]').first().click();
    cy.wait(1000);
    cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
};

const tagNew = function (cy) {
    cy.get('a[href*="tags/new"]').first().click();
    cy.wait(1000);
};

const tagSave = function (cy) {
    cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').first().click();
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
    let element = cy.get(".gh-btn.gh-btn-primary.gh-btn-icon.gh-btn-red.ember-view");
    return element.should('have.length', 1);
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
    let element = cy.get('#tag-name');
    return element.type(tagTitle);
};

const verifyTagCreated = function (cy, tagTitle) {
    cy.get('.content-list h3')
        .each(($h3) => {
            if ($h3.length > 0) {
                if ($h3[0].innerText === tagTitle) {
                    expect($h3[0].innerText).to.equal(tagTitle);
                }
            }
        });
};

const selectTagCreated = function (cy, tagTitle) {
    cy.get('.content-list h3')
        .each(($h3) => {
            if ($h3.length > 0) {
                if ($h3[0].innerText === tagTitle) {
                    $h3.click();
                }
            }
        });
};

const deleteTagButton = function (cy) {
    let element = cy.get('.gh-btn.gh-btn-red.gh-btn-icon');
    return element.first().click();
};

const deleteTagButtonConfirm = function (cy) {
    cy.wait(2000);
    let element = cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
    return element.first().click();
};

const verifyDeletedTag = function (cy, tagTitle) {
    cy.wait(2000);
    let count = 0;
    cy.get('.content-list h3')
        .each(($h3) => {
            if ($h3.length > 0) {
                if ($h3[0].innerText === tagTitle) {
                    count++;
                }
            }
        });
    expect(count).to.equal(0);
    cy.wait(2000);
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