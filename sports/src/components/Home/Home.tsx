import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ButtonHome, HomeContainer } from './HomeStyled';
import NavBarTop from '../NavBar/NavBar';



const Home:React.FC = () => {
  const [user, setUser] = useState({
    email: '',
  });
  const navigate = useNavigate()
  const darkLight = useSelector(
    (state:any) => state.theme
  );
  
  const logout = async () => {
    await signOut(auth);
  };

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
      <h1>Welcome</h1>
      {user.email === '' 
      ? 
      <div>
        <ButtonHome onClick={() => navigate('/login')}>
          Login
        </ButtonHome>
      </div>
      : (
        <div>
          <h4>{user.email.split('@')[0].toUpperCase()}:)</h4>
          <ButtonHome onClick={() => navigate('/match')}>Match Sports</ButtonHome>
          <ButtonHome onClick={logout}>Logout</ButtonHome>
        </div>
      )}
    </HomeContainer>
  );
};

export default Home;
