import './Botaonovoproduto.css'

function Botaonovoproduto() {
  return (
    <div className='botao-novo-produto'>
      <nav>
        <a className='a1-addprodutos' href="/Cadastrar">
          <button className="novo-produto">+ Novo Produto</button>
        </a>
      </nav>
    </div>
    
  ); 
}

export default Botaonovoproduto;