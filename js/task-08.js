const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmit)
 

function onSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    
    if (email.value.length === 0 || password.value.length === 0){
        window.alert("Поля повинні бути заповнені!");
    }else{
        const data = {
            email: email.value,
            password: password.value,
        };
        
        console.log(data);
        evt.currentTarget.reset();
    }

};


