function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let prod = 1
  for (let i = a; i <= b; i++) {
    prod = prod *i
  }
  return Math.abs (prod)
  
}

module.exports = productoEntreNúmeros;