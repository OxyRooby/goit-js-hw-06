const inputNameEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

inputNameEl.addEventListener('input', (event) => {
    outputNameEl.textContent = event.target.value.trim();

    if (outputNameEl.textContent.length === 0) {
        outputNameEl.textContent = "Anonymous";
    };
});