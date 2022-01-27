import styled from 'styled-components';
import { PropColorTheme } from '../../types/types';



export const HomeContainer = styled.div.attrs((props: PropColorTheme) => ({
  background: props.colorTheme,
  color: props.colorTheme
}))<PropColorTheme>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // dark ligth
  background: ${(props: any) => props.colorTheme  === 'dark' ? '#000' : '#fff' };
  color: ${(props: any) => props.colorTheme  === 'dark' ? '#fff' :' #000' };
`


export const ButtonHome = styled.button`
  cursor: pointer;
  padding: 8px;
  outline: none;
  border: none;
  border-radius: 10px;
  background: blue;
  color: #fff;
  font-size: 18px;
  margin: 10px;
  font-family: 'Architects Daughter', cursive;
  &:hover{
    transform: scale(1.1);
    font-weight: bold;
    box-shadow: 0px 0px 10px #fff;
  }
  
`;