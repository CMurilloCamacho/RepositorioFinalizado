function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   let str1Minus = str1.toLowerCase()
   let str2Minus = str2.toLowerCase()
   
   if (str1Minus.length !== str2Minus.length) {
    return false;
        
   }

   let str1Ord = str1Minus.split('').sort().join('')
   let str2Ord = str2Minus.split('').sort().join('')

   if (str1Ord === str2Ord) {
    return true;
   } else {
    return false; 
   }
   

}

module.exports = esAnagrama;
esAnagrama('Carlos', 'Ana')