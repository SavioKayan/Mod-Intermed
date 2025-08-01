import { useState } from 'react';
import ProdutosCard from './ProdutosCard'; // Certifique-se de que o caminho está correto
import EditarProduto from './EditarProduto'; // Mantenha se ainda for usado
import './ProdutosCard.css'; // Mantenha seu CSS


function ProdutosLista2({ produtos, carregando, erro, onEditarProduto, onRemoverProduto }) {

  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const handleEditar = (novoProduto) => {
   
    onEditarProduto(novoProduto);
    setProdutoSelecionado(null);
  };

  const handleRemover = (idParaRemover) => {

    const confirmar = window.confirm('Tem certeza que deseja remover este produto?');
    if (!confirmar) return;

    onRemoverProduto(idParaRemover);

    if (produtoSelecionado?.id_unico === idParaRemover) {
      setProdutoSelecionado(null); 
    }
  };

  if (carregando) {
    return (
      <div className="flex items-center justify-center min-h-[200px] font-sans">
        <p className="text-lg text-gray-700">Carregando produtos...</p>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="flex items-center justify-center min-h-[200px] bg-red-100 text-red-700 p-4 rounded-lg shadow-md font-sans">
        <p className="text-lg">{erro}</p>
      </div>
    );
  }

  if (produtos.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[200px] bg-white rounded-lg shadow-md p-6 font-sans">
        <p className="text-xl text-gray-600">Nenhum produto encontrado.</p>
      </div>
    );
  }

  return (
    <div className="container-produtos">
      {produtos.map((produto) => (
        <ProdutosCard
          key={produto.id_unico || produto.id} // Usa id_unico ou id como chave
          produto={produto}
          onEditarClick={() => setProdutoSelecionado(produto)}
          onRemoverClick={handleRemover} // Passa a função de remoção
        />
      ))}

      {produtoSelecionado && (
        <EditarProduto
          key={produtoSelecionado.id_unico} // 🔑 força recriação do componente
          produtoOriginal={produtoSelecionado}
          onEditar={handleEditar}
        />
      )}
    </div>
  );
}

export default ProdutosLista2;