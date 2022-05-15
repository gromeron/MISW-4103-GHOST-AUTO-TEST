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
    cy.get('.gh-tag-settings-multiprop p.response').then(($p) => {
        if ($p.length > 0) {
            expect($p[0].innerText).to.equal('You must specify a name for the tag.');
        }
    });
};

const tagFirstElement = function (cy) {
    let element = cy.get('h3.gh-tag-list-name');
    return element.first().click();
};

const tagNameNotEmpty = function (cy) {
    let element = cy.get('input[id="tag-name"]');
    return element.should('have.length', 1);
};

const tagTypeTitle = function (cy, tagTitle) {
    let element = cy.get('input#tag-name.ember-text-field.gh-input.ember-view');
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
    let element = cy.get('.gh-btn.gh-btn-red.gh-btn-icon.mb15');
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