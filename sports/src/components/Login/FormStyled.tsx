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
  &::placeholder{
    color: ${(props: any) => props.colorTheme  === 'dark' ? '#fff' :' #000' };
  }
  // dark light
  color: ${(props: any) => props.colorTheme  === 'dark' ? '#fff' :' #000' };
}
input[type=submit]{
 cursor: pointer;
 padding: 8px;
 outline: none;
 border: none;
 border-radius: 10px;
 background: blue;
 color: #fff;
 transition: all 0.3s ease-in-out;
 &:hover{
  transform: scale(1.1);
  font-weight: bold;
  box-shadow: 0px 0px 10px #fff;
}
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
    color: ${(props: any) => props.colorTheme  === 'dark' ? '#fff' :' #000' };
    font-weight:300;
  }
}
`

export const TextAcount = styled.div.attrs((props: PropColorTheme) => ({
  color: props.colorTheme
}))<PropColorTheme>`

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props: any) => props.colorTheme  === 'dark' ? '#fff' :' #000' };
  a{
    text-decoration: none;
    letter-spacing: 2px;
    font-weight: 500;
    text-transform: uppercase;
    //dark light
    color: ${(props: any) => props.colorTheme  === 'dark' ? '#fff' :' #000' };
    border-bottom: 1px solid #fff;
    &:hover{
      color: blue;
      border-color: blue;
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
  background: ${(props: any) => props.colorTheme  === 'dark' ? '#000' : '#fff' };
  color: color: ${(props: any) => props.colorTheme  === 'dark' ? '#fff' :' #000' };
`

export const Title = styled.div.attrs((props: PropColorTheme) => ({
  background: props.colorTheme,
  color: props.colorTheme
}))<PropColorTheme>`
  text-align: center;
  color: ${(props: any) => props.colorTheme  === 'dark' ? '#fff' :' #000' };
`