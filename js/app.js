/*validacion del formulario*/
var boton = document.getElementById("boton");
boton.addEventListener('click', validar);

 function validar() {
 	var name = document.getElementById("name");
 	var email = document.getElementById("email");
 	var phoneNumber = document.getElementById("phone");
 	var message = document.getElementById("textarea");
 	var contenido = "";
<<<<<<< HEAD

=======
  
>>>>>>> 79d2ddca9a2c2e3874fc8ce58e911f6408436e6a
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

/*modal*/
(function main(){
	var boxes = Array.from(document.getElementsByClassName("box-services"));
	var modal = document.getElementById("box-services-modal");
	var bodyModal, close, img;
	boxes.forEach(function(box){
		box.addEventListener("click", function(){
			modal.innerHTML = "";
			bodyModal = document.createElement("div");
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = box.innerHTML;			
			modal.appendChild(bodyModal);
			modal.classList.remove("hide");
			close = document.createElement("div");
			close.classList.add("close");
			img = document.createElement("img");
			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
			close.appendChild(img);
			modal.appendChild(close);
			close.addEventListener("click",function(){
				modal.classList.add("hide");
			});
		});		
	});
})();