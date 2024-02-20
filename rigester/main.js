const form = document.getElementById('form');
const username = document.getElementById('username');
const number = document.getElementById('number');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

username.onkeyup = function(){
    varidedUsername()
}

number.onkeyup = function(){
    varidednumber()
}

email.onkeyup = function(){
    varidedemail()
}

password.onkeyup = function(){
    varidedpassward()
}

password2.onkeyup = function(){
    varidedpassward2()
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const numberValue = number.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};

function varidedUsername(){
    const usernameValue = username.value.trim();
    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else if (usernameValue.length < 6 ) {
        setError(username, 'Username must be at least 8.')
    } else {
        setSuccess(username);
    }
}

function varidednumber(){
    const numberValue = number.value.trim();
    if(numberValue === '') {
        setError(number, 'number is required');
    } else if (numberValue.length < 10 ) {
        setError(number, 'number must be at least 8 number.')
    } else {
        setSuccess(number);
    }
}

function varidedemail(){
    const emailValue = email.value.trim();
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
}

function varidedpassward(){
    const passwordValue = password.value.trim();
    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 10 character.')
    } else {
        setSuccess(password);
    }
}

function varidedpassward2(){
    const password2Value = password2.value.trim();
    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
}