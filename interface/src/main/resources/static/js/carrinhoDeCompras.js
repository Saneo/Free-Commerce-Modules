function addAoCarrinho(produtoId,quantidade){
var url = "/produto/addAoCarrrinho?produtoId="+produtoId + "&quantidade="+quantidade;

    loadCarrinhoHeader(url);

}

function loadCarrinhoHeader(url){
    $("#carrinho").load(url);
}

function CarrinhoMenos(produtoId){


    elementId = "value"+produtoId;
    reduzir = "/carrinho/subtrair/"+produtoId;


    document.getElementById(elementId).value--

    if(document.getElementById(elementId).value==0){
        destroiProduto(produtoId);

    }else{
        loadCarrinhoHeader(reduzir);
        subtrairValorTotalPorProduto(produtoId)
        subtrairValorTotal(produtoId);
    }

}

function removerDoCarrinho(i){

url = "/carrinho/remover/"+i;

$("#carrinho").load(url);

//var qtd = document.getElementById("qtd"+i).innerHTML;
//var totalCarrinho = document.getElementById("totalCarrinho").innerHTML;
//total = totalCarrinho-qtd;
//document.getElementById("totalCarrinho").innerHTML=total;
//document.getElementById(i).remove();

}

function destroiProduto(produtoId){

    produto = "produto"+produtoId
    destroiUrl="/carrinho/remover/"+produtoId;

    loadCarrinhoHeader(destroiUrl);
    subtrairValorTotal(produtoId);
    document.getElementById(produto).innerHTML="";

    var row = document.getElementById(produto);
        var table = row.parentNode;
        while ( table && table.tagName != 'TABLE' )
            table = table.parentNode;
        if ( !table )
            return;
        table.deleteRow(row.rowIndex);

        if(document.getElementById("tabelaCarrinho").rows.length<2){
                 deletarButtonFinalizarCompra()
        }

}

function deletarButtonFinalizarCompra(){
    var elem = document.getElementById('urlFinalizarCompra');
        elem.parentNode.removeChild(elem);
}


function subtrairValorTotal(produtoId){

    elementId = "valorProduto"+produtoId

    value = document.getElementById(elementId).innerHTML
    valorProduto = parseFloat(value.split(" ")[1])
    value = document.getElementById("valorTotal").innerHTML
    valorTotal = parseFloat(value.split(" ")[1]);
    document.getElementById("valorTotal").innerHTML = converterParaReal(valorTotal - valorProduto);
}

function subtrairValorTotalPorProduto(produtoId){

    elementId = "valorProduto"+produtoId;
    valorTotalPorProduto = "valorTotalPorProduto" +produtoId;

    value = document.getElementById(elementId).innerHTML
    valorUnitario = parseFloat(value.split(" ")[1])
    value = document.getElementById(valorTotalPorProduto).innerHTML
    valorTotal = parseFloat(value.split(" ")[1]);
    document.getElementById(valorTotalPorProduto).innerHTML = converterParaReal(valorTotal - valorUnitario);
}

function somarValorTotalPorProduto(produtoId){

    elementId = "valorProduto"+produtoId;
    valorTotalPorProduto = "valorTotalPorProduto" +produtoId;

    value = document.getElementById(elementId).innerHTML
    valorUnitario = parseFloat(value.split(" ")[1])
    value = document.getElementById(valorTotalPorProduto).innerHTML
    valorTotal = parseFloat(value.split(" ")[1]);
    document.getElementById(valorTotalPorProduto).innerHTML = converterParaReal(valorTotal + valorUnitario);
}

function somarValorTotal(produtoId){

    elementId = "valorProduto"+produtoId
    value = document.getElementById(elementId).innerHTML
    valorProduto = parseFloat(value.split(" ")[1])
    value = document.getElementById("valorTotal").innerHTML
    valorTotal = parseFloat(value.split(" ")[1]);
    document.getElementById("valorTotal").innerHTML = converterParaReal(valorTotal + valorProduto);
}

function CarrinhoMais(produtoId){
    elementId = "value"+produtoId;

    somar = "/carrinho/somar/"+produtoId;

    loadCarrinhoHeader(somar);
    document.getElementById(elementId).value++

    somarValorTotal(produtoId);

    somarValorTotalPorProduto(produtoId);
}

function converterParaReal(value){
    return "R$ " + value.toFixed(2);
}