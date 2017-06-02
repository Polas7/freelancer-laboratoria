/*validacion del formulario*/
var boton = document.getElementById("boton");
boton.addEventListener('click', validar);

 function validar() {
 	var name = document.getElementById("name");
 	var email = document.getElementById("email");
 	var phoneNumber = document.getElementById("phone");
 	var message = document.getElementById("textarea");
 	var contenido = "";
  
    if (name.value === "") {
    	name.value = "● Please enter your name.";
    }
    if (email.value === "") {
    	email.value = "● Please enter your email.";
    }
    if (phone.value === "") {
    	phone.value = "● Please enter your phone number.";
    }
    if (mensaje.value === "") {
    	mensaje.value = "● Please enter your message.";
    }
};
