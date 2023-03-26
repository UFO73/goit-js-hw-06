const textInpuy = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

console.dir(userName)

textInpuy.addEventListener('input', (evn) => {
    if(userName.textContent === "") {
        userName.textContent = 'Anonymous'
    }
    userName.textContent = evn.currentTarget.value;  
});

