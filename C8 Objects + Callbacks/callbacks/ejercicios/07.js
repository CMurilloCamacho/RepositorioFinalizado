function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let arregloNuevo = []
   for (let i = 0; i < arrayOfStrings.length; i++) {
    
    if(arrayOfStrings[i][0] === 'a'){
      arregloNuevo.push(arrayOfStrings[i])
    }
   }
   return arregloNuevo;
}

module.exports = filter;
