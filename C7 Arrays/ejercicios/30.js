function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  for (let i = 0; i < numeros.length; i++) {
      
    for (let j = 0; j < i; j++) {
      
      if (numeros[i]=== numeros[j]) {
        return numeros[i]
        
      }
    }
    
  }
}

module.exports = encontrarElementoRepetido;
//1.2.3.4.5.5.6