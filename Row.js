import React, { useEffect, useState } from "react";
import axios from "axios";

function Row(props) {
  let imgpath = `https://api.themoviedb.org/3`;
  const [data1, setdata1] = useState([]);

  useEffect(() => {
    async function NetflixOriginal() {
      let original = await axios.get(`${imgpath}${props.imagepath}`);
      setdata1(original.data.results);
    }
    NetflixOriginal();
  }, []);

  return (
    <div className="netflix">
      <h1>{props.heading}</h1>
      <div className={(props.big) ? 'FirstRow big' : 'FirstRow'}>
        {data1.map((movies, index) => {
          return (
            <div className="imgs" key={index}>
              <img
                src={"https://image.tmdb.org/t/p/original" + movies.poster_path}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
