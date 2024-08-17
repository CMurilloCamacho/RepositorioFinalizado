function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
    
    
   let indiceGenerado = Math.floor(Math.random() * array.length )
   return array[indiceGenerado]
   

}

module.exports = obtenerElementoAleatorio;
