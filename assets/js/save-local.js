// const submitButton = document.getElementById('getintouch_btn');
// submitButton.addEventListener('click', () => {
//   let enteredName = document.querySelector('.full_name').value;
//   let enteredEmail = document.getElementById('email').value;
//   let enteredMessage = document.getElementById('message').value;
//   let Data = {
//     Name: enteredName,
//     Email: enteredEmail,
//     Message: enteredMessage
//   }
//   console.log(Data.Name);
//   localStorage.setItem("Form Data", JSON.stringify(Data));

// }
// )

let fullName; let email; let message;

function saveForm(form) {
  const formString = JSON.stringify(form);
  window.localStorage.setItem('form', formString);
}

function getForm() {
  const formString = window.localStorage.getItem('form');
  return JSON.parse(formString);
}
function changeHandler() {
  /*
        get all values and store
        */
  const form = {};
  form.fullName = fullName.value;
  form.email = email.value;
  form.message = message.value;

  // now store
  saveForm(form);
}
function init() {
  // get the dom objects one time
  fullName = document.querySelector('#full-name');
  email = document.querySelector('#email');
  message = document.querySelector('#message');

  // listen for input on all
  const formElements = Array.from(document.querySelectorAll('#contact-form input, #contact-form textarea'));
  formElements.forEach((e) => e.addEventListener('input', changeHandler, false));
  const cached = getForm();
  if (cached) {
    fullName.value = cached.fullName;
    email.value = cached.email;
    message.value = cached.message;
  }
}
document.addEventListener('DOMContentLoaded', init, false);