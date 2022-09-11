import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from '../../reducer/reducer';
import { FaHome, FaHistory, FaUserAlt } from 'react-icons/fa';
import { NavBottom } from './NavBarStyled';

const NavBarBottom : React.FC = () => {
  const { theme } = useSelector((state: State) => state);

  return (
    <NavBottom colorTheme={theme}>
      <div className='icon'>
        <Link to='/app-sports'>
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
