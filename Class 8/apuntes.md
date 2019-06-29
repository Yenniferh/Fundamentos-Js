# Fundamentos de Javascript clase 8

## Parámetros Como Valor o Referencia

* Javascript se comporta de manera distinta cuando le pasamos un objeto como parámetro.

* Los objetos que se pasan por parámetros, se pasan por referencia. Lo cual significa que si son modificados dentro de una función, su valor se verá modificado fuera de esta también

  **Ejemplo:**

  ```Javascript
  var yennifer = {
    nombre: 'Yennifer',
    apellido: 'Herrera',
    edad: 20
  }

  function cumpleanios(persona) {
    persona.edad += 1 // Se modifica el atributo edad del objeto
    console.log(`${persona.nombre} ha cumplido años, su nueva edad es ${persona.edad}`)
  }

  function imprimirNombreYEdad(persona) {
    var {nombre} = persona
    var {apellido} = persona
    var {edad} = persona
    console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} año${edad!=1?'s':''}`)
  }

  cumpleanios(yennifer)
  imprimirNombreYEdad(yennifer)
  ```

  **Salida:**

  Yennifer ha cumplido años, su nueva edad es 21

  Hola, me llamo Yennifer Herrera y tengo 21 años

  **Nota: El objeto empezó con una edad de 20 años, luego la función modificó el valor del atributo edad**

* Cuando se le pasa únicamente el valor de un atributo a una función, esta no modifica el objeto

  **Ejemplo:**

  ```Javascript
  var yennifer = {
    nombre: 'Yennifer',
    apellido: 'Herrera',
    edad: 20
  }

  function cumpleanios2(edad) {
    edad += 1
  }

  function imprimirNombreYEdad(persona) {
    var {nombre} = persona
    var {apellido} = persona
    var {edad} = persona
    console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} año${edad!=1?'s':''}`)
  }

  cumpleanios2(yennifer.edad)
  imprimirNombreYEdad(yennifer)
  ```

  **Salida:**

  Hola, me llamo Yennifer Herrera y tengo 20 años

  **Nota: El objeto no fue modificado**

* Para para que los valores de los atributos no sean modificados directamente por una función, se puede crear un objeto diferente con las mismas características del objeto anterior pero se modifican los atributos que sean necesarios

  **Ejemplo:**

  ```Javascript
  var yennifer = {
    nombre: 'Yennifer',
    apellido: 'Herrera',
    edad: 20
  }

  function cumpleanios3(persona) {
    var nuevaEdad = persona.edad + 1
    console.log(`${persona.nombre} ha cumplido años, su nueva edad es ${nuevaEdad}`)
    return {
      ...persona, // Se devuelve un objeto copiando todo lo que tenía el objeto anterior eso se hace con (...persona)
      edad: nuevaEdad // Se sobrescribe un atributo del objeto anterior
    }
  }

  function imprimirNombreYEdad(persona) {
    var {nombre} = persona
    var {apellido} = persona
    var {edad} = persona
    console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} año${edad!=1?'s':''}`)
  }

  var yenniferVieja = cumpleanios3(yennifer) // Nuevo objeto que posee las mismas características que el objeto original excepto por la edad
  imprimirNombreYEdad(yennifer)
  ```

  **Salida:**

  Yennifer ha cumplido años, su nueva edad es 21

  Hola, me llamo Yennifer Herrera y tengo 20 años

  **Nota: El objeto no fue modificado, pero ahora hay 2 objetos**
