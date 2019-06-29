# Fundamentos de Javascript clase 7

## Desestructurar Objetos

* Para no tener duplicado el nombre de la variable con el nombre del atributo de un objeto

  **Ejemplo:**

  ```Javascript
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
  ```

  **Salida:**

  Console: YENNIFER

  **Nota: las líneas 1 y 2 de la función, son equivalentes**
  