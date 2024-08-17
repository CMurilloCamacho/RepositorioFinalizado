function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let nuevoArr = []
  for (let i = 0; i < array.length; i++) {
    nuevoArr.push(array[i]*i)
    
  }
  return nuevoArr;
}

module.exports = multiplicarElementosPorIndice;
