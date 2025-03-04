// variables for the form, the input elements, and the submit button
const form = document.querySelector("form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone-number");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const submitButton = document.querySelector("#submit-button");

// elements for where error messages go
const charLengthErrorText = document.querySelector(".error #char-length");
const uppercaseErrorText = document.querySelector(".error #uppercase");
const numberErrorText = document.querySelector(".error #number");
const specialCharErrorText = document.querySelector(".error #special-char");

// regex to check validity for password
const uppercaseRegex = /[A-Z]/;
const numberRegex = /[0-9]/;
const specialCharRegex = /[^a-zA-Z0-9]/;

// function that updates error messages for password validity
function updateError(element, isValid, message) {
  element.style.color = isValid ? "#596D48" : "red";
  element.textContent = (isValid ? "\u2705 " : "\u274C ") + message;
}

const inputElements = [
  firstName,
  lastName,
  email,
  phoneNumber,
  password,
  confirmPassword,
];

// adding events

// when the form is submitted, the whole form should be validated
form.addEventListener("submit", (evt) => {
  inputElements.forEach((elem) => {
    if (!elem.validity.valid) {
      evt.preventDefault();
    }
  });
});

// checking if the names are left blank
firstName.addEventListener("focusout", (evt) => {
  const firstNameError = document.querySelector("#first-name + span.error");
  if (firstName.validity.valueMissing) {
    firstNameError.textContent = "You need to fill out your first name.";
  } else {
    firstNameError.textContent = "";
  }
});

lastName.addEventListener("focusout", (evt) => {
  const lastNameError = document.querySelector("#last-name + span.error");
  if (lastName.validity.valueMissing) {
    lastNameError.textContent = "You need to fill out your last name.";
  } else {
    lastNameError.textContent = "";
  }
});

email.addEventListener("focusout", (evt) => {
  const emailError = document.querySelector("#email + span.error");
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to fill out your email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "The email you entered is in a wrong format.";
  } else {
    emailError.textContent = "";
  }
});

phoneNumber.addEventListener("input", (evt) => {
  const phoneNumberError = document.querySelector("#phone-number + span.error");
  if (phoneNumber.validity.patternMismatch) {
    phoneNumberError.textContent =
      "You need to enter the number in a correct format.";
  } else {
    phoneNumberError.textContent = "";
  }
});

// password.addEventListener("input", (evt) => {
//   const charLengthErrorText = document.querySelector(".error #char-length");
//   const uppercaseErrorText = document.querySelector(".error #uppercase");
//   const numberErrorText = document.querySelector(".error #number");
//   const specialCharErrorText = document.querySelector(".error #special-char");

//   // checks for min-max length, including the case when the password is empty
//   if (password.validity.valueMissing) {
//     charLengthErrorText.style.color = "red";
//     charLengthErrorText.textContent = "\u274C Min 8 max 16 characters";
//   } else if (!(password.validity.tooShort || password.validity.tooLong)) {
//     charLengthErrorText.style.color = "#596D48";
//     charLengthErrorText.textContent = "\u2705 Min 8 max 16 characters";
//   } else {
//     charLengthErrorText.style.color = "red";
//     charLengthErrorText.textContent = "\u274C Min 8 max 16 characters";
//   }

//   // checks for uppercase
//   const uppercase = new RegExp("[A-Z]");
//   if (uppercase.test(password.value)) {
//     uppercaseErrorText.style.color = "#596D48";
//     uppercaseErrorText.textContent = "\u2705 At least one uppercase";
//   } else {
//     uppercaseErrorText.style.color = "red";
//     uppercaseErrorText.textContent = "\u274C At least one uppercase";
//   }

//   // checks for a number
//   const number = new RegExp("[0-9]");
//   if (number.test(password.value)) {
//     numberErrorText.style.color = "#596D48";
//     numberErrorText.textContent = "\u2705 At least one number";
//   } else {
//     numberErrorText.style.color = "red";
//     numberErrorText.textContent = "\u274C At least one number";
//   }

//   // checks for a special character
//   const specialCharacter = new RegExp("[^a-zA-Z0-9]");
//   if (specialCharacter.test(password.value)) {
//     specialCharErrorText.style.color = "#596D48";
//     specialCharErrorText.textContent = "\u2705 At least one special character";
//   } else {
//     specialCharErrorText.style.color = "red";
//     specialCharErrorText.textContent = "\u274C At least one special character";
//   }
// });

password.addEventListener("input", () => {
  // check for min-max length
  if (password.validity.valueMissing) {
    updateError(charLengthErrorText, false, "Min 8 max 16 characters");
  } else {
    updateError(
      charLengthErrorText,
      !(password.validity.tooShort || password.validity.tooLong),
      "Min 8 max 16 characters"
    );
  }

  // check for uppercase character
  updateError(
    uppercaseErrorText,
    uppercaseRegex.test(password.value),
    "At least one uppercase"
  );

  // check for number
  updateError(
    numberErrorText,
    numberRegex.test(password.value),
    "At least one number"
  );

  // check for special character
  updateError(
    specialCharErrorText,
    specialCharRegex.test(password.value),
    "At least one special character"
  );
});
