import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../reducer/reducer';
import { useFetchLikesHistory } from '../../hooks/historyHooks';
import NavBarTop from '../NavBar/NavBarTop';
import NavBarBottom from '../NavBar/NavBarBottom';
import { HistoryContainer, ListHistory } from './HistoryStyled';
import ReactLoading from 'react-loading';

interface Likes {
  id: string;
  name: string;
  icon: string;
  user: any;
  heart: any;
}

const History : React.FC = () => {
  const { theme } = useSelector((state: State) => state);
  const likes  = useFetchLikesHistory();

  return (
    <HistoryContainer colorTheme={theme}>
      <NavBarTop />
      <div className='list-container'>
        {likes.length > 0 ? (
          <div className='list'>
            {likes.map((item, index: number) => {
              return (
                <ListHistory key={index} colorTheme={theme}>
                  <div className='text-icon'>
                    <img src={item.icon} alt={item.name} />
                    <p>{item.name}</p>
                  </div>
                  <p>{item.heart}</p>
                </ListHistory>
              );
            })}
          </div>
        ) : (
          <ReactLoading
            type='spin'
            color={theme === 'dark' ? '#e2e2e2' : '#050801'}
            height={50}
            width={50}
            className='loading'
          />
        )}
      </div>
      <NavBarBottom />
    </HistoryContainer>
  );
};

export default History;
