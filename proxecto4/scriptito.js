/*var ducias;
ducias= prompt("Querido usuario, cantas ducias leva a tua tortilla?");
var numerito= parseInt(ducias);
alert("Escribiste "+numerito);
var ovos= numerito*12
alert(ovos)*/

var desexo = confirm("Queres empezar?");
while (desexo == true) {  
var kilometros;
kilometros= prompt("Cuantos kilometros pasamos a metros?");
var km= parseInt(kilometros);
alert("Escribiste "+km+" km");
var metros= km*1000;
alert("Son "+metros+" m");

var euros;
euros= prompt("Cuantos euros pasamos a dolares?");
var euro= parseFloat(euros);
alert("Escribiste "+euro+" €");
var dolares= euro*1.05;
alert("Son "+dolares.toFixed(2)+" $");

var gb;
gb= prompt("Cuantos gigas pasamos a bytes?");
var giga= parseFloat(gb);
alert("Escribiste "+giga+" GB");
var bytes= giga*1000;
alert("Son "+bytes+" bytes");

var horas;
horas= prompt("Cuantas horas pasamos a segundos?");
var hora= parseFloat(horas);
alert("Escribiste "+hora+" horas");
var segundos= hora*3600;
alert("Son "+segundos+" segundos");

desexo = confirm("Queres volver a empezar?");
}
document.write("Metros = " + metros + "<hr>")
document.write("Dolares = " + dolares + "<hr>")
document.write("Bytes = " + bytes + "<hr>")
document.write("Segundos = " + segundos + "<hr>")
