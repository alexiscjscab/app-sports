import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuthHooks';
import { State } from '../../reducer/reducer';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import NavBarTop from '../NavBar/NavBarTop';
import NavBarBottom from '../NavBar/NavBarBottom';
import { Alert } from '../Alert/alert';
import { Form, FormContent, TextAcount, Title, ButtonBlue } from './FormStyled';
import { resetIndex } from '../../actions/actions';

const Login : React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { theme } = useSelector((state: State) => state);
  const user = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const logout = async () => {
    await signOut(auth);
    dispatch(resetIndex())
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // hacer validacion email y password
    if (!email.trim() || !password.trim()) {
      alert('Please enter an email and password');
    } else {
      await signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          if (user) {
            console.log(user);
            setEmail('');
            setPassword('');
            Alert('Welcome Back', 'success');
            setTimeout(() => navigate('/app-sports'), 2000);
          }
        })
        .catch((error) => {
          Alert(`${error.message}`, 'error');
        });
    }
  };

  return (
    <>
      {user.email === '' ? (
        <FormContent colorTheme={theme}>
          <NavBarTop />
          <Title colorTheme={theme}>
            <h3>Login User</h3>
          </Title>
          <Form onSubmit={(e) => login(e)} colorTheme={theme}>
            <div className='divInput'>
              <label>User</label>
              <input
                type='email'
                placeholder='Email'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                value={email}
                required
              />
            </div>
            <div className='divInput'>
              <label>Password</label>
              <input
                type='password'
                placeholder='Password'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                value={password}
                required
              />
            </div>
            <ButtonBlue 
              type='submit'
              colorTheme={theme}
            >
              Login
            </ButtonBlue>
          </Form>
          <TextAcount colorTheme={theme}>
            <p>
              Don't have an account? <Link to='/signup'> Sign Up </Link>
            </p>
          </TextAcount>
          <NavBarBottom />
        </FormContent>
      ) : (
        <FormContent colorTheme={theme}>
          <NavBarTop />
          <Title colorTheme={theme}>
            <h1>Welcome</h1>
            <h3>{user.email.split('@')[0]}</h3>
          </Title>
          <ButtonBlue 
            onClick={logout}
            colorTheme={theme}
          >
            Logout
          </ButtonBlue>
          <NavBarBottom />
        </FormContent>
      )}
    </>
  );
};

export default Login;
