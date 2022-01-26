import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CardContainer, CardItem, CardItemIcon } from './CardStyle';
import { useSelector } from 'react-redux';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';
import { indexIncrement } from '../../actions/actions';
import { db, auth } from '../../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { Alert } from '../Alert/alert';

interface Likes {
  id: string;
  name: string;
  icon: string;
  user: any;
}

const Card = (sports: any) => {
  const dispatch = useDispatch();
  const sport = sports.sport;
  const darkLight = useSelector((state: any) => state.theme);
  const indexNumber = useSelector((state: any) => state.indexNumber);
  const [user, setUser] = useState({
    email: '',
  });
  
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          ...user,
          email: `${currentUser.email}`,
        });
      } else {
        setUser({
          ...user,
          email: '',
        });
      }
    });
  }, []);

  const addLike = async (sport: any) => {
    const id = sport.idSport;
    const name = sport.strSport;
    const icon = sport.strSportIconGreen;
    try {
      const arrayLike: Array<Likes> = [];
      const arrayDisLike: Array<Likes> = [];

      const getLikes = await getDocs(collection(db, 'likes'));
      const getDisLikes = await getDocs(collection(db, 'dislikes'));
      getLikes.forEach((like: any) => {
        arrayLike.push({
          id: like.data().id,
          name: like.data().name,
          icon: like.data().icon,
          user: like.data().user,
        });
      });
      getDisLikes.forEach((dislike: any) => {
        arrayDisLike.push({
          id: dislike.data().id,
          name: dislike.data().name,
          icon: dislike.data().icon,
          user: dislike.data().user,
        });
      });

      const likedFilter = arrayLike.find(
        (like: any) => like.id === id && like.user === user.email
      );

      const dislikedFilter = arrayDisLike.find(
        (dislike: any) => dislike.id === id && dislike.user === user.email
      );

      if (likedFilter || dislikedFilter) {
        Alert('You already liked or disliked this sport', 'error');
      } else {
        await addDoc(collection(db, 'likes'), {
          id,
          name,
          icon,
          user: user.email,
        });
        Alert(`You liked this sport ${name}`, 'success');
      }
    } catch (error) {
      Alert('error', 'error');
    }
  };

  const addDislike = async (sport: any) => {
    const id = sport.idSport;
    const name = sport.strSport;
    const icon = sport.strSportIconGreen;
    try {
      const arrayLike: Array<Likes> = [];
      const arrayDisLike: Array<Likes> = [];

      const getLikes = await getDocs(collection(db, 'likes'));
      const getDisLikes = await getDocs(collection(db, 'dislikes'));
      getLikes.forEach((like: any) => {
        arrayLike.push({
          id: like.data().id,
          name: like.data().name,
          icon: like.data().icon,
          user: like.data().user,
        });
      });
      getDisLikes.forEach((dislike: any) => {
        arrayDisLike.push({
          id: dislike.data().id,
          name: dislike.data().name,
          icon: dislike.data().icon,
          user: dislike.data().user,
        });
      });

      const likedFilter = arrayLike.find(
        (like: any) => like.id === id && like.user === user.email
      );

      const dislikedFilter = arrayDisLike.find(
        (dislike: any) => dislike.id === id && dislike.user === user.email
      )
      
      if (likedFilter || dislikedFilter) {
        Alert('You already liked or disliked this sport', 'error');
      } else {
        await addDoc(collection(db, 'dislikes'), {
          id,
          name,
          icon,
          user: user.email,
        });
        Alert(`You disliked this sport ${name}`, 'success');
      }
    } catch (error) {
      Alert('error', 'error');
    }
  };

  const handleClick = (value: string, sport: any) => {
    setTimeout(() => {
      value === 'like' ? addLike(sport) : addDislike(sport);
      dispatch(indexIncrement());
    }, 700);
  };
  return (
    <CardContainer colorTheme={darkLight}>
      {sport.length > 0 &&
        sport.map((sport: any, index: number) => {
          return index === indexNumber ? (
            <CardItem key={sport.idSport} colorTheme={darkLight}>
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
                <div
                  className='heart-broken'
                  onClick={() => handleClick('dislike', sport)}
                >
                  <FaHeartBroken fontSize={30} />
                </div>
                <div
                  className='heart'
                  onClick={() => handleClick('like', sport)}
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
