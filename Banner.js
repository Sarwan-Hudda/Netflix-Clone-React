import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function Banner() {
  const API_KEY = "251ac7a461ba588030cfa89b0cd75329";
  const base_path = `https://api.themoviedb.org/3/`;
  const imagepath = "https://image.tmdb.org/t/p/original";

  const [baner, setbanner] = useState("");
  console.log(baner);

  useEffect(() => {
    async function banner() {
      const bannerdata = await axios.get(
        `${base_path}/trending/all/week?api_key=${API_KEY}&language=en-US`
      );
      // console.log(bannerdata.data.results)
      //IN here we have 20 results.
      //We need one out of twenty, in random fashion

      //This will give us a random number between 0 and 20
      const randomNumber = Math.floor(
        Math.random() * bannerdata.data.results.length
      );

      // console.log(bannerdata.data.results[randomNumber])

      //We pass it to the array as argument
      setbanner(bannerdata.data.results[randomNumber]);

      //ALL SET okk thanks sir ...
      //smjh bhi aaya? yes sir done
      //ok good night hahahaahahah okk sir

      // setbanner(bannerdata.data.results)
    }
    banner();
  }, []);

  return (
    <div
      className="Banner"
      style={{
        backgroundImage: `url(` + imagepath + baner.backdrop_path + `)`,
      }}
    >
      <div className="content">
        <h1>{baner.title || baner.original_title}</h1>
        <div className="anchors">
          <a href="">Play</a>
          <a href="">My List</a>
        </div>
        <p>{baner.overview}</p>
      </div>
    </div>
  );
}

export default Banner;
