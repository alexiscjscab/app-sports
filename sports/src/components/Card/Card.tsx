import { useDispatch } from "react-redux";
import { CardContainer, CardItem, CardItemIcon } from "./CardStyle";
import { useSelector } from "react-redux";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { indexIncrement } from "../../actions/actions";
import { db } from "../../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Alert } from "../Alert/alert";
import AuthUser from "../../utils/utils";

interface Likes {
  id: string;
  name: string;
  icon: string;
  user: any;
}

interface LikesProps {
  arrLike: Likes[];
  arrDislike: Likes[];
  id: string;
}

const Card = (sports: any) => {
  const dispatch = useDispatch();
  const sport = sports.sport;
  const darkLight = useSelector((state: any) => state.theme);
  const indexNumber = useSelector((state: any) => state.indexNumber);

  const user = AuthUser();

  const getLikeAndDislike = async () => {
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

  const filterLikeandDislike = ({
    arrLike,
    arrDislike,
    id,
  }: LikesProps) => {
    const likedFilter = arrLike.find(
      (like: any) => like.id === id && like.user === user.email
    );

    const dislikedFilter = arrDislike.find(
      (dislike: any) => dislike.id === id && dislike.user === user.email
    );
    return {
      likedFilter,
      dislikedFilter,
    };
  };

  const addLike = async (sport: any, type: string) => {
    try {
      const id = sport.idSport;
      const name = sport.strSport;
      const icon = sport.strSportIconGreen;
      const { arrLike, arrDislike } = await getLikeAndDislike();

      const { likedFilter, dislikedFilter } = filterLikeandDislike({
        arrLike,
        arrDislike,
        id,
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

  const handleClick = (value: string, sport: any) => {
    setTimeout(() => {
      value === "like" ? addLike(sport, "likes") : addLike(sport, "dislikes");
      dispatch(indexIncrement());
    }, 700);
  };

  return (
    <CardContainer colorTheme={darkLight}>
      {sport.length > 0 &&
        sport.map((sport: any, index: number) => {
          return index === indexNumber ? (
            <CardItem key={sport.idSport} colorTheme={darkLight}>
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

              <CardItemIcon colorTheme={darkLight}>
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
