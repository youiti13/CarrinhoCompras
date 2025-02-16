let totalGeral = 0 
document.getElementById('lista-produtos').innerHTML = ''
document.getElementById('valor-total').textContent = 'R$ 0 '
function adicionar () {
   
    let quantidade = document.getElementById('quantidade').value
    if (quantidade > 100){
        alert('Você inseriu uma quantidade acima do normal, o numero maximo de produtos por pessoa é 100')
        return
    }
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
   
    let preco = quantidade  * valorUnitario;
  
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML =  carrinho.innerHTML +  ` <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
        </section>`;
    
    
   

    totalGeral = totalGeral + preco ;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar () {
     totalGeral = 0 
    document.getElementById('lista-produtos').innerHTML = ''
    document.getElementById('valor-total').textContent = 'R$ 0 '
}