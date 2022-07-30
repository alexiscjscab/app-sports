import styled from 'styled-components';
import { PropColorTheme } from '../../types/types';



export const HomeContainer = styled.div.attrs((props: PropColorTheme) => ({
  background: props.colorTheme,
  color: props.colorTheme
}))<PropColorTheme>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // dark ligth
  background: ${(props: any) => props.colorTheme  === 'dark' ? '#050801' : '#e2e2e2' };
  color: ${(props: any) => props.colorTheme  === 'dark' ? '#e2e2e2' :' #050801' };
`


export const ButtonHome = styled.button.attrs((props: PropColorTheme) => ({
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
  margin: 15px;
  font-family: 'Architects Daughter', cursive;
  &:hover{
    transform: scale(1.1);
    font-weight: bold;
    box-shadow: ${(props: any) => props.colorTheme === 'dark' ? '0px 0px 10px#e2e2e2' : '0px 0px 10px #050801'}
  }
  
`;

export  const ImgHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin:10px;
  h3{
    margin-bottom: 10px;
  }
  img{
    width: 280px;
    height: 240px;
    border-radius:10px;
    filter:drop-shadow(8px 8px 10px gray);
    margin-bottom: 5px;
    transition: all 0.3s ease-in-out;
    &:hover{
      transform: scale(1.1);
    }
  }
`