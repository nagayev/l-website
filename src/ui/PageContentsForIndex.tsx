import { NextPage } from "next";
import React from "react";

import dark from "./dark";
import Features from "./Features";
import Button from "./Button";

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
      <button style={style.download}>Install</button>
      <div id="about" style={style.about}>
        <p>L is a general-purpose programming language</p>
        <p>Status: in active development</p>
      </div>
      <br />
      <div id="projects">
        <Features />
        <br />
      </div>
      <br />
      <br />
      <div id="involved" style={{display:"inline-grid"}}>
          <div id="read" style={{display:"inline-flex"}}>
              <p>Read docs and examples&nbsp;</p>
              <Button>Read</Button>
          </div>
          <div id="watch" style={{display:"inline-flex"}}>
              <p>We have YouTube channel with lots of videos!</p>
              <Button>Watch</Button>
          </div>
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
