
function Desconto (ValorVenda) {
    return ValorVenda - (ValorVenda *0.10);
}

function Juros3x (ValorVenda) {
    return ValorVenda +(ValorVenda *0.05);
}
function Juros(ValorVenda) {
    return ValorVenda +(ValorVenda *0.10);
}


function mostrarResultado() {
  
    const ValorVenda = parseFloat(document.getElementById('ValorVenda').value);
    const parcela = parseFloat(document.getElementById('parcela').value);
    
  
    if (parcela==1) {
        
        var resultado = Desconto(ValorVenda, parcela);
    
        document.getElementById('resultado').innerText = ` O Valor da venda é igual a: ${resultado}`;
    } else if(parcela<=3) {
        
        var resultado = Juros3x(ValorVenda, parcela);
       
        document.getElementById('resultado').innerText = ` O Valor da venda é igual a: ${resultado}`
    }
    else{
        var resultado = Juros(ValorVenda, parcela);
       
        document.getElementById('resultado').innerText = ` O Valor da venda é igual a: ${resultado}`
    }
    for(let i=0; i<parcela;i++){
        document.getElementById('resultado').innerHTML += `<br>${resultado/parcela}`

    }
 
}
