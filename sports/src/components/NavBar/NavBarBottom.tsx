import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NavBottom } from './NavBarStyled';
import { FaHome, FaHistory, FaUserAlt } from 'react-icons/fa';

const NavBarBottom = () => {
  const darkLight = useSelector((state: any) => state.theme);

  return (
    <NavBottom colorTheme={darkLight}>
      <div className='icon'>
        <NavLink to='/'>
          <FaHome size={25} />
        </NavLink>
      </div>
      <div className='icon'>
        <NavLink to='/history'>
          <FaHistory size={25} />
        </NavLink>
      </div>
      <div className='icon'>
        <NavLink to='/login'>
          <FaUserAlt size={25} />
        </NavLink>
      </div>
    </NavBottom>
  );
};

export default NavBarBottom;
