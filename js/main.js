let edad = parseInt(prompt("Ingresa tu edad:"));
let compania = prompt("Estas acompañado? (si/no)").toLowerCase();

if (edad >= 18) {     
    console.log("Podes pasar.");
} else if (edad >= 12 && compania === "si") {     
    console.log("Podes pasar, pero con tu acompañante.");
} else {
    console.log("No podes pasar.");
}