import './styles.css'
import ValidityStyling from './functions/validitystyling'

const email = document.getElementById("email");
email.addEventListener('input', () => {
    ValidityStyling.highlightInvalidInput(email);
})

window.addEventListener("load", () => {
    // Here, we test if the field is empty (remember, the field is not required)
    // If it is not, we check if its content is a well-formed e-mail address.
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    email.className = isValid ? "valid" : "invalid";
});

const form = document.getElementById("contentform");
form.addEventListener('submit', (event) => {
    ValidityStyling.validatePassword();
    event.preventDefault();
})

const firstname = document.getElementById("firstname");
firstname.addEventListener('input', () => {
    ValidityStyling.highlightInvalidInput(firstname);
})

const lastname = document.getElementById("lastname");
lastname.addEventListener('input', () => {
    ValidityStyling.highlightInvalidInput(lastname);
})


const phonenumber = document.getElementById("phonenumber");
phonenumber.addEventListener('input', () => {
    ValidityStyling.highlightInvalidInput(phonenumber);
    phonenumber = ValidityStyling.phoneFormat(phonenumber)
})



const passwordfield = document.getElementById("password");
const passwordconfirm = document.getElementById("passwordconfirm");
passwordfield.onchange = ValidityStyling.validatePassword;
passwordconfirm.onkeyup = ValidityStyling.validatePassword;

passwordfield.addEventListener('input', () => {
    ValidityStyling.highlightInvalidInput(passwordfield);
})
passwordconfirm.addEventListener('input', () => {
    ValidityStyling.highlightInvalidInput(passwordconfirm);
})
