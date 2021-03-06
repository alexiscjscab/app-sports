import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSports } from '../../actions/actions';
import Card from '../Card/Card';
import { MatchContainer } from './MatchStyled';
import ReactLoading from 'react-loading';

const Match = () => {
  const dispatch = useDispatch();
  const darkLight = useSelector((state: any) => state.theme);
  const sports = useSelector((state: any) => state.sports);

  useEffect(() => {
    sports.length > 0 ? null : dispatch(getAllSports());
  }, []);

  console.log(sports);

  return (
    <MatchContainer colorTheme={darkLight}>
      {sports.length > 0 ? (
        <Card sport={sports} />
      ) : (
        <ReactLoading
          type='spin'
          color={darkLight === 'dark' ? '#e2e2e2' : '#050801'}
          height={50}
          width={50}
          className='loading'
        />
      )}
    </MatchContainer>
  );
};

export default Match;
