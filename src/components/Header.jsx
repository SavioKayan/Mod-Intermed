import './Header.css'
import { FaLaptopCode, FaSearch, FaUserCircle, } from 'react-icons/fa';

const Header = () => {

  return (
    <header className="header">
      <div className='logo-Geral'>
        <h1 className='logo-Titulo'> <img src="/public/cama.png" alt="Logo" width={40} /><a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Tudo Móveis</a></h1>
      </div>

      <div className='search-bar'>
        <input className='input-search' type="search" placeholder='BUSQUE NA TUDO MÓVEIS' />
        <button className='search-button' onClick={() => console.log("Buscar produto")}><FaSearch /></button>
      </div>

      

      <nav className="categorias">
        <a href="/Cadeiras"><img src="/public/cadeira.png" alt="Cadeiras" width={30} align-item="inherit" />Cadeiras<span >
        </span> </a>
        <a href="/Sofás"><img src="/public/sofá.png" alt="Sofás" width={30} align-item="inherit"/><span>Sofás</span></a>
        <a href="/Eletrodomésticos"><img src="/public/Eletrodomésticos.png" alt="Eletrodomésticos" width={30} align-item="inherit" /><span>
        </span> Eletrodomésticos</a>
        <a href="/Escrivaninhas"> <img src="/public/Escrivaninhas.png" alt="Escrivaninhas" width={50} align-item="inherit"/><span>
        </span>Escrivaninhas</a>
      </nav>
    </header>
  );
}

export default Header;