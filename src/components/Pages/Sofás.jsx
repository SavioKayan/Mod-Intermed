import { useState, useEffect } from 'react';
import useFetchProducts from '../../services/ClientApi';
import ProdutosCard from '../ProdutosCard';
import EditarProduto from '../EditarProduto';
import '../Pages/SPNH.css';

const Sófas = () => {
  const { listaProdutos: dadosIniciais, carregando, erro } = useFetchProducts();

  const [listaProdutos, setListaProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [statusMensagem, setStatusMensagem] = useState('');

  // Sincronizar com dados iniciais uma única vez
  useEffect(() => {
    if (dadosIniciais.length > 0) {
      setListaProdutos(dadosIniciais);
    }
  }, [dadosIniciais]);

  // Atualiza produto na API e no estado
  const handleEditarProduto = async (produtoAtualizado) => {
    try {
      const response = await fetch(
        `https://688c21ddcd9d22dda5cc2687.mockapi.io/projetointer/trab/trab/${produtoAtualizado.id_unico}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(produtoAtualizado),
        }
      );

      if (!response.ok) {
        throw new Error('Erro ao salvar alterações na API');
      }

      const dadosSalvos = await response.json();

      setListaProdutos((anteriores) =>
        anteriores.map((p) =>
          p.id_unico === dadosSalvos.id_unico ? dadosSalvos : p
        )
      );

      setProdutoSelecionado(null);
      setStatusMensagem('Produto atualizado com sucesso!');
    } catch (error) {
      console.error(error);
      setStatusMensagem('Falha ao atualizar produto. Tente novamente.');
    }
  };

  // Remove produto via API e local
  const handleRemoverProduto = async (idParaRemover) => {
    const confirmar = window.confirm('Tem certeza que deseja remover este produto?');
    if (!confirmar) return;

    try {
      const response = await fetch(
        `https://688c21ddcd9d22dda5cc2687.mockapi.io/projetointer/trab/trab/${idParaRemover}`,
        { method: 'DELETE' }
      );

      if (!response.ok) {
        throw new Error('Erro ao remover da API');
      }

      setListaProdutos((anteriores) =>
        anteriores.filter((p) => p.id_unico !== idParaRemover)
      );

      setStatusMensagem('Produto removido com sucesso!');
      if (produtoSelecionado?.id_unico === idParaRemover) {
        setProdutoSelecionado(null);
      }
    } catch (err) {
      console.error(err);
      setStatusMensagem('Falha ao remover produto.');
    }
  };

  const produtosFiltrados = listaProdutos.filter(
    (produto) => produto.categoria === 'Sofás'
  );

  if (carregando) return <p>Carregando produtos...</p>;
  if (erro) return <p>{erro}</p>;

  return (
    <div>
      <h2>Sofás</h2>
      <div className="pagina-categoria">


        {statusMensagem && (
          <p className="mensagem-status">{statusMensagem}</p>
        )}

        <div className="lista-produtos-categoria">
          {produtosFiltrados.length > 0 ? (
            produtosFiltrados.map((p) => (
              <ProdutosCard
                key={p.id_unico}
                produto={p}
                onEditarClick={() => setProdutoSelecionado(p)}
                onRemoverClick={handleRemoverProduto}
              />
            ))
          ) : (
            <p>Nenhum produto encontrado nesta categoria.</p>
          )}
        </div>

        {produtoSelecionado && (
          <EditarProduto
            key={produtoSelecionado.id_unico}
            produtoOriginal={produtoSelecionado}
            onEditar={handleEditarProduto}
          />
        )}
      </div>
    </div>
  );
};

export default Sófas;


