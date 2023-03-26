const textInput = document.querySelector('#validation-input');



textInput.addEventListener('blur', () => {
    if(textInput.value.length === Number.parseInt) {
        textInput.classList.add('valid')
    } 
});

