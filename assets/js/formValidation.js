// variables for the form, the input elements, and the submit button
const form = document.querySelector("form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone-number");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const submitButton = document.querySelector("#submit-button");

const inputElements = [firstName, lastName, email, phoneNumber, password, confirmPassword];

// adding events

// when the form is submitted, the whole form should be valiadated
form.addEventListener("submit", (evt) => {
  inputElements.forEach(elem => {
    if(!elem.validity.valid) {
      evt.preventDefault();
    }
  });
});

// checking if the names are left blank
firstName.addEventListener("focusout", (evt) => {
  const firstNameError = document.querySelector("#first-name + span.error");
  if(firstName.validity.valueMissing) {
    firstNameError.textContent = "You need to fill out your first name.";
  } else {
    firstNameError.textContent = "";
  }
});

lastName.addEventListener("focusout", (evt) => {
  const lastNameError = document.querySelector("#last-name + span.error");
  if(lastName.validity.valueMissing) {
    lastNameError.textContent = "You need to fill out your last name.";
  } else {
    lastNameError.textContent = "";
  }
});

email.addEventListener("focusout", (evt) => {
  const emailError = document.querySelector("#email + span.error");
  if(email.validity.valueMissing) {
    emailError.textContent = "You need to fill out your email address.";
  } else if(email.validity.typeMismatch) {
    emailError.textContent = "The email you entered is in a wrong format.";
  } else {
    emailError.textContent = "";
  }
});

phoneNumber.addEventListener("input", (evt) => {
  const phoneNumberError = document.querySelector("#phone-number + span.error");
  if(phoneNumber.validity.patternMismatch) {
    phoneNumberError.textContent = "You need to enter the number in a correct format.";
  } else {
    phoneNumberError.textContent = "";
  }
});

password.addEventListener("input", (evt) => {
  // checks for min-max length
  if(!(password.validity.tooShort || password.validity.tooLong)) {
    const errorText = document.querySelector(".error #char-length");
    errorText.style.color = "#596D48";
    errorText.textContent = "\u2705 Min 8 max 16 characters";
  }

  // need to consider else for when the character is deleted and it does not qualify again
  // is backspace considered an "input" event?

  // checks for uppercase
  const uppercase = new RegExp("[A-Z]");
  if(uppercase.test(password.value)) {
    const errorText = document.querySelector(".error #uppercase");
    errorText.style.color = "#596D48";
    errorText.textContent = "\u2705 At least one uppercase";
  }

  // checks for a number
  const number = new RegExp("[0-9]");
  if(number.test(password.value)) {
    const errorText = document.querySelector(".error #number");
    errorText.style.color = "#596D48";
    errorText.textContent = "\u2705 At least one number";
  }

  // checks for a special character
  const specialCharacter = new RegExp("[^a-zA-Z0-9]");
  if(specialCharacter.test(password.value)) {
    const errorText = document.querySelector(".error #special-char");
    errorText.style.color = "#596D48";
    errorText.textContent = "\u2705 At least one special character";
  }

});