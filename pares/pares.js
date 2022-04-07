function verificaPares(a){
    if(!a.length)
        console.log('-1')
    
    for(let i = 0; i< a.length; i++){
        if(a[i] % 2 === 0 && a[i] !== 0){
            console.log(`Substituindo ${a[i]} por 0...`)
            a.splice(i, 1, 0)
        }
    }
    console.log(a)
}
var a = [1,0,5,8,9,4]
verificaPares(a)