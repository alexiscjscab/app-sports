import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Form, FormContent, TextAcount, Title, ButtonBlue } from './FormStyled';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../../firebase';
import NavBarTop from '../NavBar/NavBarTop';
import NavBarBottom from '../NavBar/NavBarBottom';
import { Alert } from '../Alert/alert';
import { resetIndex } from '../../actions/actions';

const Login = () => {
  const logout = async () => {
    await signOut(auth);
  };

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState({
    email: '',
  });
  const navigate = useNavigate();
  const darkLight = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          ...user,
          email: `${currentUser.email}`,
        });
        dispatch(resetIndex());
      } else {
        setUser({
          ...user,
          email: '',
        });
      }
    });
  }, []);

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('holaaaa');
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
            setTimeout(() => navigate('/'), 2000);
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
        <FormContent colorTheme={darkLight}>
          <NavBarTop />
          <Title colorTheme={darkLight}>
            <h1>Welcome</h1>
            <h3>Login User</h3>
          </Title>
          <Form onSubmit={(e) => login(e)} colorTheme={darkLight}>
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
            <ButtonBlue type='submit'>Login</ButtonBlue>
          </Form>
          <TextAcount colorTheme={darkLight}>
            <p>
              Don't have an account? <Link to='/signup'> Sign Up </Link>
            </p>
          </TextAcount>
          <NavBarBottom />
        </FormContent>
      ) : (
        <FormContent colorTheme={darkLight}>
          <NavBarTop />
          <Title colorTheme={darkLight}>
            <h1>Welcome</h1>
            <h3>{user.email.split('@')[0]}</h3>
          </Title>
          <ButtonBlue onClick={logout}>Logout</ButtonBlue>
          <NavBarBottom />
        </FormContent>
      )}
    </>
  );
};

export default Login;
