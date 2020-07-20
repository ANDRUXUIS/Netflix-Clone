import React, { useEffect, useState } from "react";
import { makeImageUrl } from "../utils/filterMovies";

function Movie({ details, handleUrl, handleShow }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(makeImageUrl(details));
  }, [details]);
  return (
    <div className="movie">
      <img
        src={url}
        alt=""
        onClick={() => {
          handleUrl(details);
          handleShow();
        }}
      />
    </div>
  );
}
export default Movie;
