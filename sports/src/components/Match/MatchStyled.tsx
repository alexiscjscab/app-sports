import styled from 'styled-components';
import { PropColorTheme } from '../../types/types';

export const MatchContainer = styled.div.attrs((props: PropColorTheme) => ({
  background: props.colorTheme,
  color: props.colorTheme
}))<PropColorTheme>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props: any) => props.colorTheme  === 'dark' ? '#000' : '#fff' };
  color: ${(props: any) => props.colorTheme  === 'dark' ? '#fff' :' #000' };

  .loading{
    margin-top: 60px;
  }
`