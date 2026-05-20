alert("Bienvenidos");
console.log("Hola");

document.querySelector("#button").onclick = function(evento) {
   
    alert("Gracias por reservar"); 
}

document.querySelector("#button").onclick = function() {
    let nombreUsuario = document.querySelector("#nombre").value;
    let mensajeFinal = "¡Gracias por contactarnos, " + nombreUsuario + "!";
    alert(mensajeFinal);
    
}