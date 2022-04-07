const pessoa1 = {
    nome: 'Maria',
    idade: 30
}
const pessoa2 = {
    nome: 'Eliene',
    idade: 30
}

const animal ={
    nome: 'Sherra',
    idade: 2
}


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(pessoa2, 2))

console.log(calculaIdade.call(animal, 5))

console.log(calculaIdade.apply(pessoa1, [4]))

console.log(calculaIdade.apply(animal, [3]))