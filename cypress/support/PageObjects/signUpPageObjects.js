const signUpStepOne = {
    form: "form",
    firstName: "[data-cy='input-first-name']",
    middleName: "[data-cy='input-middle-name']",
    lastName: "[data-cy='input-last-name']",
    email: "[data-cy='input-email']",
    firmName: "[data-cy='input-company-name']",
    firmWebsite: "[data-cy='input-company-website']",
    dropdown: "#select-business-clients-number",
    password: "[data-cy='input-password']",
    confirmPassword: "[data-cy='input-confirm-password']",
    countryCode: "",
    phoneNumber: "[data-cy='input-phone-number']",
    nextButton: "[data-cy='button-next']"
}

const signUpPageObjects = {
    signUpStepOne
}

export default signUpPageObjects;