import { BEARER_TOKEN } from "@env";
export const movieConfig = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc",
  headers: {
    Authorization: BEARER_TOKEN,
    accept: "application/json",
  },
};
