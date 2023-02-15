import React from "react";
import "./netflix.css";
import Row from "./Row";
import requests from "./Api";
import Banner from "./Banner";
import List from "./List";

function Netflix() {
  return (
    <>
      <List />
      <Banner />
      <Row heading="Netflix Original" imagepath={requests.fetchNetflixOriginals} big={true} />
      <Row heading="Trending Movies" imagepath={requests.fetchTrending} />
      <Row heading="Top Rated Movies" imagepath={requests.fetchTopRated} />
      <Row heading="Comedy Movies" imagepath={requests.fetchComedyMovies} />
      <Row heading="Horror Movies" imagepath={requests.fetchHorrorMovies} />
      <Row heading="Action Movies" imagepath={requests.fetchActionMovies} />
      <Row heading="Romantic Movies" imagepath={requests.fetchRomanceMovies} />
      <Row heading="Documentry" imagepath={requests.fetchDocumentaries} />
    </>
  );
}

export default Netflix;
