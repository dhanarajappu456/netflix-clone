import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import popular from "./data/Popular";
import horror from "./data/Horror";
import fantasy from "./data/Fantasy";
import upcoming from "./data/UpComing";
import bannerMovies from "./data/BannerMovie"
import Row from "./Row";
function HomeScreen() {
  return (
    <div className="homescreen">
      {/* navbar */}
      <Nav />

      <Banner />

      {/* rows */}
      <Row title="NETFLIX ORIGINAL" imgList={popular} isLarge={true} />
      <Row title="Horror " imgList={horror} />

      <Row title="Fantasy" imgList={fantasy} />

      <Row title="Popular" imgList={bannerMovies} />

      <Row title="Upcoming..." imgList={upcoming} />
    </div>
  );
}

export default HomeScreen;
