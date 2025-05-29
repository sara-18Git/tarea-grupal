let precio = parseInt(prompt("ingrese un precio"));
let descuento = parseInt(prompt("ingrese un descuento"));
let descuentoCalculado = (precio * descuento) / 100;
let precioFinal = precio - descuentoCalculado;
console.log("su total es:",precioFinal);
