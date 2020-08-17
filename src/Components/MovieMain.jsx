import React, { useEffect, useState } from "react";
import MainScene from ".//MainScene";
import { makeImageUrl } from "../utils/filterMovies";
import requests from "../services/requests";
import instance from "../services/httpService";
import { randomGenerator } from "../utils/randomGenerator";

function MovieMain(props) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      try {
        const { url } = requests[0];
        const { data } = await instance.get(url);
        const { results } = data;
        setMovie(results[randomGenerator(results.length)]);
      } catch (error) {
          console.log(error);
      }
    }
    fetchdata();
  }, []);
  return (
    <div>
      <div className="mainscene-info">
        <MainScene movie={movie} />
      </div>
      <img className="mainscene-image" src={makeImageUrl(movie)} alt="pic" />
      <div className="mainscene-effect"></div>
    </div>
  );
}

export default MovieMain;
