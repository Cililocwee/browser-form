const ValidityStyling = (() => {
    function determinedInvalid(element) {
        element.classList.add('invalidinput');
        element.classList.remove('validatedinput');
    }
    function determinedValid(element) {
        element.classList.add('validatedinput');
        element.classList.remove('invalidinput');
    }

    function highlightInvalidInput(inputfield) {
        if (inputfield.type === "text") {
            if (inputfield.value.length < 2) {
                determinedInvalid(inputfield);
            } else {
                determinedValid(inputfield);
            }
        }
        if (inputfield.type === "email") {
            const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (inputfield.value.match(format)) {
                determinedValid(inputfield);
            } else {
                determinedInvalid(inputfield);
            }
        }
        if (inputfield.type === "phonenumber") {
            const format = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
            if (inputfield.value.match(format)) {
                determinedValid(inputfield);
            } else {
                determinedInvalid(inputfield);
            }
        }
        if (inputfield.type === "password") {
            const format = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
            if (inputfield.value.match(format)) {
                determinedValid(inputfield);
            } else {
                determinedInvalid(inputfield);
            }
        }
    }

    function validatePassword() {
        const password = document.getElementById("password");
        const passwordconfirm = document.getElementById("passwordconfirm");
        const confirmspan = document.getElementById("confirmspan");
        if(password.value != passwordconfirm.value) {
            confirmspan.innerHTML = "Passwords don't match";
            determinedInvalid(passwordconfirm);
          } else {
            confirmspan.innerHTML = "";
            determinedValid(passwordconfirm);
          }

    }

    // to format phone numbers correctly
    function phoneFormat(input) {//returns (###) ###-####
        input = input.replace(/\D/g, '');
        var size = input.length;
        if (size > 0) { input = "(" + input }
        if (size > 3) { input = input.slice(0, 4) + ") " + input.slice(4, 11) }
        if (size > 6) { input = input.slice(0, 9) + "-" + input.slice(9) }
        return input;
    }

    return { highlightInvalidInput, validatePassword, phoneFormat }
})();

export default ValidityStyling;