import dashboardPageObjects from "../PageObjects/dashboardPageObjects"

const clickAddClient = () => {
    cy.get(dashboardPageObjects.dashboardElements.addClient).should('be.visible').and('have.text', "Add client").click();
}

const clickVerifyBusinessIdentity = () => {
    cy.get(dashboardPageObjects.dashboardElements.verifyBusinessIdentity).should('be.visible').scrollIntoView().and('have.text', "Verify").click();
}

const clickHireButton = (text, wait) => {
    cy.wait(wait).then(() => {
        cy.get(dashboardPageObjects.dashboardElements.div).should("be.visible").within(() => {
            cy.get(dashboardPageObjects.dashboardElements.hire).should("be.visible").and('have.text', text).click();
        })
    })
}

const dashboardPage = {
    clickAddClient,
    clickVerifyBusinessIdentity,
    clickHireButton
}

export default dashboardPage;