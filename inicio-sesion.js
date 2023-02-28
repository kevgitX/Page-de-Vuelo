const formcontenedor = document.getElementById('form_contenedor');
const inputs= document.querySelectorAll('#form_contenedor input');
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    usuario: false,
    password: false
}

const validarFormulario =(e)=>{
    
                 // name del elemento
    switch(e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
        break;
            // name
        case "password":
                        //expresiones                     //el id
            validarCampo(expresiones.password, e.target, 'contraseña');
        break;
}}
const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`group_${campo}`).classList.remove('form_group-incorrecto');
        document.getElementById(`group_${campo}`).classList.add('form_group-correcto');
        document.querySelector(`#group_${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#group_${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#group_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
        campos[campo] = true;

    } else
    {   document.getElementById(`group_${campo}`).classList.remove('form_group-correcto');
        document.getElementById(`group_${campo}`).classList.add('form_group-incorrecto');
        document.querySelector(`#group_${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#group_${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#group_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
        campos[campo] = true;
          
    }
};
inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
formcontenedor.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.usuario & campos.password){
      formcontenedor.reset();
    }
});
