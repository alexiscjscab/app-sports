import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavBottom } from './NavBarStyled';
import { FaHome, FaHistory, FaUserAlt } from 'react-icons/fa';

const NavBarBottom = () => {
  const darkLight = useSelector((state: any) => state.theme);

  return (
    <NavBottom colorTheme={darkLight}>
      <div className='icon'>
        <Link to='/'>
          <FaHome size={25} />
        </Link>
      </div>
      <div className='icon'>
        <Link to='/history'>
          <FaHistory size={25} />
        </Link>
      </div>
      <div className='icon'>
        <Link to='/login'>
          <FaUserAlt size={25} />
        </Link>
      </div>
    </NavBottom>
  );
};

export default NavBarBottom;
