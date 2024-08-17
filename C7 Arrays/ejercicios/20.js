function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let nextArr = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== nextArr) {
      return false;
    }
  }
  return true;
}

module.exports = todosIguales;
