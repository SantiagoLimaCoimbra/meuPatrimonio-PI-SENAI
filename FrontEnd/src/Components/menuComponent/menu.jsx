import { React, useRef, useContext, useState } from "react";
import { Link } from "react-router-dom";
import '../../css/styles.scss';
import './menu.scss';
import MenuIcon from '../../Assets/icons/menu-light-icon.svg';
import MenuClose from '../../Assets/icons/close-icon.svg';

import { AuthContext } from "../../Contexts/auth";

export default function () {

    const navRef = useRef();
    const { logout, user } = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = useState(null);

	  const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
	  };

    const handleLogout = () => {
        logout();
    }

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMenuClose = () => {
        setAnchorEl(null);
      };

    return(
        <div className="navbar">
        <div className="nav" ref={navRef}>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <h2>Patrimonium</h2>
            <img src={MenuClose} alt="Close" />
          </button>
          <div className="nav-items-left">
            <div className="nav-item">
              <Link to="/">Bens</Link>
            </div>
            <div className="nav-item">
              <Link to="/viewCategories">Categorias</Link>
            </div>
            <div className="nav-item">
              <Link to="/viewEmployees">Funcionários</Link>
            </div>
            <div className="nav-item">
              <Link to="/">Área</Link>
            </div>
          </div>
  
          <div className="nav-items-right">
            <div className="nav-item">
              <Link to="/">Histórico</Link>
            </div>
              {/* <Button className="nav-item no-responsive" onClick={handleMenuOpen}><img src={UserIconMenu}/></Button>
              <Menu className="dropdown no-responsive" id="dropdown-user" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose} component={Link} to="/perfil">
                  Perfil
                </MenuItem>
                <MenuItem onClick={handleLogout}>Sair</MenuItem>
              </Menu> */}
            <div className="nav-item responsive">
              <Link to={`/viewUser`}>Perfil</Link>
            </div>
            <div className="nav-item responsive" onClick={handleLogout}>
              <Link to="/">Sair</Link>
            </div>
          </div>
        </div>
        <button className="nav-btn nav-open-btn" onClick={showNavbar}>
          <img src={MenuIcon} alt="Menu" />
        </button>
        <h2>Patrimonium</h2>
      </div>
    )    
}