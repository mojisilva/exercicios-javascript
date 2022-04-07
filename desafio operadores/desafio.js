function retonaValor(num1, num2){
    var mensagem1;
    var mensagem2;
    (num1===num2) ?
        mensagem1 = `Os números ${num1} e ${num2} são iguais.`:
        mensagem1 = `Os números ${num1} e ${num2} não são iguais.`;

    var resultado = num1 + num2;
    console.log();

    if(resultado > 10 && resultado < 20){
        mensagem2 = `Sua soma é ${resultado} que é maior que 10 e menor que 20.`
    }else if(resultado > 10 && resultado > 20){
        mensagem2 = `Sua soma é ${resultado} que é maior que 10 e maior que 20.`
    }else{
        mensagem2 = `Sua soma é ${resultado} que é menor que 10 e menor que 20.`
    }

    console.log(`${mensagem1} ${mensagem2}`)
   
}

retonaValor(5,4);