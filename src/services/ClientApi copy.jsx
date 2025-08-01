import React, { useState, useEffect } from 'react';
import ProdutosCard from '../components/ProdutosCard';

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        setError(null);

        
        const response = await fetch('https://688c21ddcd9d22dda5cc2687.mockapi.io/projetointer/trab/trab', {
          method: 'GET',
          headers: { 'Content-type': 'application/json' },
        });

        
        if (!response.ok) {
          
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        
        const data = await response.json();
        
        setProducts(data);
      } catch (err) {
        
        console.error("Failed to fetch products:", err);
        
        setError('Erro ao carregar os produtos. Por favor, tente novamente mais tarde.');
      } finally {
        
        setLoading(false);
      }
    };

    
    fetchProducts();
  }, []); 

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-700">Carregando produtos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-100 text-red-700 p-4 rounded-lg shadow-md">
        <p className="text-lg">{error}</p>
      </div>
    );
  }

  
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8 sm:mb-10">Nossos Produtos</h1>
      {products.length === 0 ? (
        <div className="flex items-center justify-center min-h-[200px] bg-white rounded-lg shadow-md p-6">
          <p className="text-xl text-gray-600">Nenhum produto encontrado.</p>
        </div>
      ) : (
        <div>
          {products.map((produto) => (
            <ProdutosCard  key={produto.id_unico} produto={produto}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListProducts;
