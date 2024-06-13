/// <reference types="cypress" />

import niuralParntersPabjeObjects from "../PageObjects/niuralPartnersPageObjects"

const login = (email, password, button) => {
    cy.get(niuralParntersPabjeObjects.loginForm.email).type(email);
    cy.get(niuralParntersPabjeObjects.loginForm.password).type(password);
    cy.get(niuralParntersPabjeObjects.loginForm.submitButton).should('be.visible').and('have.text', button).click();
}

const clickSignUpButton = (buttonText) => {
    cy.get(niuralParntersPabjeObjects.pageObjects.signUpButton).should('be.visible').and('have.text', buttonText).click();
}

const niuralPartnersPage = {
    clickSignUpButton,
    login
}

export default niuralPartnersPage;