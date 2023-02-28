const inputTextEl = document.querySelector('#validation-input');

inputTextEl.addEventListener("blur", (event) => {
    inputTextEl.textContent = event.target.value.trim();

    const valid = inputTextEl.textContent.length === 6;

    inputTextEl.classList.toggle('valid', valid);
    inputTextEl.classList.toggle('invalid', !valid);
});
