# Fundamentos de Javascript clase 5

## Alcance de las Funciones

* Si una variable no está definida dentro del cuerpo de una función, es una variable global. Eso significa que la variable puede ser accedida desde cualquier función

* Una variable global, se le asigna al objeto global. Este objeto global depende de donde se esté ejecutando JS (server, browser, etc). En el navegador, el objeto global es **window**. La variable puede ser accedida en el browser desde consola usando **window.variableGlobal**

* Una función que accede a una variable global puede producir un efecto colateral (_side effect_) lo cual significa que al invocar la función se podrían modificar variables que no están definidas dentro de ella.

  **Ejemplo:**

  ```Javascript
  var nombre = 'Yennifer'

  // Función que modifica una variable global, produce un side effect
  function imprimirNombreMayusculas(){
    nombre = nombre.toUpperCase()
    console.log(`Console: ${nombre}`)
  }

  imprimirNombreMayusculas()
  console.log(`Nombre: ${nombre}`)
  ```

  **Salida:**

  Console: YENNIFER

  Nombre: YENNIFER

* Una variable definida dentro de una función es una variable local

* Es posible utilizar el mismo nombre para una variable global y para el parámetro de una función con un alcance local

* Para solucionar el _side effect_ se utilizan parámetros en lugar de pasar directamente la variable.

   **Ejemplo:**

  ```Javascript
  var nombre = 'Yennifer'

  // Función con parámetro que tiene el mismo nombre de la variable global y no la modifica 
  function imprimirNombreMayusculas2(nombre){
    nombre = nombre.toUpperCase() // La variable nombre hace referencia a la variable local
    console.log(`Console: ${nombre}`)
  }

  imprimirNombreMayusculas2(nombre) // La variable nombre hace referencia a la variable global
  console.log(`Nombre: ${nombre}`)
  ```

  **Salida:**

  Console: YENNIFER
  
  Nombre: Yennifer
  