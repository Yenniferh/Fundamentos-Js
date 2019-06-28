# Fundamentos de Javascript clase 4

## Funciones

* Las funciones son fracciones de código reutilizable

* Para definir una función se utiliza la palabra reservada **function**
  
  **Sintaxis:**
  
  ```Javascript
  nombreDeLaFuncion() // Invocación de la función

  function nombreDeLaFuncion() {
    console.log("Hola. Soy una funcion")
  }
  ```

  **Salida:**

  "Hola. Soy una funcion"

  **Nota: el cuerpo de la función se delimita usando llaves { }**

* Los parámetros de la función son variables que se pasan a la función escribíendolos entre paréntesis **()**

  **Sintaxis:**

  ```Javascript
  // Con parámetros
  function imprimirEdad2(n,e) { 
    console.log(`${n} tiene ${e} año${e!=1?'s' : ''}`)
  }

  imprimirEdad2('Luis', 1)
  imprimirEdad2('Paulina', 25)
  ```

  **Salida:**

  "Luis tiene 1 año"

  "Paulina tiene 25 años"

* Definir funciones sirve para reutilizar código

* JavaScript es un lenguaje interpretado, lo cual quiere decir que intentará ejecutar el código sin importar si los parámetros que se le pasen a la función estén invertidos o incluso incompletos.

  **Ejemplo:**

  ```Javascript
  // Con parámetros
  function imprimirEdad2(n,e) { 
    console.log(`${n} tiene ${e} año${e!=1?'s' : ''}`)
  }

  imprimirEdad2()
  ```

  **Salida:**

  "undefined tiene undefined años"

  **Aunque la salida no era la esperada, el código se ejecutó correctamente**
  