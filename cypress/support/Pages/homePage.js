/// <reference types='cypress' />

import homePageObjects from "../PageObjects/homePageObjects"

const clickAccountant = () => {
    cy.get(homePageObjects.signInDiv.div).should("be.visible").within(() => {
        cy.get(homePageObjects.signInDiv.accountant).scrollIntoView().should("be.visible").within(()=>{
            cy.get(homePageObjects.signInDiv.roleName).should("be.visible").and('have.text', 'Niural Partners').click();
        })
    })
}

const homePage = {
    clickAccountant
}

export default homePage;