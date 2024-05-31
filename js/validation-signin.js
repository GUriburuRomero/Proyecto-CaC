const formRegister = document.querySelector("#formSign");

const clearValidations = () => {
    document.querySelector("#email").classList.remove('error');
    document.querySelector("#password").classList.remove('error');
    document.querySelector("#error-email").textContent='';
    document.querySelector("#error-password").textContent='';
    
}
const validarFormulario = (event) => {
    event.preventDefault();
    clearValidations();

    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    let validation = true;
    if(!email.value.trim()){
        document.querySelector("#error-email").textContent='¡Introduzca un email!';
        email.classList.add('error')
        validation=false;
    }
    if(!password.value.trim()){
        document.querySelector("#error-password").textContent='¡Introduzca una contraseña!';
        password.classList.add('error')
        validation=false;
    }else if(password.value.length < 6 || password.value.length > 12){
        document.querySelector("#error-password").textContent ='La contraseña debe contener entre 6 y 12 caracteres';
        password.classList.add('error')
        validation=false;
    }

    if(validation){
        formRegister.submit()
    }else{
        return false;
    }
}


formRegister.addEventListener('submit',validarFormulario);