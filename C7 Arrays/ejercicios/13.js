function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let arrayN = array.filter(x => x%2 === 0)
  return arrayN
}

module.exports = filtrarNumerosPares;
