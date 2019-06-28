# Fundamentos de Javascript clase 3

## Manejo de Números

* Con **//** se puede añadir un comentario en el código

* Las sumas o incrementos se pueden ejecutar de dos formas.
  
  **Sintaxis:**
  
  ```Javascript
  var hambre = 2
  // Suma
  hambre = hambre + 1

  //Shorcut para suma
  var energia = 3
  energia += 2

  console.log(`Hambre: ${hambre}`)
  console.log(`Energia: ${energia}`)
  ```

  **Salida:**

  Hambre: 3

  Energia: 5

  **Nota: Lo anterior es posible con todas las operaciones básicas (__+, -, *, /__)**

* La manera como JS almacena los decimales no es tan precisa. Por consiguiente, para corregir el error al realizar operaciones con decimales se debe utilizar **Math.round()** de la siguiente manera:

  ```Javascript
  Math.round(variableConDecimal + operacion * 100) / 100
  ```

* El método **.toFixed()** devuelve un String con la cantidad de decimales especificada como parámetro

* La función **parseFloat()** convierte la cadena que recibe por parámetro en un numero decimal
