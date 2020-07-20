import React from "react";
import Row from "./Row";
import requests from "../services/requests";

function MovieSection(props) {
  return (
    <div>
      {requests.map((r) => (
        <Row key={r.id} request={r} />
      ))}
    </div>
  );
}

export default MovieSection;
