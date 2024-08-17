function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
 let newA = array.map(x => x*2)
 return newA;
}

module.exports = duplicarElementos;
