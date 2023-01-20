var aleatorio = Math.floor(Math.random() * 101);
document.write("<h2>Felicidades sí que era : " + aleatorio+"</h2>")
//alert("El numero correcto era: " + aleatorio)
var intento = parseInt(prompt("Numero entre el 0 y el 100"))
while (intento != aleatorio) {
	if (intento < 101) {
		if (intento < aleatorio) {
			alert("El numero es mayor");
		} else {
			alert("El numero es menor");
		}
	} else {
		alert("El numero tiene que ser menor que 100")
	}
intento = prompt("Numero entre el 0 y el 100")
}
alert("Correcto");