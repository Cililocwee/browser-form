const ValidityStyling = (() => {
    function highlightInvalidInput(inputfield) {
        if (inputfield.type === "text") {
            if (inputfield.value.length < 2) {
                inputfield.style.border = "3px solid red"
            } else {
                inputfield.style.border = "2px solid green"
            }
        }
        if (inputfield.type === "email") {
            const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (inputfield.value.match(format)) {
                inputfield.style.border = "2px solid green"
            } else {
                inputfield.style.border = "3px solid red"
            }
        }
        if (inputfield.type === "phonenumber") {
            const format = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
            if (inputfield.value.match(format)) {
                inputfield.style.border = "2px solid green"
            } else {
                inputfield.style.border = "3px solid red"
            }
        }
        if (inputfield.type === "password") {
            const format = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
            if (inputfield.value.match(format)) {
                inputfield.style.border = "2px solid green"
            } else {
                inputfield.style.border = "3px solid red"
            }
        }
    }

    function validatePassword(passwordfield, passwordconfirm) {
        if (passwordfield.value != passwordconfirm.value) {
            passwordconfirm.setCustomValidity("Passwords don't match");
        } else {
            passwordconfirm.setCustomValidity('');
        }

    }

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