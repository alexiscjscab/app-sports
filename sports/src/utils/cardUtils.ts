import { Likes } from './../types/types';
// importaciones
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Alert } from '../components/Alert/alert';


interface LikesProps {
  arrLike: Likes[];
  arrDislike: Likes[];
  id: string;
  user: any;
}

// funciones
export const getLikeAndDislike = async () => {
  const arrLike: Array<Likes> = [];
  const arrDislike: Array<Likes> = [];
  const getLikes = await getDocs(collection(db, "likes"));
  const getDislikes = await getDocs(collection(db, "dislikes"));
  getLikes.forEach((like: any) => {
    arrLike.push({
      id: like.data().id,
      name: like.data().name,
      icon: like.data().icon,
      user: like.data().user,
    });
  });
  getDislikes.forEach((dislike: any) => {
    arrDislike.push({
      id: dislike.data().id,
      name: dislike.data().name,
      icon: dislike.data().icon,
      user: dislike.data().user,
    });
  });

  return {
    arrLike,
    arrDislike,
  };
};

export const filterLikeandDislike = ({ arrLike, arrDislike, id, user}: LikesProps) => {
  const likedFilter = arrLike.find((like: any) => like.id === id && like.user === user.email);
  const dislikedFilter = arrDislike.find((dislike: any) => dislike.id === id && dislike.user === user.email);
  
  return {
    likedFilter,
    dislikedFilter,
  };
};

export const addLikes = async (sport: any, type: string, user: any) => {
  try {
    const id = sport.idSport;
    const name = sport.strSport;
    const icon = sport.strSportIconGreen;
    const { arrLike, arrDislike } = await getLikeAndDislike();

    const { likedFilter, dislikedFilter } = filterLikeandDislike({
      arrLike,
      arrDislike,
      id,
      user
    });

    if (likedFilter || dislikedFilter) {
      Alert("You already liked or disliked this sport", "error");
    } else {
      await addDoc(collection(db, type), {
        id,
        name,
        icon,
        user: user.email,
      });
      Alert(`You ${type} this sport ${name}`, "success");
    }
  } catch (error) {
    Alert("error", "error");
  }
};