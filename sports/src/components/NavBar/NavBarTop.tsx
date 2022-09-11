import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../reducer/reducer';
import { darkLight } from '../../actions/actions';
import {MdOutlineLightMode, MdOutlineModeNight} from 'react-icons/md';
import { NavTop } from './NavBarStyled';

const NavBarTop : React.FC = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: State) => state)

  const changeTheme = () => {
    theme === 'dark' ? dispatch(darkLight('light')) : dispatch(darkLight('dark'));
  }

  return (
    <NavTop colorTheme={theme}>
      <div className='icon'>
      {
        theme === 'dark' ? <MdOutlineLightMode size={30} onClick={changeTheme}/> : <MdOutlineModeNight size={30} onClick={changeTheme}/>
      }
      </div>
      <p>Greenrun Sport</p>
    </NavTop>
  )
};

export default NavBarTop;
