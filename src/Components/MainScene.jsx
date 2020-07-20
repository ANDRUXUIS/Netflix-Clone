import React, { Fragment } from "react";

function MainScene({ movie }) {
  const trancate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) : str;
  };
  return (
    <Fragment>
      <h2>{movie?.name || movie?.title || movie?.original_name}</h2>
      <div>
        <button className="btn btn-light">Play</button>
      </div>
      <p>{trancate(movie?.overview, 150)}</p>
    </Fragment>
  );
}

export default MainScene;
