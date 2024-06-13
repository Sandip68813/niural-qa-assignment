const billingOption = {
    addClient: "[data-cy='button-add-client-billing-option']"
}

const basicDetails = {
    companyName: "[data-cy='input-company-name']",
    dbaName: "[data-cy='input-DBAName']",
    currentW2Employee: "[data-cy='input-number-of-w2-employee']",
    currentContractors: "[data-cy='input-number-of-current-contract']",
    firstName: "[data-cy='input-first-name']",
    middleName: "[data-cy='input-middle-name']",
    lastName: "[data-cy='input-last-name']",
    email: "[data-cy='input-email']",
    companyWebsite: "[data-cy='input-company-website']",
    dropdown: "#select-company-number-members",
    phoneNumber: "[data-cy='input-phone-number']",
    nextButton: "[data-cy='button-next']"

}

const addNewClientPageObjects ={
    billingOption,
    basicDetails
}

export default addNewClientPageObjects;