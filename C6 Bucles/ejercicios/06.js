function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  let numStr = num.toString()

  console.log(numStr);
  if (numStr.length === 3) {
    return true;

    
  } else {
    return false;
  }
}
tieneTresDigitos(783)



module.exports = tieneTresDigitos;
