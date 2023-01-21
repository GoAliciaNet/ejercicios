// Ejercicio 1
// Dada una matriz de N elementos en la que todos los elementos son iguales excepto uno,
// crea una función findUniq que retorne el elemento único.

function findUniq(array) {

    const quantity = array.reduce((counter, item) => {
        counter[item] = (counter[item] || 0) + 1;
        return counter
    }, {});

    console.log('quantity', quantity)
    let unique = []



    for (let key in quantity){
        if(quantity[key] === 1){
            unique.push(key);
        }
      }
      return unique
}

console.log(findUniq(['12', 10, '12', 11, 1, 11, 10, '12']))

/**
 * TEST Ejercicio 1
 */
findUniq(['12', 10, '12', 11, 1, 11, 10, '12']) // 1
findUniq(['Capitán América', 'Hulk', 'Deadpool', 'Capitán América', 'Hulk', 'Wonder Woman', 'Deadpool', 'Iron Man', 'Iron Man']) // 'Wonder Woman'
