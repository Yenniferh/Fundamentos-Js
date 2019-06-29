var x = 4, y = '4'

console.log(`x==y? \nresultado: ${x==y}`)

var z = 4, c = '4'

console.log(`z===c?\nresultado: ${z===c}`)

var doctor = {
  nombre: 'Yennifer'
}

var policia = {
  nombre: 'Yennifer'
}

console.log(`doctor==policia?\nresultado: ${doctor==policia}`)

var doctorCirujano = doctor 

doctorCirujano.nombre = 'Valery'

console.log(`doctor==doctorCirujano?\nresultado: ${doctor==doctorCirujano}`)
console.log(`Nombre Doctor: ${doctor.nombre}\nNombre Doctor Cirujano: ${doctorCirujano.nombre}`)