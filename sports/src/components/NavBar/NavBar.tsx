import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { darkLight } from '../../actions/actions';
import { Nav } from './NavBarStyled';
import {MdOutlineLightMode} from 'react-icons/md';
import {MdOutlineModeNight} from 'react-icons/md';

const NavBar = () => {
  const dispatch = useDispatch();
  const theme = useSelector(
    (state: any) => state.theme
  )

  const changeTheme = () => {
    theme === 'dark' ? dispatch(darkLight('light')) : dispatch(darkLight('dark'));
  }

  return (
    <Nav colorTheme={theme}>
      <div className='icon'>
      {
        theme === 'dark' ? <MdOutlineLightMode size={30} onClick={changeTheme}/> : <MdOutlineModeNight size={30} onClick={changeTheme}/>
      }
      </div>
      <p>Sports</p>
    </Nav>
  )
};

export default NavBar;
