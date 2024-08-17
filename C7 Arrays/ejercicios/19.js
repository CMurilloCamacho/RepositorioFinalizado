function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  let multiplicador = 1
  if (arguments.length === 0) {
    return 0
    
  }
  if (arguments.length === 1) {
    return arguments[0]
    
  }

  for (let i = 0; i < arguments.length; i++) {
    multiplicador *= arguments[i]

  }
  return multiplicador
}

module.exports = multiplicarArgumentos;
