function modalWelcome(){
	document.getElementById("modalWelcome").style.display="block";
	document.getElementById("tituloWeb").style.animationPlayState="paused";
	document.getElementById("subtituloWeb").style.animationPlayState="paused";
	document.documentElement.style.overflow="hidden";
}
function closeModalWelcome(){
	document.getElementById("modalWelcome").style.display="none";
	document.getElementById("tituloWeb").style.animationPlayState="running";
	document.getElementById("subtituloWeb").style.animationPlayState="running";
	document.documentElement.style.overflow="auto";
}

function modalContacto(){
	document.getElementById("modalContacto").style.display="block";
	document.documentElement.style.overflow="hidden";
	
	var nombre = document.getElementById("formNombre").value;
	var apellido = document.getElementById("formApellido").value;
	var servicio = document.getElementById("formServicio").value;
	var correo = document.getElementById("formCorreo").value;
	
	
	
	
	var mensaje;
	
	function formCheck(){
		if(!document.getElementById("formNombre").checkValidity()){
			mensaje="Introduce un Nombre. ";
			document.getElementById("mensajeContacto").innerHTML=mensaje;
		}
		else if (!document.getElementById("formApellido").checkValidity()){
			mensaje="Introduce un Apellido. ";
			document.getElementById("mensajeContacto").innerHTML=mensaje;
		}
		else if (!document.getElementById("formServicio").checkValidity()){
			mensaje="Introduce el servicio que deseas:  ";
			document.getElementById("mensajeContacto").innerHTML=mensaje;
		}
		else if (!document.getElementById("formCorreo").checkValidity()){
			mensaje="Introduce un correo electónico:  ";
			document.getElementById("mensajeContacto").innerHTML=mensaje;
		}
	}
	
	mensaje="Hemos recicibo la solicitud" +nombre+ apellido + ", confirmaremos que quiere realizar el servicio de: "+servicio+ "y le haremos llegar en el correo" +correo+ " la confirmación.Muchas Gracias , Att: Equipo Corner Studio."
	document.getElementById("mensajeContacto").innerHTML =mensaje;
}
