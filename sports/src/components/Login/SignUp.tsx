import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { State } from '../../reducer/reducer';
import { resetIndex } from '../../actions/actions';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';
import NavBarTop from '../NavBar/NavBarTop';
import NavBarBottom from '../NavBar/NavBarBottom';
import { Alert } from '../Alert/alert';
import { ButtonBlue, Form, FormContent, TextAcount, Title } from './FormStyled';

const SignUp : React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
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
            dispatch(resetIndex());
            navigate('/app-sports');
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
    <FormContent colorTheme={theme}>
      <NavBarTop />
      <Title colorTheme={theme}>
        <h3>Register New User</h3>
      </Title>
      <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => register(e)} colorTheme={theme}>
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
          Sign Up
        </ButtonBlue>
      </Form>
      <TextAcount colorTheme={theme}>
        <p>
          Do you already have an account? <Link to='/login'>Login</Link>
        </p>
      </TextAcount>
      <NavBarBottom />
    </FormContent>
  );
};

export default SignUp;
