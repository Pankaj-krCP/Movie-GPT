import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIE_URL } from "../utils/constant";
import { useEffect } from "react";
import { addTrailerVideos } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const movie_video_url = MOVIE_URL + movieId + "/videos?language=en-US";
    const data = await fetch(movie_video_url, API_OPTIONS);
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideos(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
