import styled from 'styled-components';
import { PropColorTheme } from '../../types/types';


export const CardContainer = styled.div.attrs((props: PropColorTheme) => ({
  color: props.colorTheme,
}))<PropColorTheme>`
  width: 350px;
  border-radius: 4px;
  color: ${(props: any) => props.colorTheme === 'dark' ? '#e2e2e2' : '#050801'};
  margin-top: 50px;
  `;

export const CardItem = styled.div.attrs((props: PropColorTheme) => ({
  color: props.colorTheme,
  background: props.colorTheme,
  'box-shadow': props.colorTheme,
}))<PropColorTheme>`
  .img-cardItem {
    width: 100%;
    position: relative;
    display: inline-block;
    letter-spacing:1px;
    font-weight: 600;
    text-align: center;
    cursor: default;
    
    #img-ctn {
      box-shadow: ${(props: any) => props.colorTheme  === 'dark' ? '0px 4px 15px #e2e2e2' : '0px 4px 15px #050801' };
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition: all 0.3s ease-in-out;
      border-radius: 10px;
      &:hover {
        transform: scale(1.1);
        box-shadow: ${(props: any) => props.colorTheme  === 'dark' ? '0px 6px 18px #e2e2e2' : '0px 6px 18px #050801' };
      }
    }
    .text-top{
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 18px;
    padding: 5px;
    border-radius: 10px;
    background: ${(props: any) => props.colorTheme  === 'dark' ? 'rgba(30,30,30,0.5)' : 'rgba(180,180,180,0.5)' };
      color: ${(props: any) => props.colorTheme  === 'dark' ? '#e2e2e2' : '#050801' };
    }
    .text-bottom{
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-size: 17px;
      padding: 4px;
      border-radius: 10px;
      background: ${(props: any) => props.colorTheme  === 'dark' ? 'rgba(30,30,30,0.5)' : 'rgba(180,180,180,0.5)' };
      color: ${(props: any) => props.colorTheme  === 'dark' ? '#e2e2e2' : '#050801' };
    }

    .icon-bottom{
      img{
        position: absolute;
        padding: 2px;
        bottom: 10px;
        left: 10px;
        height: 40px;
        width: 40px;
        object-fit: cover;
        transition: all 0.3s ease-in-out;
        &:hover {
          transform: scale(1.1) rotate(360deg);
        }
      }
    }
  }
`;

export const CardItemIcon = styled.div.attrs((props: PropColorTheme) => ({
  color: props.colorTheme,
}))<PropColorTheme>`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  .heart{
    color: #ff2438;
    margin: 12px 0px 0px 12px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
      transform: scale(1.6)
    }
  }

  .heart-broken{
    margin: 12px 12px 0px 0px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    color: #77767c;
    &:hover{
      transform: scale(1.3)
    }
  }
`
