const textInpuy = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');


textInpuy.addEventListener('input', (evn) => {
    userName.textContent = evn.currentTarget.value;  
    if(textInpuy.value.length === 0) {
        userName.textContent = 'Anonymous'
    }
});

