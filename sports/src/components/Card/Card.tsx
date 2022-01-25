import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CardContainer, CardItem, CardItemIcon } from './CardStyle';
import { useSelector } from 'react-redux';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';
import { indexIncrement } from '../../actions/actions';

const Card = (sports: any) => {
  const dispatch = useDispatch()
  const sport = sports.sport;
  const darkLight = useSelector((state: any) => state.theme);
  const indexNumber = useSelector((state: any) => state.indexNumber);

  const handleClick = (value: string) => {
    setTimeout(() => {
      value === 'like' ? console.log('like') : console.log('dislike');
      dispatch(indexIncrement())
    }, 700);
  };
  /*
  useEffect(() => {
    resetIndex();
  }, [indexCard]);

  const resetIndex = (): void => {
    if (indexCard === sport.length) setIndexCard(0);
  };
  */

  return (
    <CardContainer colorTheme={darkLight}>
      {sport.length > 0 &&
        sport.map((sport: any, index: number) => {
          return index === indexNumber ? (
            <CardItem key={sport.strSport} colorTheme={darkLight}>
              <div className='img-cardItem'>
                <img
                  id='img-ctn'
                  src={sport.strSportThumb}
                  alt={sport.strSport}
                />
                <div className='text-top'>{sport.strSport}</div>
                <div className='icon-bottom'>
                  <img src={sport.strSportIconGreen} alt={sport.strSport} />
                </div>
                <div className='text-bottom'>{sport.strFormat}</div>
              </div>

              <CardItemIcon colorTheme={darkLight}>
                <div className='heart-broken' onClick={() => handleClick('dislike')}>
                  <FaHeartBroken fontSize={30} />
                </div>
                <div className='heart' onClick={() => handleClick('like')}>
                  <FaHeart fontSize={32}/>
                </div>
              </CardItemIcon>
            </CardItem>
          ) : null;
        })}
    </CardContainer>
  );
};

export default Card;
