var edad = 27

//Sumas o incrementos
edad = edad + 1
edad +=1

var peso = 75

//Restas o decrementos
peso = peso - 2
peso -= 2

var sandwich = 1

peso = peso + sandwich
peso += sandwich

var jugarAlFutbol = 3

peso -= jugarAlFutbol

var precioDeVino = 1207.3

var total = precioDeVino * 3 //La manera como JS almacena los decimales no es tan precisa

total = Math.round(precioDeVino *100 * 3) / 100 //Manera de corregir el error de los decimales

var totalStr = total.toFixed(2) //Devuelve un String con la cantidad de decimales especificada

var total2 = parseFloat(totalStr) //Convierte una cadena en un numero decimal

var pizza = 8
var personas = 2

var cantidadDePorcionesPersona = pizza / personas
