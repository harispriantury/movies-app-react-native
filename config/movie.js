export const movieConfig = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=1&with_genre=",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWVhMGFlNGMwNDgwOWIwMzQ2ZWM1ZjYxYzhlYzFlZiIsInN1YiI6IjY1NzZkNDE2YTFkMzMyMDBhY2I5MjAyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvC5SIEsrxlkiL4I5MqZZs9BOs1AbbxukS3WSHdeiiQ",
    accept: "application/json",
  },
};
