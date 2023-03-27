function esPalindromo(texto) {
    return texto.split('').reverse().join('') == texto;
}

console.log(esPalindromo('radar'));   // true
console.log(esPalindromo('ala'));   // true
console.log(esPalindromo('sucio'));   // false
console.log(esPalindromo('reconocer'));   // true