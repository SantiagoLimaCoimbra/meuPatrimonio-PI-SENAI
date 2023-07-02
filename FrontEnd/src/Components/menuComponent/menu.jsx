import { React, useRef, useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import '../../css/styles.scss';
import './menu.scss';
import MenuIcon from '../../Assets/icons/menu-light-icon.svg';
import MenuClose from '../../Assets/icons/close-icon.svg';

import { AuthContext } from "../../Contexts/auth";

function NavButton({to, children}){
  return(<NavLink to={to}
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "nav-button-active" : ""
  }>{children}</NavLink>)
}

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
              <NavButton to="/">Bens</NavButton>
            </div>
            <div className="nav-item">
              <NavButton to="/viewCategories">Categorias</NavButton>
            </div>
            <div className="nav-item">
              <NavButton to="/viewEmployees">Funcionários</NavButton>
            </div>
            <div className="nav-item">
              <NavButton to="/viewAreas">Área</NavButton>
            </div>
          </div>
  
          <div className="nav-items-right">
            <div className="nav-item">
              <NavButton to="/viewAudits">Histórico</NavButton>
            </div>
              {/* <Button className="nav-item no-responsive" onClick={handleMenuOpen}><img src={UserIconMenu}/></Button>
              <Menu className="dropdown no-responsive" id="dropdown-user" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose} component={Link} to="/perfil">
                  Perfil
                </MenuItem>
                <MenuItem onClick={handleLogout}>Sair</MenuItem>
              </Menu> */}
            <div className="nav-item responsive">
              <NavButton to={`/viewUser`}>Perfil</NavButton>
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