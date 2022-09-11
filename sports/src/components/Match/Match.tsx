import React , { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../reducer/reducer';
import { getAllSports } from '../../actions/actions';
import ReactLoading from 'react-loading';
import Card from '../Card/Card';
import { MatchContainer } from './MatchStyled';

const Match : React.FC = () => {
  const dispatch = useDispatch();
  const { theme, sports } = useSelector((state: State) => state);
  
  useEffect(() => {
    dispatch(getAllSports());
  }, []);

  return (
    <MatchContainer colorTheme={theme}>
      {sports.length > 0 ? (
        <Card sport={sports} />
      ) : (
        <ReactLoading
          type='spin'
          color={theme === 'dark' ? '#e2e2e2' : '#050801'}
          height={50}
          width={50}
          className='loading'
        />
      )}
    </MatchContainer>
  );
};

export default Match;
