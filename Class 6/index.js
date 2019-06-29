var yennifer = {
  nombre: 'Yennifer',
  apellido: 'Herrera',
  edad: 20
}

var jesus = {
  nombre: 'Jesus',
  apellido: 'Herrera',
  edad: 15
}

var camilo = {
  nombre: 'Camilo',
  apellido: 'Herrera',
  edad: 13
}

function imprimirNombreMayusculas(nombre) {
  nombre = nombre.toUpperCase() 
  console.log(`Console: ${nombre}`)
}

function imprimirNombreMayusculas2(persona) {
  var nombre = persona.nombre.toUpperCase() 
  console.log(`Console: ${nombre}`)
}

function imprimirNombreMayusculas3({ nombre }) { 
  console.log(`Console: ${nombre.toUpperCase()}`)
}

imprimirNombreMayusculas(yennifer.nombre)
imprimirNombreMayusculas2(yennifer)
imprimirNombreMayusculas3(yennifer)
imprimirNombreMayusculas3({nombre: 'María'})