import { React, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import '../../css/styles.scss';
import './menu.scss';
import MenuIcon from '../../Assets/icons/menu-light-icon.svg';
import MenuClose from '../../Assets/icons/close-icon.svg';

import { AuthContext } from "../../Contexts/auth";

export default function () {

    const navRef = useRef();

	const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
	};

    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    return(
        <div className="navbar"> 
            <div className="nav" ref={navRef}>
                <div className="nav-items-left">
                    <div className="nav-item">
                        <Link to="/">Categorias</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/">Funcionários</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/">Área</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/">Bens</Link>
                    </div>
                </div>

                <div className="nav-items-right">
                    <div className="nav-item">
                        <Link to="/">Valor do Patrimônio</Link>
                    </div>
                    <div className="nav-item">
                        <Link onClick={handleLogout} to="/">Sair</Link>
                    </div>
                </div>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <img src={MenuClose} />                    
                </button>
            </div>
            <button className="nav-btn nav-open-btn" onClick={showNavbar}>
                <img src={MenuIcon} />
            </button>
            <h2>Patrimonium</h2>
        </div>
    )    
}