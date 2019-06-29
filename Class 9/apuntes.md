# Fundamentos de Javascript clase 9

## Comparaciones en JavaScript

### Variables

* Existen varias maneras de comparar variables u objetos dentro de javascript

* JavaScript tiene comparaciones estrictas y de conversión de tipos.

* Las comparaciones de conversión de tipos se pueden efectuar usando el operador **==** esto convierte los operandos al mismo tipo de valor y permite que se puedan comparar

  **Ejemplo:**

  ```Javascript
  var x = 4, y = '4'

  console.log(`x==y? \nresultado: ${x==y}`)
  ```

  **Salida:**

  x==y?

  resultado: true

  **Nota: Las variables no son del mismo tipo pero contienen el mismo valor**

* Las comparaciones estrictas se efectuan con el operador **===** solo son verdaderas si los operandos son del mismo tipo y los contenidos coinciden

  **Ejemplo:**

  ```Javascript
  var x = 4, y = '4'

  console.log(`x===y?\nresultado: ${x===y}`)
  ```

  **Salida:**

  x===y?

  resultado: false

  **Nota: Aunque las variables continen el mismo valor, no son del mismo tipo**

* Existen cinco tipos de datos que son primitivos:

1. Boolean
2. Null
3. Undefined
4. Number
5. String

### Objetos

* Cuando las comparaciones se efectuan sobre objetos, se hace con respecto a su referencia (espacio de memoria que ocupa el objeto)

  **Ejemplo:**

  ```Javascript
  var doctor = {
    nombre: 'Yennifer'
  }

  var policia = {
    nombre: 'Yennifer'
  }

  console.log(`doctor==policia?\nresultado: ${doctor==policia}`)

  // doctorCirujano va a apuntar a la misma referencia de variable que apunta a doctor. En otras palabras, doctorCirujano apuntará al mismo lugar de la computadora que apunta a la variable doctor
  var doctorCirujano = doctor

  doctorCirujano.nombre = 'Valery' // La variable doctorCirujano al apuntar a la misma referencia que doctor, modificará la información de doctor

  console.log(`doctor==doctorCirujano?\nresultado: ${doctor==doctorCirujano}`)
  console.log(`Nombre Doctor: ${doctor.nombre}\nNombre Doctor Cirujano: ${doctorCirujano.nombre}`)
  ```

  **Salida:**

  doctor==policia?
  
  resultado: false
  
  doctor==doctorCirujano?
  
  resultado: true
  
  Nombre Doctor: Valery
  
  Nombre Doctor Cirujano: Valery

  **Nota: La comparación doctor===policia es false y doctor===doctorCirujano es true**

**[Más información aquí](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators> "JS Comparison operators | MDN")**
