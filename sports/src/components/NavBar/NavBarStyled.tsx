import styled from 'styled-components';
import { PropColorTheme } from '../../types/types';

export const NavTop = styled.nav.attrs((props: PropColorTheme) => ({
  color: props.colorTheme
}))<PropColorTheme>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${(props: any) => props.colorTheme  === 'dark' ? '#fff' :'#000' };
  width: 280px;
  border-radius: 10px;
  font-weight: bold;
  cursor: default;
  .icon {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.2) rotate(360deg);
    }
  }

`

export const NavBottom = styled.nav.attrs((props: PropColorTheme) => ({
  color: props.colorTheme,
  background: props.colorTheme
}))<PropColorTheme>`
  width: 240px;
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${(props: any) => props.colorTheme  === 'dark' ? '#fff' :'#000' };
  margin-top: 30px;
  padding: 10px;
  

  .icon{
    a{
    text-decoration: none;
    color: ${(props: any) => props.colorTheme  === 'dark' ? '#000' :'#fff' }; 
    }
    transition: all 0.3s ease-in-out;
    &:hover{
      transform: scale(1.2);
    }
  }
`