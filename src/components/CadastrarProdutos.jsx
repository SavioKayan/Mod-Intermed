import React, { useState } from 'react';
import './CadrastrarProdutos.css'

function CadastrarProdutos() {
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidadeEstoque, setQuantidadeEstoque] = useState('');
  const [urlImagem, setUrlImagem] = useState('');
  const [categoria, setCategoria] = useState('');
  const [disponibilidade, setDisponibilidade] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!descricao || !preco || !quantidadeEstoque || !categoria || !urlImagem) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const novoProduto = {
      descricao,
      preco: parseFloat(preco),
      quantidade_estoque: parseInt(quantidadeEstoque),
      url_imagem: urlImagem,
      categoria,
      disponibilidade
    };

    try {
      const response = await fetch('https://688c21ddcd9d22dda5cc2687.mockapi.io/projetointer/trab/trab/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoProduto)
      });

      if (!response.ok) {
        throw new Error(`Erro ao cadastrar produto: ${response.status}`);
      }

      const result = await response.json();
      console.log("Produto cadastrado com sucesso:", result);
      alert("Produto cadastrado com sucesso!");

      // Resetar o formulário
      setDescricao('');
      setPreco('');
      setQuantidadeEstoque('');
      setUrlImagem('');
      setCategoria('');
      setDisponibilidade(true);

    } catch (error) {
      console.error(error);
      alert("Falha ao cadastrar produto. Tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='formulario-container'>
      <h2>Cadastrar Novo Produto</h2>

      <div className="formulario-descricao">
        <label>Descrição:</label>
        <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
      </div>

      <div className="formulario-preco">
        <label>Preço:</label>
        <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} step="0.01" required />
      </div>

      <div className="formulario-estoque">
        <label>Quantidade em Estoque:</label>
        <input type="number" value={quantidadeEstoque} onChange={(e) => setQuantidadeEstoque(e.target.value)} required />
      </div>

      <div className="formulario-URL-imagem">
        <label>URL da Imagem:</label>
        <input type="text" value={urlImagem} onChange={(e) => setUrlImagem(e.target.value)} required />
      </div>

      <div className="formulario-categoria-SNHP">
        <label>Categoria:</label>
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
          <option value="">Selecione uma categoria</option>
          <option value="Cadeiras">Cadeiras</option>
          <option value="Sofás">Sofás</option>
          <option value="Eletrodomésticos">Eletrodomésticos</option>
          <option value="Escrivaninhas">Escrivaninhas</option>
        </select>
      </div>

      <div className="formulario-checkbox">
        <label>
          <input type="checkbox" checked={disponibilidade} onChange={(e) => setDisponibilidade(e.target.checked)} />
          Disponível
        </label>
      </div>

      <button type="submit">Cadastrar Produto</button>
    </form>
  );
}

export default CadastrarProdutos;