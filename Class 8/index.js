var yennifer = {
  nombre: 'Yennifer',
  apellido: 'Herrera',
  edad: 20
}

function cumpleanios(persona) {
  persona.edad += 1
  console.log(`${persona.nombre} ha cumplido años, su nueva edad es ${persona.edad}`)
}

function cumpleanios2(edad) {
  edad += 1
}

function cumpleanios3(persona) {
  var nuevaEdad = persona.edad + 1
  console.log(`${persona.nombre} ha cumplido años, su nueva edad es ${nuevaEdad}`)
  return {
    ...persona,
    edad: nuevaEdad
  }
}

function imprimirNombreYEdad(persona) {
  var {nombre} = persona
  var {apellido} = persona
  var {edad} = persona
  console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} año${edad!=1?'s':''}`)
}

var yenniferVieja = cumpleanios3(yennifer)
cumpleanios2(yennifer.edad)
imprimirNombreYEdad(yennifer)