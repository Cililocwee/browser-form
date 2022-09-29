import './styles.css'
import ValidityStyling from './functions/validitystyling'

// Name form validations
const firstname = document.getElementById("firstname");
firstname.addEventListener('input', () => {
    ValidityStyling.highlightInvalidInput(firstname);
})

const lastname = document.getElementById("lastname");
lastname.addEventListener('input', () => {
    ValidityStyling.highlightInvalidInput(lastname);
})

// email validation
const email = document.getElementById("email");
email.addEventListener('input', () => {
    ValidityStyling.highlightInvalidInput(email);
})

// Phone number validation
const phonenumber = document.getElementById("phonenumber");
phonenumber.addEventListener('input', () => {
    ValidityStyling.highlightInvalidInput(phonenumber);
    phonenumber = ValidityStyling.phoneFormat(phonenumber)
})

// zip validation
const zipcode = document.getElementById("zipcode");
zipcode.addEventListener('input', ()=>{
    if (zipcode.value.length != 5){
        zipcode.style.border = "3px solid red"
    } else {
        zipcode.style.border = "2px solid green"
    }
})

// password validations (First by content, then by matching)
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

// submission button overrides
const form = document.getElementById("contentform");
form.addEventListener('submit', (event) => {
    if (firstname.classList.contains('invalidinput')){
        event.preventDefault()
    } else if (lastname.classList.contains('invalidinput')){
        event.preventDefault()
    } else if (email.classList.contains('invalidinput')){
        event.preventDefault()
    } else if (phonenumber.classList.contains('invalidinput')){
        event.preventDefault()
    } else if (passwordfield.classList.contains('invalidinput')){
        event.preventDefault()
    } else if (passwordconfirm.classList.contains('invalidinput')){
        event.preventDefault()
    } else {
        alert("Successfully registered!")
    }
    
})