import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ButtonHome, HomeContainer } from './HomeStyled';
import NavBarTop from '../NavBar/NavBarTop';
import NavBarBottom from '../NavBar/NavBarBottom';
import Match from '../Match/Match';


const Home:React.FC = () => {
  const [user, setUser] = useState({
    email: '',
  });
  const navigate = useNavigate()
  const darkLight = useSelector(
    (state:any) => state.theme
  );
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          ...user,
          email: `${currentUser.email}`,
        });
      } else {
        setUser({
          ...user,
          email: '',
        });
      }
    });
  }, []);

  return (
    <HomeContainer colorTheme={darkLight}>
      <NavBarTop />
      {user.email === '' 
      ? 
      <>
        <ButtonHome onClick={() => navigate('/login')}>
          Login
        </ButtonHome>
      </>
      : (
        <>
          <Match />
        </>
      )}
      <NavBarBottom />
    </HomeContainer>
  );
};

export default Home;
