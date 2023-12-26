import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS, MOVIE_URL } from "../utils/constant";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const now_playing_url = MOVIE_URL + "now_playing?page=1";
    const data = await fetch(now_playing_url, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, []);
};

export default useNowPlayingMovies;
