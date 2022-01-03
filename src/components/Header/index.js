import React, { useState } from 'react'
import './header.scss';
import RightNav from './RightNav';

//Pages
// import Home from '../../pages/Home';

const Header = () => {

  const [navStyle, setNavStyle] = useState('');

  const handleClick = () => {
    navStyle ? setNavStyle('') : setNavStyle('is-active');
  };

  return (
    <>
      <div className={`nav ${navStyle}`} onClick={handleClick}>
          <div className="nav-burger"></div>
      </div>
      <RightNav styled={navStyle}/>
    </>
  )
}

export default Header
