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