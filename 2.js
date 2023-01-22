// Ejercicio 2
// Dada una matriz de N elementos repetidos,
// crea una función numbersTop para obtener los tres elementos más repetidos 
// ordenados de forma descendente por número de repeticiones.

function numbersTop(array) {
    let obj = {};
    let result = [];
  
    // cuenta el numero de repeticiones de cada elemento
    for (let i = 0; i < array.length; i++) {
      if (!obj[array[i]]) {
        obj[array[i]] = 1;
      } else {
        obj[array[i]]++;
      }
    }
  
    // convierte el objeto a un array para poder ordenarlo por numero de repeticiones
    for (let key in obj) {
      result.push([key, obj[key]]);
    }


    // ordena el array por numero de repeticiones de forma descendente y devuelve los 3 primeros elementos del array ordenado.  
    return result.sort((a, b) => b[1] - a[1]).map(e => e[0]).slice(0, 3);  
   
    
}


/**
 * TEST Ejercicio 2
 */
numbersTop([3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1]) // [ 1, 3, 2 ]
numbersTop(['a', 3, 2, 'a', 2, 3, 'a', 3, 4, 'a', 'a', 1, 'a', 2, 'a', 3]) // [ 'a', 3, 2 ]
