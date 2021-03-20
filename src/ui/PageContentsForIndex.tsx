import { NextPage } from "next";
import React from "react";

import dark from "./dark";
import Features from "./Features";
import me from "./me.jpg";

const getCurrentTheme = () => {
  return dark;
};

const PageContentsForIndex: NextPage = () => {
  const style = getCurrentTheme();
  return (
    <div style={style.pageLayout}>
      <div style={style.languages}>
        <a style={style.dots} href="#">
          en
        </a>{" "}
        <a style={style.dots} href="#">
          ru
        </a>
      </div>
      <h1>Project L</h1>
      <img id="me" src={me} alt="Marat Nagayev" style={style.me} />
      <div id="about" style={style.about}>
        <p>L is a general-purpose programming language</p>
        <p>Status: in active development</p>
      </div>
      <br />
      <div id="projects">
        <Features />
        <br />
      </div>

      <div id="bottom">
        Made by nagayev.ru, 2021 <br />
        Source code is available{" "}
        <a style={style.a} href="https://github.com/nagayev/l-website">
          here
        </a>
      </div>
    </div>
  );
};

export default PageContentsForIndex;
