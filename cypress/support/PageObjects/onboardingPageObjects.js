const welcomeScreen = {
    welcomeText: "h1.text-primary-subtle",
    letsStartButton: "[data-cy='button-next']"
}

const featureAccessScreen = {
    fullAccessOption: "[data-cy='full-access-option']",
    niuralBillOption: "[data-cy='niural-bill-pay-option']"
}

const companyDetails = {
    countryOfRegistration: "#dropdown-country-of-registration",
    einTax: "[data-cy='input-ein']",
    registrationDate: "div.react-datepicker-wrapper",
    businessEntityType: "#dropdown-business-entity-type",
    natureOfBusiness: "#dropdown-nature-of-business"
}

const addAddress = {
    addressLine1: "[data-cy='input-registeredAddress-address1']",
    addressLine2: "[data-cy='input-registeredAddress-address2']",
    city: "[data-cy='input-registeredAddress-city']",
    state: "#dropdown-state",
    zipCode: "[data-cy='input-registeredAddress-zipCode']",

}

const onboardingPageObjects = {
    welcomeScreen,
    featureAccessScreen,
    companyDetails,
    addAddress
}

export default onboardingPageObjects;