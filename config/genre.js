import { BEARER_TOKEN } from "@env";
export const headerGenre = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://api.themoviedb.org/3/genre/movie/list?language=en",
  headers: {
    Authorization: BEARER_TOKEN,
  },
};
