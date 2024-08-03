import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/np-logo.png';
import CartWidget from './cart-widget';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='container'>
        <ul>
          <NavLink to={'/category/Men Watches'} className={({isActive}) => (isActive ? 'active' : 'no-active')}>
            <li className="Man">MEN</li>
          </NavLink>
          <NavLink to={'/'} className={({isActive}) => (isActive ? 'active' : 'no-active')}>
            <li>|</li>
          </NavLink>
          <NavLink to={'/category/Woman Watches'} className={({isActive}) => (isActive ? 'active' : 'no-active')}>
            <li className="Woman">WOMAN</li>
          </NavLink>
        </ul>
      </div>
      
      <Link to='/' className='logo'>
        <img src={logo} alt="Logo" className='logo'/>
      </Link>

      <div className="search-box">
        <input type="text" placeholder='Search' />
      </div>

      <CartWidget />
    </nav>
  );
};

export default Navbar;
