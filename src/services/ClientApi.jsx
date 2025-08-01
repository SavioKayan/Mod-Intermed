import { useState, useEffect } from 'react';

const useFetchProducts = () => {
  
  const [listaProdutos, setProducts] = useState([]);
  
  const [carregando, setLoading] = useState(true);
  
  const [erro, setError] = useState(null);

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
          
          throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        
        const data = await response.json();
        setProducts(data); 
      } catch (err) {
        
        console.error("Falha ao buscar produtos:", err);
        setError('Erro ao carregar os produtos. Por favor, tente novamente mais tarde.');
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts(); 
  }, []);

  return { listaProdutos, carregando, erro};
};

export default useFetchProducts;