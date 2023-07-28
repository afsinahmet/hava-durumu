import React from "react";

function Cityinfo({ city }) {
  return (
    <>
      <h1>{city.name}</h1>
      <h2>{city.main.temp}</h2>
    </>
  );
}

export default Cityinfo;
