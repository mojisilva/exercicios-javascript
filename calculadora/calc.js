function calc(){
    const operacao = Number(prompt("Escolha uma operção:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**) "));
    console.log(operacao);

    if(!operacao || operacao >6 || operacao <1){
        alert('Erro: operação inválida');
        calc();
    }
    else{
        let n1 = Number(prompt("Insira o primeiro valor"))
        let n2 = Number(prompt("Insira o segundo valor"))
        let resultado;

        switch(operacao){
            case 1: 
                soma();
            break;
            case 2: 
                subtr(); 
            break;
            case 3: 
                multi();
            break;
            case 4: 
                divR();
            break;
            case 5: 
                divI();
            break;
            case 6: 
                poten();
            break;
        }

        function soma(){
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
            novaOperacao();
        }
        function subtr(){
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            novaOperacao();
        }
        function multi(){
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
            novaOperacao();
        }
        function divR(){
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            novaOperacao();
        }
        function divI(){
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é igual a:  ${resultado}`)
            novaOperacao();
        }
        function poten(){
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2} é igual a: ${resultado}`)
            novaOperacao();
        }

        function novaOperacao(){
            let opcao = prompt("Deseja fazer outra operação?\n 1 - Sim\n 2 - Não");
            if(opcao == 1){
                calc();
            }else if(opcao == 2){
                alert('Até mais')
            }else{
                alert('Digita uma opção válida')
                novaOperacao();
            }   
        }
        
    }
    
}
calc();