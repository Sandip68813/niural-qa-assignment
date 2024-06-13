import onboardingPageObjects from "../PageObjects/onboardingPageObjects"

const clickLetsStartButton = () => {
    cy.get(onboardingPageObjects.welcomeScreen.welcomeText).should('be.visible').and('have.text', "Welcome to Niural");
    cy.get(onboardingPageObjects.welcomeScreen.letsStartButton).should('be.visible').click();
}

const clickFullAccessOption = () => {
    cy.get(onboardingPageObjects.featureAccessScreen.fullAccessOption).should('be.visible').click();
    cy.get(onboardingPageObjects.welcomeScreen.letsStartButton).should('be.visible').click();
}

const fillCompanyDetails = (country, businessType) => {
    cy.get(onboardingPageObjects.companyDetails.countryOfRegistration).type(country + "{enter}");
    cy.get(onboardingPageObjects.companyDetails.einTax).type("123456789");
    cy.get(onboardingPageObjects.companyDetails.registrationDate).type('06-08-2024' + "{enter}");
    cy.get(onboardingPageObjects.companyDetails.businessEntityType).type(businessType + "{enter}");
    cy.get(onboardingPageObjects.companyDetails.natureOfBusiness).type("Book Store" + "{enter}");
    cy.get(onboardingPageObjects.welcomeScreen.letsStartButton).should('be.visible').click();
}

const addAddress = () => {
    cy.get(onboardingPageObjects.addAddress.addressLine1).type("J pie tei");
    cy.get(onboardingPageObjects.addAddress.addressLine2).type("Nothing");
    cy.get(onboardingPageObjects.addAddress.city).type("Alabama");
    cy.wait(1000);
    cy.get(onboardingPageObjects.addAddress.state).type("Alaska" + "{enter}");
    cy.wait(1000);
    cy.get(onboardingPageObjects.addAddress.zipCode).type("44690");
    cy.get(onboardingPageObjects.welcomeScreen.letsStartButton).should('be.visible').click();

}

const onboardingPage ={
    clickLetsStartButton,
    clickFullAccessOption,
    fillCompanyDetails,
    addAddress
}

export default onboardingPage;