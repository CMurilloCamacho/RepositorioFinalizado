function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
 let arrayNuevo = array.filter(x => x >10)
 return arrayNuevo.length;
}

module.exports = contarElementosMayoresA10;
