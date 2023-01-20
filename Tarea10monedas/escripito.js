var atun = true;
while (atun == true) {
var producto = prompt("¿Que producto acabas de comprar? ");
var costo = prompt("¿Cuanto costó ese producto? ");
var moneda = prompt("¿Usaste el euro o el yen? ");

if (moneda == "euro") {
    var cambiomoneda = costo*139
    document.write("El producto: "+producto+"<hr>");
    document.write("El costo en euros es: "+costo+"€"+"<hr>");
    document.write("El costo en yenes es: "+cambiomoneda.toFixed(2)+"¥"+"<hr>" + "<br>");
    

} else if (moneda =="yen") {
    var cambiomoneda = costo/139
    document.write("El producto: "+producto+"<hr>");
    document.write("El costo en euros es: "+cambiomoneda.toFixed(2)+"€"+"<hr>");
    document.write("El costo en yenes es: "+costo+"¥"+"<hr>" + "<br>");
    

} else {
    alert("No has elegido ni euro ni yenes, vuelve a intentarlo.")

}
atun = confirm("¿Tienes algún otro producto que quieres calcular?");

}
