// show error message
function errorMessage(message) {
  const msg = document.querySelector('#error-message');
  msg.innerText = message;
}

// validateEmain
function validateEmail(input, invalidMsg) {
  // validate email format
  const emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return errorMessage(invalidMsg);
  }
  return true;
}

const form = document.querySelector('#contact-form');

const INVALID_EMAIL = 'Please enter a email address in lowercase only';

form.addEventListener('submit', (event) => {
  // stop form submission
  event.preventDefault();

  // validate the form

  const emailValid = validateEmail(form.elements.email, INVALID_EMAIL);
  // if valid, submit the form.
  if (emailValid) {
    form.submit();
  }
});
