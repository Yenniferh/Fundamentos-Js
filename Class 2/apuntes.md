# Fundamentos de Javascript clase 2

## Manejo de Strings

* Los métodos **toUpperCase()** y **toLowerCase()** permiten convertir el texto de una cadena en Mayúsculas y Minúsculas respectivamente

* El método **charAt()** recibe como parámetro un entero que indica la posición del caracter al que se quiere acceder. La primera posición dentro de una cadena es 0. Es un método case-sensitive.

* El atributo **length** permite conocer la cantidad de letras que tiene un string

* Interpolación de texto: forma de concatenar cadenas.

  **Sintaxis:**

  ```Javascript
  var variableAConcatenar = 'nadie'
  var textoConcatenado = `Hola soy ${variableAConcatenar}`
  console.log(textoConcatenado)
  ```

  **Salida:**

  "Hola soy nadie"

* El método **substr()** nos permite extraer una subcadena de caracteres. Los parámetros que recibe son: la posición inicial y la cantidad de caracteres que se extraerán
