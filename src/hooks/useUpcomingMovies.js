import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS, MOVIE_URL } from "../utils/constant";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovie = async () => {
    const url = MOVIE_URL + "upcoming?page=1";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovie();
  }, []);
};

export default useUpcomingMovies;
