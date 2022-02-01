let celsius = document.getElementById("celsius");
let fah = document.getElementById("fah");

function celToFah() {
    let output = ( parseFloat(celsius.value) * 9/5 ) + 32;
    fah.value = parseFloat(output.toFixed(1));
}

function fahToCel() {
    let output = ( parseFloat(fah.value) - 32) * 5/9;
    celsius.value = parseFloat(output.toFixed(1));
}