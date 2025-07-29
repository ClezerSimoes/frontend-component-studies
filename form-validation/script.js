const form = document.querySelector("#form");
const userName = document.querySelector("#user-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password-2");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("sucess");
    
};

const setSucess = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = '';
    inputControl.classList.add("sucess");
    inputControl.classList.remove("error");
    
};

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validateInputs = () => {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (userNameValue === "") {
        setError(userName, "User name is required");
    } else {
        setSucess(userName);
    };

    if (emailValue === "") {
        setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address");
    } else {
        setSucess(email);
    };

    if (passwordValue === "") {
        setError(password, "Password is required");
    } else if (passwordValue.length < 8 ){
        setError(password, "Password must be at least 8 character");
    } else {
        setSucess(password)
    };

    if (password2Value === "") {
        setError(password2, "Please confirm your password");
    } else if (password2Value !== passwordValue){
        setError(password2, "Password doesn't match");
    } else {
        setSucess(password2);
    };
};