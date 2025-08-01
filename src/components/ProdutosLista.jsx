import React, { useState } from 'react';
// import produtos from '../data/produtos';
import ProdutosCard from './ProdutosCard.jsx';
import EditarProduto from './EditarProduto.jsx';
import './ProdutosLista.css'


function ProdutosLista({produtos}) {
  console.log(produtos)
  const [listaProdutos, setListaProdutos] = useState(produtos);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const handleEditar = (novoProduto) => {
    const atualizados = listaProdutos.map((p) =>
      p.id_unico === produtoSelecionado.id_unico ? { ...p, ...novoProduto } : p
    );
    setListaProdutos(atualizados);
    setProdutoSelecionado(null);
  };

  const handleRemover = (idParaRemover) => {
    console.log('chamei')
    const confirmar = window.confirm('Tem certeza que deseja remover este produto?');
    if (!confirmar) return;

    const novaLista = listaProdutos.filter((p) => p.id_unico !== idParaRemover);
    setListaProdutos(novaLista);

    if (produtoSelecionado?.id_unico === idParaRemover) {
      setProdutoSelecionado(null);
    }
  };

  return (
    <div className="container-produtos">
  
      {listaProdutos.map((produto) => (
        <ProdutosCard
          key={produto.id_unico}
          produto={produto}
          onEditarClick={() => setProdutoSelecionado(produto)}
          onRemoverClick={handleRemover}
        />
      ))}
      
      {produtoSelecionado && (
        <EditarProduto
          produtoOriginal={produtoSelecionado}
          onEditar={handleEditar}
        />
      )}
    </div>
  );
}

export default ProdutosLista;
