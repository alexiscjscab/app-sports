import styled from 'styled-components';
import { PropColorTheme } from '../../types/types';

export const Form = styled.form.attrs((props: PropColorTheme) => ({
  background: props.colorTheme,
  color: props.colorTheme
}))<PropColorTheme>`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

input{
  font-size: 18px;
  outline: none;
  border: none;
  margin: 2px;
  background: transparent;
  font-family: 'Architects Daughter', cursive;
  &::placeholder{
    color: ${(props: any) => props.colorTheme  === 'dark' ? '#e2e2e2' : '#050801' };
    font-family: 'Architects Daughter', cursive;
  }
  // dark light
  color: ${(props: any) => props.colorTheme  === 'dark' ? '#e2e2e2' : '#050801' };
}

.divInput {
  padding: 2px;
  display: flex;
  flex-direction: column;
  background: rgba(70,70,70,0.5);
  margin: 5px;
  border-radius: 15px;
  label{
    padding: 4px;
    color: ${(props: any) => props.colorTheme  === 'dark' ? '#e2e2e2' : '#050801' };
    font-weight:300;
  }
}
`

export const TextAcount = styled.div.attrs((props: PropColorTheme) => ({
  color: props.colorTheme
}))<PropColorTheme>`
  margin: 5px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props: any) => props.colorTheme  === 'dark' ? '#e2e2e2' : '#050801' };
  font-size: 18px;
  a{
    text-decoration: none;
    letter-spacing: 2px;
    font-weight: 500;
    text-transform: uppercase;
    //dark light
    color: ${(props: any) => props.colorTheme  === 'dark' ? '#e2e2e2' :' #050801' };
    border-bottom: 1px solid ${(props: any) => props.colorTheme  === 'dark' ? '#e2e2e2' : '#050801' };
    &:hover{
      color: #004ae6;
      border-color: #004ae6;
    }
  }
`

export const FormContent = styled.div.attrs((props: PropColorTheme) => ({
  background: props.colorTheme,
  color: props.colorTheme
}))<PropColorTheme>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  // dark - light
  background: ${(props: any) => props.colorTheme  === 'dark' ? '#050801' : '#e2e2e2' };
  color: color: ${(props: any) => props.colorTheme  === 'dark' ? '#e2e2e2' : '#050801' };
`

export const Title = styled.div.attrs((props: PropColorTheme) => ({
  background: props.colorTheme,
  color: props.colorTheme
}))<PropColorTheme>`
  text-align: center;
  color: ${(props: any) => props.colorTheme  === 'dark' ? '#e2e2e2' : '#050801' };
  margin: 15px 0px;
  h3{
    margin: 5px;
  }
  h1{
    margin: 5px;
  }
`

export const ButtonBlue = styled.button.attrs((props: PropColorTheme) => ({
  'box-shadow': props.colorTheme
}))<PropColorTheme>`
  cursor: pointer;
  padding: 8px;
  outline: none;
  border: none;
  border-radius: 10px;
  background: #004ae6;
  color: #e2e2e2;
  font-size: 18px;
  margin: 10px;
  font-family: 'Architects Daughter', cursive;
  &:hover{
    transform: scale(1.1);
    font-weight: bold;
    box-shadow: ${(props: any) => props.colorTheme === 'dark' ? '0px 0px 10px#e2e2e2' : '0px 0px 10px #050801'}
`;