var nombre = 'Yennifer', edad = 20

// Sin parámetros
function imprimirEdad() { 
  console.log(`${nombre} tiene ${edad} año${edad!=1?'s' : ''}`)
}

imprimirEdad()

// Con parámetros
function imprimirEdad2(n,e) { 
  console.log(`${n} tiene ${e} año${e!=1?'s' : ''}`)
}

imprimirEdad2('Paulina', 25)
imprimirEdad2('Cesar', 30)
imprimirEdad2('Luis', 1)
imprimirEdad2()
