function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let resultadoArr = arrayOfNums.reduce((acc, elem) => { return acc + elem},0)
  return resultadoArr;
}

module.exports = agregarNumeros;
