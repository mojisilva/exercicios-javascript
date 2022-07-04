const lista = [
    {
        name: 'sabão em po',
        preco: 30
    },
    {
        name: 'cafe',
        preco: 10
    },
    {
        name: 'farinha',
        preco: 6
    },
    {
        name: 'tempero verde',
        preco: 2
    }
]
const saldoDiponivel = 100

function calculaSaldo(saldoDiponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('rodada: ', index+1);
        console.log('prev: ', prev);
        console.log('current: ', current);
        return prev - current.preco;
    }, saldoDiponivel)
}






console.log(calculaSaldo(saldoDiponivel, lista))