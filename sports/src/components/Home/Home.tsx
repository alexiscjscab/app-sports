import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ButtonHome, HomeContainer, ImgHome } from './HomeStyled';
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
        <ImgHome>
          <h3>Welcome to Greenrun Sport</h3>          
          <img src='https://media.tycsports.com/files/2020/12/06/160024/maradona-imagen.jpg' alt='Maradona' />
        </ImgHome>
        <ButtonHome onClick={() => navigate('/login')} colorTheme={darkLight}>
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
