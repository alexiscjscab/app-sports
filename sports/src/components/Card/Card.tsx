import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../hooks/useAuthHooks";
import { State } from '../../reducer/reducer';
import { indexIncrement } from "../../actions/actions";
import { addLikes } from '../../utils/cardUtils';
import { CardContainer, CardItem, CardItemIcon } from "./CardStyle";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { Sport } from '../../types/types';

interface Props {
  sports: Sport[]
}

const Card : React.FC<Props>= ({sports}) => {
  const dispatch = useDispatch();
  const user = useAuth();
  const {indexNumber, theme} = useSelector((state: State) => state);

  const handleClick = ((value: string, sport: any) => {
    setTimeout(() => {
      value === "like" ? addLikes(sport, "likes", user) : addLikes(sport, "dislikes", user);
      dispatch(indexIncrement());
    }, 700);
  });

  return (
    <CardContainer colorTheme={theme}>
      {sports.length > 0 &&
        sports.map((sport, index: number) => {
          return index === indexNumber ? (
            <CardItem key={sport.idSport} colorTheme={theme}>
              <div className="img-cardItem">
                <img
                  id="img-ctn"
                  src={sport.strSportThumb}
                  alt={sport.strSport}
                />
                <div className="text-top">{sport.strSport}</div>
                <div className="icon-bottom">
                  <img src={sport.strSportIconGreen} alt={sport.strSport} />
                </div>
                <div className="text-bottom">{sport.strFormat}</div>
              </div>

              <CardItemIcon colorTheme={theme}>
                <div
                  className="heart-broken"
                  onClick={() => handleClick("dislike", sport)}
                >
                  <FaHeartBroken fontSize={30} />
                </div>
                <div
                  className="heart"
                  onClick={() => handleClick("like", sport)}
                >
                  <FaHeart fontSize={32} />
                </div>
              </CardItemIcon>
            </CardItem>
          ) : null;
        })}
    </CardContainer>
  );
};

export default Card;
