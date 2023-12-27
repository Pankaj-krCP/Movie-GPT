import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constant";
import { addPlayingVideo } from "../utils/moviesSlice";

const MovieCard = ({ movieid, posterPath }) => {
  const dispatch = useDispatch();
  if (!posterPath) return null;
  const handleOnclick = () => {
    dispatch(addPlayingVideo(movieid));
  };
  return (
    <div
      className="w-40 md:w-48 pr-4 pb-2 cursor-pointer transform transition-transform hover:scale-105"
      onClick={handleOnclick}
    >
      <img
        className="rounded-lg"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};
export default MovieCard;
