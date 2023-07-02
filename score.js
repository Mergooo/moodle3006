let initDataRaw = localStorage.getItem('Punkte');
    
// JSON konvertieren (aus JSON Format wird ein [] mit Objekten)
let points = JSON.parse(initDataRaw);
console.log(points);




function set(){
    console.log("Hellloooo");
    document.getElementById('endPoints').value = points;

}

set();


localStorage.removeItem('Punkte');



