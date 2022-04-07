function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        console.log('pre: '+prev);
        console.log('current: '+current);
        return prev + current;
    });
}



const a = [1,2,5,6,7,8,5]

console.log(somaNumeros(a))
