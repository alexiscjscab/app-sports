import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import useAuth from './useAuthHooks';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';
import { getLikeAndDislike } from '../utils/cardUtils';
import { Likes } from '../types/types';



export const useFetchLikesHistory = (): Likes[] => {
  const user = useAuth();
  const [likes, setLikes] = useState<Array<Likes>>([]);

  useEffect( () => {
    if(likes.length > 0 ) return
    const getLikesArray = async () => {
      const {arrLike: arrayLike, arrDislike: arrayDislike } = await getLikeAndDislike()

      const filterLikes = arrayLike.filter(
        (like) => like.user === user.email
      ).map((item) => {
        return {
          id: item.id,
          name: item.name,
          icon: item.icon,
          user: item.user,
          heart: <FaHeart size={28} color='#ff2438' />
        }
      });

      const filterDislikes = arrayDislike.filter(
        (dislike) => dislike.user === user.email
      ).map((item) => {
        return {
          id: item.id,
          name: item.name,
          icon: item.icon,
          user: item.user,
          heart: <FaHeartBroken size={28} color='#77767c' />
        }
      });

      const arraySort = [...filterLikes, ...filterDislikes].sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );

      setLikes([...arraySort]);
    };
    getLikesArray()
  }, [likes]);

  return likes
};
