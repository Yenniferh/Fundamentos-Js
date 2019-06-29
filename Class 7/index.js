var yennifer = {
  nombre: 'Yennifer',
  apellido: 'Herrera',
  edad: 20
}

function imprimirNombreMayusculas(persona) {
  // var nombre = persona.nombre  Línea 1
  var { nombre } = persona // Línea 2
  console.log(`Console: ${nombre.toUpperCase()}`)
}

imprimirNombreMayusculas(yennifer)

// Reto

function imprimirNombreYEdad(persona) {
  var {nombre} = persona
  var {apellido} = persona
  var {edad} = persona

  console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} año${edad!=1?'s':''}`)
}

console.log('Reto: ')
imprimirNombreYEdad(yennifer)
imprimirNombreYEdad({nombre: 'Pedro', apellido:'García', edad:1})