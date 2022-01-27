import React, { useEffect, useState } from 'react';
import { HistoryContainer, ListHistory } from './HistoryStyled';
import { useSelector } from 'react-redux';
import { auth, db } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import NavBarTop from '../NavBar/NavBarTop';
import NavBarBottom from '../NavBar/NavBarBottom';
import { collection, getDocs } from 'firebase/firestore';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';
import ReactLoading from 'react-loading';
interface Likes {
  id: string;
  name: string;
  icon: string;
  user: any;
  heart: any;
}

const History = () => {
  const darkLight = useSelector((state: any) => state.theme);
  const [user, setUser] = useState({
    email: '',
  });
  // let likes: Array<Likes> | any;
  const [likes, setLikes] = useState([]);

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
    const getLikesDoc = async () => {
      if (likes.length === 0) {
        const arrayLike: Array<Likes> = [];
        const arrayDislike: Array<Likes> = [];
        const getLikes = await getDocs(collection(db, 'likes'));
        const getDislikes = await getDocs(collection(db, 'dislikes'));

        getLikes.forEach((like: any) => {
          arrayLike.push({
            id: like.data().id,
            name: like.data().name,
            icon: like.data().icon,
            user: like.data().user,
            heart: <FaHeart size={28} color='#ff2438' />,
          });
        });
        getDislikes.forEach((dislike: any) => {
          arrayDislike.push({
            id: dislike.data().id,
            name: dislike.data().name,
            icon: dislike.data().icon,
            user: dislike.data().user,
            heart: <FaHeartBroken size={28} color='#77767c' />,
          });
        });
        const filterLikes = arrayLike.filter(
          (like: any) => like.user === user.email
        );

        const filterDislikes = arrayDislike.filter(
          (dislike: any) => dislike.user === user.email
        );
        const arraySort = [...filterLikes, ...filterDislikes].sort(
          (a, b) => parseInt(b.id) - parseInt(a.id)
        );
        // @ts-ignore
        setLikes([...arraySort]);
      }
    };
    getLikesDoc();
  }, [likes]);

  return (
    <HistoryContainer colorTheme={darkLight}>
      <NavBarTop />
      <div className='list-container'>
        {likes.length > 0 ? (
          likes.map((item: any, index: number) => {
            return (
              <ListHistory key={index} colorTheme={darkLight}>
                <div className='text-icon'>
                  <img src={item.icon} alt={item.name} />
                  <p>{item.name}</p>
                </div>
                <p>{item.heart}</p>
              </ListHistory>
            );
          })
        ) : (
          <ReactLoading
            type='spin'
            color={darkLight === 'dark' ? '#e2e2e2' : '#050801'}
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
