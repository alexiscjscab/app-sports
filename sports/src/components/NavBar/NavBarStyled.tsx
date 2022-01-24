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

  .icon {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.2) rotate(360deg);
    }
  }
`