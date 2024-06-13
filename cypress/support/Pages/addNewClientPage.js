import addNewClientPageObjects from "../PageObjects/addNewClientPageObjects"

const clickAddClient = (button) => {
    cy.get(addNewClientPageObjects.billingOption.addClient).should('be.visible').and('have.text', button).click();
}

const fillBasicDetails = (email, website) => {
    cy.get(addNewClientPageObjects.basicDetails.companyName).type("My Company");
    cy.get(addNewClientPageObjects.basicDetails.dbaName).type("Just Testing");
    cy.get(addNewClientPageObjects.basicDetails.currentW2Employee).type(1000);
    cy.get(addNewClientPageObjects.basicDetails.currentContractors).type(10);
    cy.get(addNewClientPageObjects.basicDetails.firstName).type("Ram");
    cy.get(addNewClientPageObjects.basicDetails.middleName).type("Bahadur");
    cy.get(addNewClientPageObjects.basicDetails.lastName).type("Adhikari");
    cy.get(addNewClientPageObjects.basicDetails.email).type(email);
    cy.get(addNewClientPageObjects.basicDetails.companyWebsite).type(website);
    cy.get(addNewClientPageObjects.basicDetails.dropdown).click().type("Less{enter}");
    cy.get(addNewClientPageObjects.basicDetails.phoneNumber).type("9876543211");
    cy.get(addNewClientPageObjects.basicDetails.nextButton).click();
}

const addNewClientPage = {
    clickAddClient,
    fillBasicDetails
}

export default addNewClientPage;