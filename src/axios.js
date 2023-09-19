import axios from "axios";

const instance = axios.create({
  baseURL: "https://online-movie-database.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
});

export default instance;
