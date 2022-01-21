import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Form, FormContent, TextAcount, Title } from './FormStyled';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  
} from 'firebase/auth';
import { auth } from '../../firebase';
import NavBar from '../NavBar/NavBar';

const Login = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.email);
        navigate('/');
      } else {
        console.log('no user');
      }
    });
  }, []);
  
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const darkLight = useSelector(
    (state: any) => state.theme
  )
  

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('holaaaa')
    if (!email.trim() || !password.trim()) {
      alert('Please enter an email and password');
    } else {
      await signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          if (user) {
            console.log(user);
            setEmail('');
            setPassword('');
            alert('succes')
            navigate('/');
          } 
        })
        .catch((error) => {
          alert(error)
        });
    }
  };

  return (
    <FormContent colorTheme={darkLight}>
      <NavBar />
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
        <input type='submit' value='Login' />
      </Form>
      <TextAcount colorTheme={darkLight}>
        <p>
          Don't have an account? <Link to='/signup'> Sign Up </Link>
        </p>
      </TextAcount>
    </FormContent>
  );
};

export default Login;
