import React, { useRef } from "react";
import { lang } from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { addGptMovieResult } from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constant";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const identifier = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <>
      <div className="pt-[25%] md:pt-[10%] flex justify-center">
        <form
          className="md:w-1/2  bg-black grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            placeholder={lang[identifier].gptSearchPlaceholder}
            className="p-4 m-4 bg-gray-100 text-black rounded-md col-span-8 md:col-span-9"
          />
          <button
            className="p-4 m-4 bg-green-600 text-white rounded-md col-span-4 md:col-span-3 hover:bg-green-500"
            onClick={handleGptSearchClick}
          >
            {lang[identifier].search}
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
