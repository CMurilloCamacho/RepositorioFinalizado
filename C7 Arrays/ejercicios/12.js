function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let arrayMayuscula = array.map(x => x.toUpperCase())
  return arrayMayuscula;

}

module.exports = convertirStringAMayusculas;
