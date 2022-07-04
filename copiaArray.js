const a = [30, 30, 40, 5, 223, 2049, 3034, 5]

function retornaArray(a){
    const s = new Set(a)

    return [...s]
}

console.log(retornaArray(a))