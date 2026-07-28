let pasaron = 0;
let rebotados = 0;

do {
    let edad = parseInt(prompt("Ingresa tu edad:"));
    let compania = prompt("Estas acompañado? (si/no)").toLowerCase();

    if (edad >= 18) {     
        console.log("Podes pasar.");
        pasaron++;
    } else if (edad >= 12 && compania === "si") {     
        console.log("Podes pasar, pero con tu acompañante.");
        pasaron++;
    } else {
        console.log("No podes pasar.");
        rebotados++;
    }

} while (confirm("¿Querés evaluar a otra persona?"));

console.log("--- RESUMEN DE HOY ---");
console.log("Total evaluados: ${pasaron + rebotados}");
console.log("Ingresaron: ${pasaron}");
console.log("Rebotados: ${rebotados}");