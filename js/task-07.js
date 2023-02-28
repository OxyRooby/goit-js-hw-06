const inputFontSizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputFontSizeEl.addEventListener("input", (event) => {
    textEl.style.fontSize = event.target.value + 'px';
});
