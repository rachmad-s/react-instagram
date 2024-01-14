import { useEffect, useState } from "react";
import phoneImage from "./../assets/phone.png";
import screenshot1 from "./../assets/screenshot1.png";
import screenshot2 from "./../assets/screenshot2.png";
import screenshot3 from "./../assets/screenshot3.png";
import screenshot4 from "./../assets/screenshot4.png";
import css from "./../css/instagram-animation.module.css";

function InstagramAnimation() {
  const images = [screenshot1, screenshot2, screenshot3, screenshot4];
  const [displayScreenshot, setDisplayScreenshot] = useState(0);

  useEffect(function () {

    const interval = setInterval(function () {
      setDisplayScreenshot(function (state) {
        return (state + 1) % images.length;
      });
    }, 3000);

    return function () {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={css["container"]}>
      <img src={phoneImage} height={600} />
      <div
        className={css["screenshot"]}
        style={{ backgroundImage: `url(${images[displayScreenshot]})` }}
      />
    </div>
  );
}

export default InstagramAnimation;
