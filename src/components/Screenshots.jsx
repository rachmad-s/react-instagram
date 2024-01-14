import phoneImage from "./../assets/phone.png";
import screenshot1 from "./../assets/screenshot1.png";
import css from "./../css/screenshots.module.css";

function InstagramAnimation() {
  return (
    <div className={css["container"]}>
      <img src={phoneImage} height={600} />
      <div
        className={css["screenshot"]}
        style={{ backgroundImage: `url(${screenshot1})` }}
      />
    </div>
  );
}

export default InstagramAnimation;
