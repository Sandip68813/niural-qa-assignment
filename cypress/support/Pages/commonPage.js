/// <reference types='cypress' />

import commonPageObjects from "../PageObjects/commonPageObjects"

const clickSideMenu = (menu) => {
    cy.get(commonPageObjects.leftSideBar.sideMenu).each(($el, index) => {
        cy.wrap($el).invoke('text').then((text) => {
            if(text === menu){
                cy.wrap($el).click();
            }
        })
    });
}

const commonPage = {
    clickSideMenu
}

export default commonPage;