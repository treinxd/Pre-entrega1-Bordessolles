

function mostrar_alerta(mensaje) {
    alert(mensaje);
}

let nombre = prompt("ingrese su nombre.");

while (nombre === null) {
    nombre = "Anonimo";
    mostrar_alerta ("Porfavor ingrese su nombre para continuar.");
} 

mostrar_alerta ("Bienvenido a mi ecommerce " + nombre);


let opcion = prompt ("Que desea comprar? Escriba 1 para remeras, 2 para pantalones");
let direccion = "";
const preguntas = ["Ingrese su dirección para poder realizar el envío del pedido", 
"Su artículo será enviado a: " , 
"Muchas gracias por su compra"];

if (opcion === "1"){
    let confirmacion = confirm("Usted eligió remera. Su precio es de $1000. Desea comprar este artículo?");
    if (confirmacion === true){
        for (let i = 0; i < preguntas.length; i++) {
            if (i === 0) {
                direccion = prompt(preguntas[i]);
            } else if (i === 1) {
                mostrar_alerta(preguntas[i] + direccion);
            } else {
                mostrar_alerta(preguntas[i]);
            }
        }       
    }

    if (confirmacion === false){
        mostrar_alerta("Muchas gracias por su visita");
    }
}
if (opcion === "2"){
    let confirmacion = confirm("Usted eligió Pantalones. Su precio es de $1000. Desea comprar este artículo?");

    if (confirmacion === true){
        for (let i = 0; i < preguntas.length; i++) {
            if (i === 0) {
                direccion = prompt(preguntas[i]);
            } else if (i === 1) {
                mostrar_alerta(preguntas[i] + direccion);
            } else {
                mostrar_alerta(preguntas[i]);
            }
        }       
    }

    if (confirmacion === false){
        mostrar_alerta("Muchas gracias por su visita");
    }
}
while (opcion !=="1" && opcion !== "2"){
    mostrar_alerta("Ingreso un numero o caracter invalido. Vuelva a intentarlo.")
    let opcion = prompt ("Que desea comprar? Escriba 1 para remeras, 2 para pantalones")
}

//