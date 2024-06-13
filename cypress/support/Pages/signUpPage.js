import signUpPageObjects from "../PageObjects/signUpPageObjects"

const fillStepOneForm = (email) => {
    cy.get(signUpPageObjects.signUpStepOne.form).within(() => {
        cy.get(signUpPageObjects.signUpStepOne.firstName).type("Sandip");
        cy.get(signUpPageObjects.signUpStepOne.lastName).type("Adhikari");
        cy.get(signUpPageObjects.signUpStepOne.email).type(email);
        cy.get(signUpPageObjects.signUpStepOne.firmName).type("Testing Firm");
        cy.get(signUpPageObjects.signUpStepOne.firmWebsite).type("testingfirm.com");
        cy.get(signUpPageObjects.signUpStepOne.dropdown).click().type("1{enter}");
        cy.get(signUpPageObjects.signUpStepOne.password).type("Testing@123");
        cy.get(signUpPageObjects.signUpStepOne.confirmPassword).type("Testing@123");
        cy.get(signUpPageObjects.signUpStepOne.phoneNumber).type("9800000000");
    })
}

const clickNextButton = (buttonText) => {
    cy.get(signUpPageObjects.signUpStepOne.nextButton).should('be.visible').and('have.text', buttonText).click();
}

const signUpPage = {
    fillStepOneForm,
    clickNextButton
}

export default signUpPage;