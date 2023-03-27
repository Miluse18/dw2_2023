function contarPares(numeros, n) {
    if (numeros instanceof Array) {
        if (typeof n === 'number' && Number.isInteger(n)) {
            numeros.sort();
            let contadorPares = 0;
            for(let i = 0; i < numeros.length; ++i) {
                if (numeros[i] % 2 === 0 && numeros[i] <= n) {
                    ++contadorPares;
                    if (numeros[i] === n) {
                        break;
                    }
                }
            }
            return contadorPares;
        }
}
}
try {
    console.log(contarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));   
} catch (e) {
    console.log(`Error: ${e.message}`);
}
console.log();