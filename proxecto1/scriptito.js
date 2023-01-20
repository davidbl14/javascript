//alerta de cuanto vale el producto
//otra del siguiente
//ultima coa suma dos productos e o total
var primero;
primero= prompt("Cuanto cuesta el primer producto?");
var primeiro= parseFloat(primero);
var segundo;
segundo= prompt("Cuanto cuesta el segundo producto?");
var segundos= parseFloat(segundo);
var tercero;
tercero= prompt("Cuanto cuesta el tercer producto?");
var terceiro= parseFloat(tercero);
var total=primeiro+segundos+terceiro
var iva= total*0.21
var totalabs= iva+total
//document.write("<p>El primero cuesta </p>"+primeiro+", el segundo cuesta "+segundos+" y el tercero cuesta "+terceiro+" que da un total de "+total+". Pagas "+iva+" de IVA");
document.write("<p>El primero cuesta</p>"+primeiro.toFixed(2));
document.write("<p>El segundo cuesta</p>"+segundos.toFixed(2));
document.write("<p>El tercero cuesta</p>"+terceiro.toFixed(2));
document.write("<p>El total es</p>"+total.toFixed(2));
document.write("<p>IVA añadido</p>"+iva.toFixed(2));
document.write("<p>Total mas IVA</p>"+totalabs.toFixed(2));