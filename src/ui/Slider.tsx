import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

import dark from "./dark";

const INTERVAL = 6000; //6seconds
const AutoPlayer = withAutoplay(AwesomeSlider);

type SlideProps = {
  data: {
    content: string;
    header: string;
  };
};

function Slide(props: SlideProps) {
  const style = dark;
  const { data } = props;
  //dangerously... is used for <br />
  return (
    <div style={style.calculator}>
      <h1 className="header">{data.header}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
    </div>
  );
}

function Loading() {
  return <p>Loading...</p>;
}

function Slider() {
  const [features, setFeatures] = React.useState([]);
  React.useEffect(() => {
    fetch("features.json")
      .then((data) => data.json())
      .then((data) => {
        setFeatures(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      {features.length !== 0 ? (
        <AutoPlayer
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={INTERVAL}
        >
          {features.map((item, i) => {
            return (
              <div key={i}>
                <Slide data={item} />
              </div>
            );
          })}
        </AutoPlayer>
      ) : (
        <Loading />
      )}
    </>
  );
}
export default Slider;
