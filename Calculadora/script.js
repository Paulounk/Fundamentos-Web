function inserir(numero) 
{ 
    var acumulado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = acumulado + numero;
}

function limpar(){
    document.getElementById('resultado').innerHTML = "";
}

function apagar(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado.length > 1)
    {
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
    else{
        document.getElementById('resultado').innerHTML = "Digite algo!"
    }
}