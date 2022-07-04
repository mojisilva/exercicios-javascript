function verificaPalindromo(p){
    if(!p) throw "String inexistente!";
    let palindromo = p.split("").reverse().join("")

    if(palindromo === p){
        return `A palavra ${p} é um palíndromo`  
    }
        return `A palavra ${p} não é um palíndromo`

}
console.log(verificaPalindromo("carro"))