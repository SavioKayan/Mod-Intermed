import React from 'react';
import './ProdutosCard.css'


const ProdutosCard = ({ produto, onEditarClick, onRemoverClick }) => {
  return (
    <div className='produtos-container'>
      
      <div className="card-produto">
        <div className="card-topo">
          <div className="estrelas">★★★★★</div>
          <button className="editar" onClick={onEditarClick}>✏️</button>
        </div>

        <img src={produto.url_imagem} alt={produto.descricao} className="imagem-produto" />

        <div className="descricao">
          <strong>DESCRIÇÃO:</strong>
          <p className="d1">{produto.descricao}</p>
          <p className="d2"><strong>{produto.quantidade_estoque}</strong> NO ESTOQUE</p>
        </div>

        <div className="preco">
          <strong>PREÇO:</strong>
          <p className="p1">R$ {produto.preco.toFixed(2)} à vista ou PIX</p>
          <p className="p2">Parcelado em 6x sem juros</p>
        </div>

        <button className="remover" onClick={() => onRemoverClick(produto.id_unico)}>Remover</button>
      </div>
    </div>
  );
}

export default ProdutosCard;
