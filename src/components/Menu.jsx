import { Link, useLocation } from "react-router-dom"

export default function Menu() {

    const location = useLocation();

    function menuA() {
        if (location.pathname === '/integrantes' || location.pathname === '/login') {
            return "src/assets/img/menu/close_black.svg";
        } else {
            return "src/assets/img/menu/close_white.svg";
        }
    }
    function menuB() {
        if (location.pathname === '/integrantes' || location.pathname === '/login') {
            return "src/assets/img/menu/menu_black.svg";
        } else {
            return "src/assets/img/menu/menu_white.svg";
        }
    }

    function menuShow() {
        let menuMobile = document.querySelector('.mobile-menu');
        let header = document.querySelector('header');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
            document.querySelector('.icon').src = menuB();
            header.style.borderBottom = '1px solid #34363E';
        } else {
            menuMobile.classList.add('open');
            document.querySelector('.icon').src = menuA();
            header.style.borderBottom = 'none';
        }
    }

    return (
        <header>
            <nav className="nav-bar">
                <div className="nav-list">
                    <ul>
                        <li className="nav-item" id="logo-item"><a href="#" className="nav-link" id="logo">Porto</a></li>
                        <li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to='/vistoria' className="nav-link">Vistoria</Link></li>
                        <li className="nav-item"><Link to='/seguros' className="nav-link">Seguros</Link></li>
                        <li className="nav-item"><Link to='/integrantes' className="nav-link">Integrantes</Link></li>
                    </ul>
                </div>
                <div className="login-button">
                    <button><Link to="/login">Login</Link></button>
                </div>

                <div className="mobile-menu-icon">
                    <button onClick={menuShow}>
                        <img className='icon' src={menuB()} alt="" />
                    </button>
                </div>
            </nav>
            <div className="mobile-menu">
                <ul>
                    <li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to='/vistoria' className="nav-link">Vistoria</Link></li>
                    <li className="nav-item"><Link to='/seguros' className="nav-link">Seguros</Link></li>
                    <li className="nav-item"><Link to='/integrantes' className="nav-link">Integrantes</Link></li>
                </ul>

                <div className="login-button">
                    <button><Link to="/login">Entrar</Link></button>
                </div>
            </div>
        </header>
    )
}