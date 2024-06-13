/// <reference types="cypress" />

import clientPage from "../../support/Pages/ clientPage";
import addNewClientPage from "../../support/Pages/addNewClientPage";
import commonPage from "../../support/Pages/commonPage";
import dashboardPage from "../../support/Pages/dashboardPage";
import gettingStartedPage from "../../support/Pages/gettingStartedPage";
import homePage from "../../support/Pages/homePage";
import niuralPartnersPage from "../../support/Pages/niuralPartnersPage";
import onboardingPage from "../../support/Pages/onboardingPage";
import signUpPage from "../../support/Pages/signUpPage";
import { getLastEmail } from "../../support/mailosaurHelpers";

let newEmail= "varavij877@kernuo.com";
let email = "testing123333333333333@gmail.com";
let website = "kkkkkkkkkkkkkernuo.cooom";

describe("Sign up Functionality", () => {

    beforeEach(() => {
        cy.intercept("GET", "**/qa/payrolls?employeeType=EMPLOYEE").as("getQaPayroll");
        cy.intercept("GET", "**/business-representatives?show_tax_id=true&is_beneficial_owner=true").as("loadBeneficialOwner");
        cy.intercept("GET", "**/qa/profile?show_tax_id=true&is_kyb_details=true").as("loadReviewAndSubmitDocs");
        cy.intercept("GET", "**/payrolls?employeeType=EMPLOYEE").as("loadGetStartedPage");
    })

    it("Sign up as Niural Partner", () => {
        cy.visit(Cypress.env('url'));
        homePage.clickAccountant();
        niuralPartnersPage.clickSignUpButton("Sign Up");
        signUpPage.fillStepOneForm(newEmail);
        signUpPage.clickNextButton("Next");

        // getLastEmail(newEmail).then((email) => {
        //     cy.log(email.html.body);
        // });
    })

    it.only("Add new client", () => {
        cy.visit(Cypress.env('url'));
        homePage.clickAccountant();
        niuralPartnersPage.login("vihopi7564@kernuo.com", "Testing@123", "Login");
        cy.url().should('include', '/dashboard');

        dashboardPage.clickAddClient();
        addNewClientPage.clickAddClient('Add Client');
        addNewClientPage.fillBasicDetails(email, website);
        cy.url().should('include', '/clients');
        clientPage.verifyAndGetData(email);
        cy.wait(10000);
        onboardingPage.clickLetsStartButton();
        onboardingPage.clickFullAccessOption();
        onboardingPage.fillCompanyDetails("United States", "Limited liability company (LLC)");
        onboardingPage.addAddress();

        dashboardPage.clickVerifyBusinessIdentity();

        gettingStartedPage.clickNoButton();

        gettingStartedPage.uploadDocuments("cypress/fixtures/pdf-test1.pdf", "cypress/fixtures/pdf-test2.pdf");

        gettingStartedPage.fillPersonalInformation();

        gettingStartedPage.clickNextButton();

        gettingStartedPage.verifyPhoneNumber("123456");
        
        gettingStartedPage.loadAndClickNext("@loadBeneficialOwner");

        gettingStartedPage.reviewAndSubmit("@loadReviewAndSubmitDocs");

        commonPage.clickSideMenu("Home", "@loadGetStartedPage");
    })
})