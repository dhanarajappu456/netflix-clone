import React, { useEffect, useState } from "react";
import "./Banner.css";
import movies from "./data/BannerMovie";

import axios from "./axios";
import request from "./Requests";
console.log(movies);
function Banner() {
  const [bannerMovie, setBannerMovie] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function truncate(string, n) {
    return string.length > n ? string.substring(0, n) + "..." : string;
  }

  // useEffect(() => {
  //   async function func() {
  //     try {
  //       console.log(
  //         "cached popular movies ",
  //         localStorage.getItem("popular movies")
  //       );

  //       const responsePopular = await axios.get(request.popularMovies);
  //       const popularMoviesList = responsePopular.data;

  //       const popInd = Math.floor(
  //         Math.random() * (popularMoviesList.length - 1)
  //       );
  //       const extractId = popularMoviesList[popInd].split("/")[2];

  //       const imageResponse = await axios.get(
  //         request.images.replace("{img_id}", extractId)
  //       );

  //       var imageList = imageResponse.data.images;

  //       localStorage.setItem("imageList", JSON.stringify(imageList));

  //       const detailsResponse = await axios.get(
  //         request.details.replace("{title_id}", extractId)
  //       );
  //       var detailsData = detailsResponse.data;

  //       const movieInd = Math.floor(Math.random() * (imageList.length - 1));

  //       const imageUrl = imageList[movieInd].url;

  //       setBannerMovie(imageUrl);
  //       setTitle(detailsData.title.title);
  //       setDescription(detailsData.plotSummary.text);
  //     } catch (err) {

  //       throw err;
  //     }

  //   }
  //   func();
  // }, []);

  useEffect(() => {
    const randInd = Math.floor(Math.random() * (movies.length - 1));

    const randMovie = movies[randInd];

    setBannerMovie(randMovie.imgLand);
    setTitle(randMovie.title);
    setDescription(randMovie.desc);
  }, []);

  return (
    <header>
      {" "}
      <div
        className="banner"
        style={{
          backgroundPosition: "center 10%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${bannerMovie})`,
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">{title}</h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description"> {truncate(description, 300)}</h1>
        </div>

        <div className="banner--fadeButton" />
      </div>
      {/* add the random  banner from the   popular movies */}
    </header>
  );
}

export default Banner;
