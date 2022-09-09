import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";

function ShowList() {
  let [movies, setMovies] = useState({});
  let [id, setId] = useState("");
  let [button, setButton] = useState(0);

  let handleClick = () => [setButton(id)];
  useEffect(() => {
    axios
      .get(`https://akabab.github.io/superhero-api/api/id/${button}.json`)
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [button]);

  return (
    <div className="showlist">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for movies or events"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <button
          className="btn btn-outline-secondary bg-primary"
          type="button"
          id="button-addon2"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      <h1>Show Name : {movies?.name}</h1>
      <img src={movies?.images?.lg} alt="" width="300px" height="300px" />
      <h3>Show ID : {movies?.id}</h3>
      <h3>Show Genere : {movies?.slug}</h3>
      <h3>Show Duartion : {movies?.powerstats?.durability} mins</h3>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ShowList;
