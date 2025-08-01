import React, { useState } from 'react';
import '../components/EditarProduto.css'

function EditarProduto({ produtoOriginal, onEditar }) {
  const [descricao, setDescricao] = useState(produtoOriginal.descricao || '');
  const [preco, setPreco] = useState(produtoOriginal.preco || '');
  const [quantidadeEstoque, setQuantidadeEstoque] = useState(produtoOriginal.quantidade_estoque || '');
  const [urlImagem, setUrlImagem] = useState(produtoOriginal.url_imagem || '');
  const [categoria, setCategoria] = useState(produtoOriginal.categoria || '');
  const [disponibilidade, setDisponibilidade] = useState(produtoOriginal.disponibilidade ?? true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!descricao || !preco || !quantidadeEstoque || !categoria || !urlImagem) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const novaEdicao = {
      id_unico: produtoOriginal.id_unico,
      descricao,
      preco: parseFloat(preco),
      quantidade_estoque: parseInt(quantidadeEstoque),
      url_imagem: urlImagem,
      categoria,
      disponibilidade,
    };

    onEditar(novaEdicao);

    // Limpar os campos
    setDescricao('');
    setPreco('');
    setQuantidadeEstoque('');
    setUrlImagem('');
    setCategoria('');
    setDisponibilidade("");
  };

  return (
    <div className="editar-produto-container">
      {/* Formulário acima */}
      <form onSubmit={handleSubmit} className="form-produto">
        <h2>Editar Produto</h2>

        <div className="form-group">
          <label htmlFor="descricao">Descrição:</label>
          <input
            type="text"
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="preco">Preço:</label>
          <input
            type="number"
            id="preco"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantidadeEstoque">Quantidade em Estoque:</label>
          <input
            type="number"
            id="quantidadeEstoque"
            value={quantidadeEstoque}
            onChange={(e) => setQuantidadeEstoque(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="urlImagem">URL da Imagem:</label>
          <input
            type="text"
            id="urlImagem"
            value={urlImagem}
            onChange={(e) => setUrlImagem(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="categoria">Categoria:</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          >
            <option value="">Selecione uma categoria</option>
            <option value="Cadeiras">Cadeiras</option>
            <option value="Sofás">Sofás</option>
            <option value="Eletrodomésticos">Eletrodomésticos</option>
            <option value="Escrivaninhas">Escrivaninhas</option>
            </select>
        </div>

        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="disponibilidade"
            checked={disponibilidade}
            onChange={(e) => setDisponibilidade(e.target.checked)}
          />
          <label htmlFor="disponibilidade">Disponível</label>
        </div>

        <button type="submit" className="btn-salvar">
          Salvar Alterações
        </button>
      </form>

      {/* Informações do produto abaixo ou ao lado */}
      <div className="imagem-produto">
        <img src={urlImagem} alt="Imagem do Produto" />
        <p className="info-produto"><strong>Descrição:</strong> {descricao}</p>
        <p className="info-produto"><strong>Categoria:</strong> {categoria}</p>
        <p className="info-produto"><strong>Preço:</strong> R$ {preco}</p>
        <p className="info-produto"><strong>Estoque:</strong> {quantidadeEstoque}</p>
      </div>
    </div>
  );
}

export default EditarProduto;