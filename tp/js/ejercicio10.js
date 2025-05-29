let usuario = prompt("ingrese su nombre de usuario");
let arrobaIndex = usuario.indexOf("@");
let resultado = usuario.slice(0, arrobaIndex);
console.log("Nombre de usuario:",resultado);
