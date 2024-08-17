function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let sumaArr = resultadosTest.reduce((acc, elem)=>{return (acc + elem)}, 0)
  return sumaArr/resultadosTest.length
}

module.exports = promedioResultadosTest;
