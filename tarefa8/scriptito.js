

/* Te pregunta tu posicion y te dice por texto en el html tu posicion*/
function resolve(p) {
    if (p == 1){
    	document.write("Medalla de oro");
    } else if (p == 2){
    	document.write("Medalla de plata");
    } else if (p == 3){
    	document.write("Medalla de bronce");
    } else {
    	document.write("No has conseguido ninguna medalla");
    }
}
var posicion = prompt("Cal e o teu posto na competicion?");
resolve(posicion)