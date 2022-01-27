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
  background: ${(props: any) => props.colorTheme  === 'dark' ? '#050801' : '#e2e2e2' };
  color: ${(props: any) => props.colorTheme  === 'dark' ? '#e2e2e2' : '#050801' };

  .loading{
    margin-top: 60px;
  }
`