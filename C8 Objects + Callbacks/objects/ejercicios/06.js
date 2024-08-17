const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let sumaTotal = 0
  for (const key in objeto) {
if (objeto.hasOwnProperty(key)) {
      sumaTotal++
  
}
  }
  return sumaTotal;

};

module.exports = contarPropiedades;
