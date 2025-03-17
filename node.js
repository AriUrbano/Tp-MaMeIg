var numeroAleatorio;
var contador;

MAMEIG();
function MAMEIG() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    contador = 0;

}
document.getElementById("MAMEIG").addEventListener("submit", function(event) {
event.preventDefault(); 
var respuesta = parseInt(document.getElementById("numeroInput").value);
    if (respuesta < 1 || respuesta > 100) {
        document.getElementById("mensaje").textContent = "El número debe estar entre 1 y 100.";
        return; 
    }
    contador++;
    if (respuesta === numeroAleatorio) {
        document.getElementById("mensaje").textContent = "¡Ganaste!";
        document.getElementById("intentos").textContent = "La cantidad de intentos fue: " + contador;
        iniciarJuego(); 
    } else if (respuesta < numeroAleatorio) {
        document.getElementById("mensaje").textContent = "Es mayor, intenta de nuevo.";
    } else {
        document.getElementById("mensaje").textContent = "Es menor, intenta de nuevo.";
    }
    document.getElementById("numeroInput").value = "";
});