nombre = prompt("ingrese su nombre.");
alert ("Bienvenido a la red " + nombre);

const tweets = [
    "Aguante messi",
    "La chocolatada va con azucar",
    "La chocolatada va sin azucar",
    "unas ganas de jugar a la play",
    "El dolar no existe es todo un invento del estado."
];

alert("Bienvenido a twitter de la salada")
alert ("A continuacion le vamos a mostrar unos tweets")
alert ("Escriba me gusta o no me gusta para determinar sus gustos.")

meGusta = 0
noMeGusta = 0

for (let i = 0; i < tweets.length; i++){
        let respuesta = prompt(tweets[i] + " (escriba me gusta o no me gusta)");
            if (respuesta === "me gusta"){
                meGusta += 1   
            }else if(respuesta === "no me gusta"){
                noMeGusta += 1
            }else {
                alert("Respuesta no válida. Por favor, ingrese 'me gusta' o 'no me gusta'.");
                i--; 
            }
}

alert( "De todos los tweets"+"\nTe gustaron: " + meGusta + "\ny" + "\nNo te gustaron: " + noMeGusta);
