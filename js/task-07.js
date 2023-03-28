const fontSixeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

fontSixeControl.addEventListener("input", () => {
    textSpan.style.fontSize = fontSixeControl.value + 'px';
})

