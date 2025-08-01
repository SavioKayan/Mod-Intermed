import { useEffect, useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import produtosIniciais from './data/produtos'

import ProdutosCard from './components/ProdutosCard'
import NotFound from './components/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import CadastrarProdutos from './components/CadastrarProdutos'
import Botaonovoproduto from './components/Botaonovoproduto'
import ProdutosLista from './components/ProdutosLista'
import ProdutosLista2 from './components/ProdutosLista2'

import Footer from './components/Footer'
import QuemSomos from './components/pages/QuemSomos'
import PoliticaPrivacidade from './components/pages/PoliticaPrivacidade'
import TermosUso from './components/pages/TermosUso'
import Header from './components/Header'
import useFetchProducts from './services/ClientApi'
import Escrivaninhas from './components/Pages/Escrivaninhas.jsx'
import Sofás from './components/Pages/Sofás.jsx'
import Cadeiras from '../src/components/Pages/Cadeiras.jsx'
import Eletrodomésticos from '../src/components/Pages/Eletrodomésticos'
import EditarProduto from './components/EditarProduto.jsx'

function App() {

  const { listaProdutos, carregando, erro } = useFetchProducts()
  // console.log(listaProdutos)

  const [produtosHook, setProdutosHook] = useState([]);


  useEffect(() => {

    if (!carregando && !erro && listaProdutos.length > 0 && produtosHook.length === 0) {
      console.log("Populating produtosHook from API data:", listaProdutos);
      setProdutosHook(listaProdutos);
    }
  }, [listaProdutos, carregando, erro, produtosHook]);
  
  
  const adicionarNovoProduto = (novoProduto) => {
    const ultimoId = produtosHook.length > 0 ? Math.max(...produtosHook.map(p => p.id_unico)) : 0
    const produtoComId = {
      ...novoProduto,
      id_unico: ultimoId + 1
    }
    setProdutosHook(prev => [...prev, produtoComId])
  }

  // console.log(produtosHook)

  const editarProduto = async (produtoEditado) => {
  try {
    const response = await fetch(
      `https://688c21ddcd9d22dda5cc2687.mockapi.io/projetointer/trab/trab/${produtoEditado.id_unico}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(produtoEditado),
      }
    );

    if (!response.ok) {
      throw new Error('Erro ao editar produto na API');
    }

    const produtoAtualizado = await response.json();

    // Atualiza estado local
    const atualizados = produtosHook.map((p) =>
      p.id_unico === produtoAtualizado.id_unico ? produtoAtualizado : p
    );
    setProdutosHook(atualizados);
  } catch (error) {
    console.error(error);
    alert('Falha ao editar produto. Tente novamente.');
  }
};

const removerProduto = async (idParaRemover) => {
  try {
    const response = await fetch(
      `https://688c21ddcd9d22dda5cc2687.mockapi.io/projetointer/trab/trab/${idParaRemover}`,
      {
        method: 'DELETE',
      }
    );

    if (!response.ok) {
      throw new Error('Erro ao remover produto da API');
    }

    setProdutosHook((prev) =>
      prev.filter((p) => p.id_unico !== idParaRemover)
    );
  } catch (error) {
    console.error(error);
    alert('Falha ao remover produto. Tente novamente.');
  }
};

  return (
    <div>
      <Header />
      <BrowserRouter>
        <main>
          <Botaonovoproduto />

          <Routes>
            <Route path='/' element={<ProdutosLista2
              produtos={produtosHook}
              carregando={carregando}
              erro={erro}
              onEditarProduto={editarProduto}
              onRemoverProduto={removerProduto}>
              
            </ProdutosLista2>}></Route>
            <Route path="/Cadastrar" element={<CadastrarProdutos onCadastrar={(adicionarNovoProduto) => console.log(adicionarNovoProduto)} />}></Route>
           
            <Route
              path="/Escrivaninhas"
              element={
                <Escrivaninhas
                  produtos={produtosHook}
                  carregando={carregando}
                  erro={erro}
                />
              }
            />
            <Route
              path="/Sofás"
              element={
                <Sofás
                  produtos={produtosHook}
                  carregando={carregando}
                  erro={erro}
                />
              }
            />
            
            <Route
              path="/Cadeiras"
              element={<Cadeiras
                produtos={produtosHook}
                carregando={carregando}
                erro={erro} />} />

            <Route
              path="/Eletrodomésticos"
              element={<Eletrodomésticos
                produtos={produtosHook}
                carregando={carregando}
                erro={erro} />} />

            <Route path="*" element={<NotFound />}></Route>
            
            {/* <Route path='lista' element={<ListProducts/>}></Route> */}



            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/termos-uso" element={<TermosUso />} />

          </Routes>

        </main>

        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App

