export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const MOVIE_URL = "https://api.themoviedb.org/3/movie/";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjYyZDJlNzc5NjY4OWFiZGVjZTFlMjZmNjc2MzFjYyIsInN1YiI6IjY1OGE5Y2NkMmRmZmQ4NWJjYzQ2MTRhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Go3RIRDVJYjQljXpOA3TRY7kHTNugo5ySMt7bFvhwpg",
  },
};

export const BG_URL = process.env.PUBLIC_URL + "/bg_img.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "rs", name: "Russian" },
];

export const OPENAI_KEY = "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";
