function validaArray(array, n) {
    try{
        if(!array && !n){
            throw new ReferenceError("Envie os parâmetros")
        }
        if(typeof array !== "object"){
            throw new TypeError( `Um dos parâmetro tem que ser do tipo objeto: "${array}"` )
        }
        if(typeof n !== "number"){
            throw new TypeError(`Um dos parâmetro tem que ser do tipo númerico: "${n}"`)
        }
        if(array.length != n){
            throw new RangeError("O tamanho do array tem que ser igual ao número do parâmetro númerico")
        }
        }
    catch (e){
        if(e instanceof ReferenceError){
            console.log("Reference Error: " + e.message)
        }else if(e instanceof TypeError){
            console.log("Type Error: " + e.message)
        }else if(e instanceof RangeError){
            console.log("Range Error: " + e.message)
        }else{
            console.log("Ocorreu um erro inesperado: " + e.message)
        }
    }
}
const a = [1,5,8,9]

validaArray(a,4)
