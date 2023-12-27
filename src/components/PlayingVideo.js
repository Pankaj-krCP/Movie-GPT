import React, { useEffect, useState } from "react";
import { API_OPTIONS, MOVIE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPlayingVideo } from "../utils/moviesSlice";

const PlayingVideo = () => {
  const [video, setVideo] = useState(null);
  const movieId = useSelector((store) => store.movies.playingVideo);
  const dispatch = useDispatch();

  const onCloseButtonClick = () => {
    dispatch(addPlayingVideo(null));
  };

  const getMovieVideo = async () => {
    const url = MOVIE_URL + movieId + "/videos?language=en-US";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type == "Trailer");
    const video = filterData.length ? filterData[0] : json.results[0];
    setVideo(video);
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
  return (
    <>
      <div className="text-center">
        <button
          className="text-3xl absolute pt-12 text-center text-white cursor-pointer"
          onClick={onCloseButtonClick}
        >
          ❎
        </button>
      </div>
      <div className="w-screen aspect-video">
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${video?.key}?&autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default PlayingVideo;
