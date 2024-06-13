import clientsPageObject from "../PageObjects/clientsPageObjects"

const verifyTableHeadData = () => {
    const columns = ["Client Name", "Contact Name", "Contact email"]
    cy.get(clientsPageObject.clientList.head).scrollIntoView().should('be.visible').within(() => {
        cy.get(clientsPageObject.clientList.headColumns).each(($el, index) => {
            cy.wrap($el).invoke('text').then((text) => {
                expect(text).to.be.eql(columns[index]);
            })
        })
    });
}

const getBodyData = (email) => {
    cy.get(clientsPageObject.clientList.body).should('be.visible').within(() => {
        let initialWindowCount;
        let status = true;
        cy.window().then(win => {
            initialWindowCount = win.parent.window.length - 1;
            cy.log("Before Click: ", initialWindowCount);
        })
        if(status === true){
        cy.get(clientsPageObject.clientList.bodyRow).each(($el) => {
            cy.wrap($el).within(() => {
                cy.get(clientsPageObject.clientList.rowData).eq(2).invoke('text').then((text)=> {
                    
                        if(text === email){
                            cy.window().then((win) => {
                                cy.stub(win, 'open').as('windowOpen');
                            })
    
                            cy.wrap($el).click();
    
                            cy.get('@windowOpen').should('be.called').then((stub) => {
                                const newTabUrl = stub.getCall(0).args[0];
                                cy.visit(newTabUrl);
                                cy.url().should('eq', newTabUrl);
                            })
                            status = false;
                        cy.log("Value of status: " + status);
                    }
                    cy.log("After invoking text, status: " + status);
                })
                cy.log("Inside within, status: " + status);
            })
            cy.log("Inside each, status: " + status);
        })
        }
        // cy.get(clientsPageObject.clientList.bodyRow).first().within(() => {
        //     cy.window().then((win) => {
        //         cy.stub(win, 'open').as('windowOpen');
        //     })

        //     cy.get(clientsPageObject.clientList.rowData).first().click();

        //     cy.get('@windowOpen').should('be.called').then((stub) => {
        //         const newTabUrl = stub.getCall(0).args[0];
        //         cy.visit(newTabUrl);
        //         cy.url().should('eq', newTabUrl);
        //     })
        // })
    })
}

const verifyAndGetData = (email) => {
    verifyTableHeadData();
    cy.wait(5000);
    getBodyData(email);
}

const clientPage = {
    verifyAndGetData,
    verifyTableHeadData,
    getBodyData
}

export default clientPage;