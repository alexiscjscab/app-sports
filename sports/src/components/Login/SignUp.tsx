import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Form, FormContent, TextAcount, Title } from './FormStyled';
import { createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { auth } from '../../firebase';
import NavBarTop from '../NavBar/NavBarTop';
import { Alert } from '../Alert/alert';

const SignUp = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const darkLight = useSelector(
    (state: any) => state.theme
  );
  
  const register = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      Alert(
        'Please enter an email and password',
        'error'
      )
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          if (user) {
            setEmail('');
            setPassword('');
            Alert(
              'Welcome New User',
              'success'
            )
            navigate('/');
          }
        })
        .catch((error) => {
          Alert(
            `${error.message}`,
            'error'
          )
        });
    }
  };

  return (
    <FormContent colorTheme={darkLight}>
      <NavBarTop />
      <Title colorTheme={darkLight}>
        <h1>Welcome</h1>
        <h3>Register New User</h3>
      </Title>
      <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => register(e)} colorTheme={darkLight}>
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
        <input type='submit' value='Sign Up' />
      </Form>
      <TextAcount colorTheme={darkLight}>
        <p>
          Do you already have an account? <Link to='/login'>Login</Link>
        </p>
      </TextAcount>
    </FormContent>
  );
};

export default SignUp;
