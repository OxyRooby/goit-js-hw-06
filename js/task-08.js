const formEl = document.querySelector(".login-form");

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const {
        elements: {email, password},
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        window.alert("Всі поля повинні бути заповнені!");
    }

    const inputValue = {
        email: `${email.value}`,
        password: `${password.value}`,
    };

    console.log(inputValue);

    formEl.reset();
});

