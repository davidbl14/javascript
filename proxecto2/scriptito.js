function sumita(a, b) {
	return (a + b);
}
function multi(a, b) {
	return (a * b);
}
function restita(a, b) {
	return a - b;
}
function dividir(a, b) {
	if (b == 0) {
		return ("No se puede dividir entre 0");
	} else {
		return (a / b);
	}
}
function cuadrado(a) {
	alert(Math.pow(a, 2));
}
function pitagoras(a, b) {
	alert(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
}
for (var i = 1; i <= 3; i++) {
	var resposta1 = parseInt(prompt("Primer numero"))
	var resposta2 = parseInt(prompt("Segundo numero"))


	document.write("Suma = " + sumita(resposta1, resposta2) + "<hr>")
	document.write("Resta = " + restita(resposta1, resposta2) + "<hr>")
	document.write("Multiplicacion = " + multi(resposta1, resposta2) + "<hr>")
	document.write("Division = " + dividir(resposta1, resposta2) + "<hr>"+"<hr>")
}