import styled from 'styled-components';
import { PropColorTheme } from '../../types/types';

export const HistoryContainer = styled.div.attrs((props: PropColorTheme) => ({
  background: props.colorTheme,
  color: props.colorTheme,
}))<PropColorTheme>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props: any) => props.colorTheme === 'dark' ? '#000' : '#fff'};
  color: ${(props: any) => (props.colorTheme === 'dark' ? '#fff' : ' #000')};
  .list-container {
    margin: 10px 0px;
  }
`;

export const ListHistory = styled.div.attrs((props: PropColorTheme) => ({
  background: props.colorTheme,
  color: props.colorTheme,
}))<PropColorTheme>`
  background: rgba(30, 30, 30, 0.11);
  color: ${(props: any) => (props.colorTheme === 'dark' ? '#fff' : ' #000')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin: 5px;
  padding: 5px;
  font-weight: bold;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: ${(props: any) => props.colorTheme  === 'dark' ? '0px 4px 15px #fff' : '0px 4px 15px #000' };
  }

  .text-icon {
    display: flex;
    align-items: center;
    p {
      margin-left: 15px;
    }
    img {
      width: 35px;
      height: 35px;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.2) rotate(360deg);
      }
    }
  }
`;
