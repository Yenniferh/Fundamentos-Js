# Fundamentos de Javascript clase 6

## Objetos

* Un objeto es una colección de datos relacionados y / o funcionalidad (que generalmente consta de varias variables y funciones, que se denominan propiedades y métodos cuando hacen parte de objetos)

* Los objetos se definen delimitados mediante llaves **{}**

* Un atributo se compone de una clave (key) y un valor (value), que se separan entre sí por dos puntos **":"**. Los valores pueden ser de tipo string, número, booleano, etc

* Cada atributo está separado del siguiente por una coma. Un objeto puede tener todos los atributos que sean necesarios

* Para acceder al valor del atributo de un objeto, se utiliza la notación **nombreObjeto.nombreAtributo**

  **Ejemplo:**

  ```Javascript

  var yennifer = {
    nombre: 'Yennifer',
    apellido: 'Herrera',
    edad: 20
  }

  function imprimirNombreMayusculas(nombre) {
    nombre = nombre.toUpperCase()
    console.log(`Console: ${nombre}`)
  }

  imprimirNombreMayusculas(yennifer.nombre) // Se accede al valor del atributo nombre

  ```

  **Salida:**

  Console: YENNIFER

* Un objeto también se puede pasar como parámetro en una función

  **Ejemplo:**

  ```Javascript

  var yennifer = {
    nombre: 'Yennifer',
    apellido: 'Herrera',
    edad: 20
  }

  function imprimirNombreMayusculas2(persona) {
    var nombre = persona.nombre.toUpperCase() // Se accede al atributo nombre del objeto que recibe como parámetro
    console.log(`Console: ${nombre}`)
  }

  imprimirNombreMayusculas2(yennifer)

  ```

  **Salida:**

  Console: YENNIFER

* Las últimas versiones de JavaScript nos permiten desglosar el objeto para acceder únicamente al atributo que nos interesa. Esto se consigue encerrando el nombre del atributo entre llaves **{}**

   **Ejemplo:**

  ```Javascript
  var yennifer = {
    nombre: 'Yennifer',
    apellido: 'Herrera',
    edad: 20
  }

  // Del objeto que se pasa por parámetro, se extrae el atributo nombre
  function imprimirNombreMayusculas3({ nombre }) {
    console.log(`Console: ${nombre.toUpperCase()}`)
  }

  imprimirNombreMayusculas3(yennifer)

  ```

  **Salida:**

  Console: YENNIFER

  **Nota: si el objeto que se pasa por parámetro no tiene definido el atributo especificado, se obtiene un error**
  