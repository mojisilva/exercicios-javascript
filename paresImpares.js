var par = [];
var impar = [];
for(let i =1; i<=10; i++){
    if(i % 2 == 0){
        par.push(i)
    }
    else{
        impar.push(i)
    }    
}
console.log(`Números pares: ${par}`)
console.log(`Números impares: ${impar}`)