import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/np-logo.png'
import CartWidget from './cart-widget'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li className='Man'>MAN</li>
            <li>|</li>
            <li className='Woman'>WOMAN</li>
        </ul>

        <a href="#" className='logo'><img src={logo} alt="#" className='logo'/></a>

        <div className="search-box">
            <input type="text" placeholder='Search' />
            <img src="" alt="" />
        </div>
       <CartWidget/>

    </div>
)
}
export default Navbar  