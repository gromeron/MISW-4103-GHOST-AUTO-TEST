export class Tag {

    private tagMainLocator = 'a[href$="#/tags/"]';

    constructor() { }

    tagMain() {
        cy.get(this.tagMainLocator)
            .first().click();
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/tags');
    };

    tagNew() {
        cy.contains('New tag')
            .first().click();
    };

    tagSave() {
        cy.contains('Save')
            .click()
            .wait(2000);
    };

    selectPublicTags() {
        cy.contains('Public tags')
            .click();
    }

    selectInternalTags() {
        cy.contains('Internal tags')
            .click();
    }

    tagError() {
        cy.get('.gh-tag-settings-multiprop p.response').then(($p) => {
            if ($p.length > 0) {
                expect($p[0].innerText).to.contain('You must specify a name for the tag.');
            }
        });
    };

    slugError() {
        cy.get('.gh-tag-settings-multiprop p.response').then(($p) => {
            if ($p.length > 0) {
                expect($p[0].innerText).to.contain('The color should be in valid hex format');
            }
        });
    }

    errorCanonicalUrl() {
        cy.get('.form-group.error.ember-view').then(($p) => {
            if ($p.length > 0) {
                expect($p[0].innerText).to.contain('The url should be a valid url');
            }
        });
    }

    descriptionError() {
        cy.get('.gh-tag-settings-multiprop p.response').then(($p) => {
            if ($p.length > 0) {
                expect($p[0].innerText).to.equal('Description cannot be longer than 500 characters.');
            }
        });
        cy.wait(2000);
    }

    tagFirstElement() {
        cy.get('h3.gh-tag-list-name')
            .first().click();
    };

    tagNameNotEmpty() {
        cy.get('input[id="tag-name"]')
            .should('have.length', 1);
    };

    TypeTagName(tagName: string) {
        cy.get('#tag-name')
            .type(tagName, { force: true });
    };

    TypeTagDescription(tagDescription: string) {
        return cy.get('textarea[name="description"]')
            .type(tagDescription, { force: true });
    };

    typeTagSlug(tagSlug: string) {
        cy.get('#tag-slug')
            .type(tagSlug);
    }

    typeRgbColor(color: string) {
        return cy.get('input[placeholder="abcdef"]')
            .type(color)
    }

    typeTagImage(image: string) {
        return cy.get('.gh-btn.gh-btn-outline').type(image);
    }

    verifyEmptyTagList() {
        cy.get('h3.gh-tag-list-name')
            .should('not.exist')
        return cy.log('La lista está vacia')
    };

    deleteTagNamefield() {
        cy.get('[role="main"]').scrollTo('top');
        cy.wait(2000);
        cy.get('#tag-name').click({ force: true }).clear({ force: true });
    }

    deleteTagDescriptionfield() {
        cy.get('[role="main"]').scrollTo('top');
        cy.wait(2000);
        cy.get('#tag-description').click({ force: true }).clear({ force: true });
    }

    selectTagByTagName(tagName: string) {
        cy.get('section.content-list h3')
            .each(($h3) => {
                if ($h3.length > 0) {
                    if ($h3[0].innerText === tagName) {
                        expect($h3[0].innerText).to.equal(tagName);
                        cy.contains('.gh-tag-list-name', tagName).click()
                        return cy.log('++++++++++++')
                    }
                } else {
                    return cy.log('----------');
                }
            });
    };

    /* selectTagCreated(tagName: string) {
        cy.get('.content-list h3')
            .each(($h3) => {
                if ($h3.length > 0) {
                    if ($h3[0].innerText === tagName) {
                        $h3[0].click()
                    }
                }
            });
    }; */

    selectTagCreated(tagName: string) {
        return cy.get('.gh-tag-list-name').contains(tagName).click();
    }

    findTagByGlobalSearch(tagName: string) {
        cy.once('uncaught:exception', () => false);
        cy.get('.w4 > path').click({ force: true });
        cy.get('.gh-nav-search-modal .ember-power-select-search input').first().type(tagName, { force: true });
        cy.wait(2000);
        cy.get('body').then((body) => {
            if (body.find('li.ember-power-select-group').length > 0) {
                cy.log('se encuentra el elemento')
                cy.get('.ember-power-select-options ul li').first().click();
            } else {
                cy.log('No se encontró el tag buscado');
                cy.get('li.ember-power-select-group').should('not.exist');
            }
        })
    }


    /* verifyTagCreated(tagName: string) {
        let element = 'h3.gh-tag-list-name';
            if (cy.get(element).should('not.exist')) {
                return cy.log('No se encontró el tag creado')
            } else {
                cy.get(element).each(($h3) => {
                    if ($h3.length > 0) {
                        if ($h3[0].innerText === tagName) {
                            return cy.log('El tag creado se encontró');
                        }
                    } /* else {
                        return false;
                    } */
    /*})
    }; */

    verifyTagCreated(tagName: string) {
        cy.get('section.content-list h3')
            .each(($h3) => {
                if ($h3.length > 0) {
                    if ($h3[0].innerText === tagName) {
                        expect($h3[0].innerText).to.equal(tagName);
                        return cy.log('++++++++++++')
                    }
                } else {
                    return cy.log('----------');
                }
            });
    };

    metadataExpand() {
        cy.get('main')
            .scrollTo('bottom')
        cy.get(':nth-child(1) > .flex > :nth-child(2) > .gh-btn > span')
            .click({ force: true });
    }

    metadataInputTitle(title: string) {
        return cy.get('#meta-title')
            .type(title);
    }

    metadataInputDescription(description: string) {
        return cy.get('#meta-description')
            .type(description);
    }

    metadataInputCanonicalUrl(canonicalUrl: any) {
        return cy.get('#canonical-url')
            .type(canonicalUrl);
    }

    twitterExpand() {
        cy.get('main')
            .scrollTo('bottom');
        cy.get(':nth-child(2) > .flex > :nth-child(2) > .gh-btn > span')
            .click({ force: true });
    }

    twitterInputTitle(title: string) {
        return cy.get('#twitter-title')
            .type(title);
    }

    twitterInputDescription(description: string) {
        return cy.get('')
            .type(description);
    }

};


/* selectTagCreated(tagName: string) {
    cy.get('.content-list h3')
        .each(($h3) => {
            if ($h3.length > 0) {
                if ($h3[0].innerText === tagName) {
                    $h3.click();
                }
            }
        });
};

deleteTagButton() {
    cy.get('.gh-btn.gh-btn-red.gh-btn-icon.mb15')
        .first().click();
};

async deleteTagButtonConfirm() {
    cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view')
        .first().click();
};

verifyDeletedTag(tagName: string) {
    cy.wait(2000);
    let count = 0;
    cy.get('.content-list h3')
        .each(($h3) => {
            if ($h3.length > 0) {
                if ($h3[0].innerText === tagName) {
                    count++;
                }
            }
        });
    expect(count).to.equal(0);
    cy.wait(2000);
};

} */