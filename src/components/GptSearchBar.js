import React from "react";
import { lang } from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const identifier = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2  bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[identifier].gptSearchPlaceholder}
          className="p-4 m-4 bg-gray-100 text-black rounded-md col-span-9"
        />
        <button className="p-4 m-4 bg-green-600 text-white rounded-md col-span-3">
          {lang[identifier].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
