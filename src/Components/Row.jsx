import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import instance from "../services/httpService";
import movieTrailer from "movie-trailer";
import PopUpWindow from './PopUpWindow';

function Row({ request }) {
  const [movie, setMovie] = useState([]);
  const [trailer, setTrailer] = useState("");
  const opts = {
    height: "400",
    width: "800",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    async function getData() {
      try {
        const { url } = request;
        const { data } = await instance.get(url);
        const { results } = data;
        setMovie(results);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  });
  const handleUrl = async (movie) => {
    if (trailer) setTrailer("");
    else {
      try {
        const trailer = await movieTrailer(movie?.name || "");
        const trailerID = new URLSearchParams(new URL(trailer).search);
        setTrailer(trailerID.get("v"));
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="Row">
      <div>
        <h2>{request.title}</h2>
      </div>
      <div className="movies__row">
        {movie.map((m) => (
          <Movie key={m.id} details={m} handleUrl={handleUrl} handleShow={handleShow} />
        ))}
      </div>
      <div className="movie__trailer">
        {trailer &&  <PopUpWindow show={show} onHide={handleClose} opts={opts} trailer={trailer} />}
      </div>
      {/* */}
    </div>
  );
}

export default Row;
