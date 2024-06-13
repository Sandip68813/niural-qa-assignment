const aboutBusiness = {
    yes: "[data-cy='button-yes']",
    no: "[data-cy='button-no']"
}

const companyInformation = {
    uploadFile: "input[data-cy='upload-w9']",
    nextButton: "[data-cy='button-next']"
}

const personalInformation = {
    jotTitle: "#dropdown-job-title",
    occupation: "#dropdown-occupation",
    annualIncome: "#dropdown-annual-income",
    sourceOfIncome: "#dropdown-source-of-income",
    male: "[data-cy='radio-gender-male']",
    female: "[data-cy='radio-gender-female']",
    dateOfBirth: "#input-date",
    country: "#input-country",
    addressLine1: "[data-cy='input-addressLine1']",
    addressLine2: "[data-cy='input-addressLine2']",
    city: "[data-cy='input-city']",
    state: "#input-state",
    zipCode: "[data-cy='input-zip-code']",
    ssn: "[data-cy='input-ssn']",
    checkbox: "[data-cy='checkbox-isBeneficialOwner']"
}

const verifyPhoneNumber = {
    popup: "div.light",
    sendCode: "button[type='submit']",
    otpField: "input[aria-label='Please enter verification code. Digit 1']",
    verify: "div.space-y-6 button[type='button']"
}

const reviewSubmit = {
    termsCheckbox: "[data-cy='checkbox-acceptTermsAndConditions']",
    submit: "[data-cy='button-submit']"
}

const gettingStartedPageObjects = {
    aboutBusiness,
    companyInformation,
    personalInformation,
    verifyPhoneNumber,
    reviewSubmit
}

export default gettingStartedPageObjects