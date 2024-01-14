import css from "./../css/post-card.module.css";
import LikeButton from "./LikeButton";

function PostCard(props) {

  return (
    <div className={css["post-card"]}>
      <div className={css["post-profile-container"]}>
        <img src="" className={css["post-profile-picture"]} />
        nama
      </div>
      <img src={props.post.imageUrl} className={css["post-image"]} />
      <div className={css["post-like"]}>
        <LikeButton />
        0 likes
      </div>
      <div className={css["post-caption"]}>
        <p>
          <span>nama</span>
          {props.post.caption}
        </p>
      </div>
    </div>
  );

}

export default PostCard;
