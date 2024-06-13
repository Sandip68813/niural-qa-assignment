import gettingStartedPageObjects from "../PageObjects/gettingStartedPageObjects"

const clickNoButton = () => {
    cy.get(gettingStartedPageObjects.aboutBusiness.no).should('be.visible').and('have.text', "No").click();
}

const uploadCertificateOfIncorporation = (filePath) => {
    cy.get(gettingStartedPageObjects.companyInformation.uploadFile).eq(0).selectFile(filePath, {force: true});
}

const uploadTaxId = (filePath) => {
    cy.get(gettingStartedPageObjects.companyInformation.uploadFile).selectFile(filePath, {force: true});
}

const clickNextButton = () => {
    cy.get(gettingStartedPageObjects.companyInformation.nextButton).scrollIntoView().click();
}

const uploadDocuments = (filepath1, filepath2) => {
    uploadCertificateOfIncorporation(filepath1);
    cy.wait(5000);
    uploadTaxId(filepath2);
    cy.wait(5000);
    cy.get(gettingStartedPageObjects.companyInformation.nextButton).scrollIntoView().should('have.text', "Next").click();
}

const fillPersonalInformation = () => {
    cy.get(gettingStartedPageObjects.personalInformation.jotTitle).type("CEO" + "{enter}");
    cy.get(gettingStartedPageObjects.personalInformation.occupation).type("Doctor" + "{enter}");
    cy.get(gettingStartedPageObjects.personalInformation.annualIncome).type("Over" + "{enter}");
    cy.get(gettingStartedPageObjects.personalInformation.sourceOfIncome).type("Government" + "{enter}");
    cy.get(gettingStartedPageObjects.personalInformation.male).click();
    cy.get(gettingStartedPageObjects.personalInformation.dateOfBirth).type("01-01-2001");
    cy.get(gettingStartedPageObjects.personalInformation.dateOfBirth).click();
    cy.get(gettingStartedPageObjects.personalInformation.country).type("United States" + "{enter}");
    cy.get(gettingStartedPageObjects.personalInformation.addressLine1).type("Add 1");
    cy.get(gettingStartedPageObjects.personalInformation.city).type("Kawaski");
    cy.wait(1000);
    cy.get(gettingStartedPageObjects.personalInformation.state).type("alaska" + "{enter}");
    cy.wait(1000);
    cy.get(gettingStartedPageObjects.personalInformation.zipCode).type("12345");
    cy.get(gettingStartedPageObjects.personalInformation.ssn).type("123456789");
    cy.get(gettingStartedPageObjects.personalInformation.checkbox).check();
}

const verifyOTP = (otp) => {
    cy.get(gettingStartedPageObjects.verifyPhoneNumber.otpField).should('be.visible').type(otp);
}

const verifyPhoneNumber = (otp) => {
    cy.get(gettingStartedPageObjects.verifyPhoneNumber.popup).should('be.visible').then(() => {
        cy.get(gettingStartedPageObjects.verifyPhoneNumber.sendCode).should('be.visible').and('have.text', "Send Code").click();
        verifyOTP(otp);
        cy.get(gettingStartedPageObjects.verifyPhoneNumber.verify).should('be.visible').and('have.text', "Verify").click();
    })
}

const loadAndClickNext = (wait) => {
    cy.wait(wait).then(()=> {
        clickNextButton();
    });
}

const reviewAndSubmit = (wait) => {
    cy.wait(wait).then(() => {
        cy.get(gettingStartedPageObjects.reviewSubmit.termsCheckbox).scrollIntoView().check();
        cy.get(gettingStartedPageObjects.reviewSubmit.submit).scrollIntoView().should("be.visible").click();
    })
}

const gettingStartedPage = {
    clickNoButton,
    uploadCertificateOfIncorporation,
    uploadTaxId,
    uploadDocuments,
    fillPersonalInformation,
    verifyPhoneNumber,
    clickNextButton,
    loadAndClickNext,
    reviewAndSubmit
}

export default gettingStartedPage;