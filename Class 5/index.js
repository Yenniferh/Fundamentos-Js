var nombre = 'Yennifer'

// Función que modifica una variable global, produce un side effect
function imprimirNombreMayusculas(){
  nombre = nombre.toUpperCase()
  console.log(`Console: ${nombre}`)
}

imprimirNombreMayusculas()
console.log(`Nombre: ${nombre}`)

var nombre = 'Yennifer'

// Función con parámetro que tiene el mismo nombre de la variable global y no la modifica 
function imprimirNombreMayusculas2(nombre){
  nombre = nombre.toUpperCase() // La variable nombre hace referencia a la variable local
  console.log(`Console: ${nombre}`)
}

imprimirNombreMayusculas2(nombre) // La variable nombre hace referencia a la variable global
console.log(`Nombre: ${nombre}`)
