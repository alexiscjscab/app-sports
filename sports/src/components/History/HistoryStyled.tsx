import styled from 'styled-components';
import { PropColorTheme } from '../../types/types';

export const HistoryContainer = styled.div.attrs((props: PropColorTheme) => ({
  background: props.colorTheme,
  color: props.colorTheme,
}))<PropColorTheme>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props: any) => props.colorTheme === 'dark' ? '#050801' : '#e2e2e2'};
  color: ${(props: any) => (props.colorTheme === 'dark' ? '#e2e2e2' : '#050801')};
  .list-container {
    margin: 10px 0px;
    .list {
      height: 320px;
      overflow-y: scroll;
    }
  }
`;

export const ListHistory = styled.div.attrs((props: PropColorTheme) => ({
  background: props.colorTheme,
  color: props.colorTheme,
}))<PropColorTheme>`
  background: rgba(30, 30, 30, 0.11);
  color: ${(props: any) => (props.colorTheme === 'dark' ? '#e2e2e2' : '#050801')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  margin: 5px;
  padding: 5px;
  font-weight: bold;
  border-radius: 10px;
  cursor: default;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: ${(props: any) => props.colorTheme  === 'dark' ? '0px 4px 15px #e2e2e2' : '0px 4px 15px #050801' };
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
        transform: rotate(360deg);
      }
    }
  }
`;
