function filtraPares(arr){
    return arr.filter(callback)
}

function callback(item){
    return item%2 ===0;

}

const a = [5,9,6,7,9,2,5,4,3,10,45,50]


console.log(filtraPares(a))