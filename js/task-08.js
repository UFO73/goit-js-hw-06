const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmit)
 

function onSubmit(evt) {
    evt.preventDefault();
    const elementIntut =  evt.currentTarget.elements;
    
    if (elementIntut[0].value.length === 0 || elementIntut[1].value.length === 0){
        window.alert("Поля повинні бути заповнені!");
    }else{
        const { email, password } = evt.currentTarget.elements;
        const data = {
            email: email.value,
            password: password.value,
        };
        
        console.log(data);
    }
};


