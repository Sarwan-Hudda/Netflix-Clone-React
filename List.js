import React, { useState } from "react";

function List() {
  const [dark, setDark] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > 40) setDark(true);
    else setDark(false);
  };

  return (
    <div className={dark ? "Header dark" : "Header"}>
      <img src="net logo/netflix-logo.png"></img>
      <nav className="LeftNav">
        <ul>
          <li>
            <a href=""> Home </a>
          </li>
          <li>
            <a href=""> Tv Shows </a>
          </li>
          <li>
            <a href=""> Movies </a>
          </li>
          <li>
            <a href=""> New & Popular</a>
          </li>
          <li>
            <a href=""> My List </a>
          </li>
          <li>
            <a href=""> Browse My Languages </a>
          </li>
        </ul>
      </nav>
      <nav className="RightNav">
        <ul>
          <li>
            <a href=""> Home </a>
          </li>
          <li>
            <a href=""> Tv Shows </a>
          </li>
          <li>
            <a href=""> Movies </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default List;
