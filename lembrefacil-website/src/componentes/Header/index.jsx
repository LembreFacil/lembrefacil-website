import './style.css'
import logo from '../../assets/logo 1.png'

function Header() {
    return (
      <>
        <header className='header'>
            <nav className="menu-header">
                <img src={logo} alt=""  className='logo-icon'/>
                <ul className="lista-menu-header">
                    <li className="item-menu-header">HOME</li>
                    <li className="item-menu-header">SOBRE NÓS</li>
                    <li className="item-menu-header">EQUIPE</li>
                    <li className="item-menu-header">REDES SOCIAIS</li>
                </ul>
            </nav>
        </header>
      </> 
    )
  }
  
  export default Header
  