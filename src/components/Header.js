import React from 'react';
import Logo from '../Img/logo.png';
import '../App.css';

const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src={Logo} alt='logo' />
        <p className='h-text'>Eden</p>
    </div>
  )
}

export default Header;