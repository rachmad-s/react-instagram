import { useState } from "react";
import css from "./../css/post-card.module.css";
import USER from "./../data/user.json";
import LikeButton from "./LikeButton";

function PostCard(props) {
  const [isLiked, setIsLiked] = useState(false);
  
  const user = USER.find((user) => user.id === props.post.userId);
  const totalLikes = isLiked ? props.post.totalLikes + 1 : props.post.totalLikes; 

  function handleClick() {
    setIsLiked(!isLiked);
  }

  return (
    <div className={css["post-card"]}>
      <div className={css["post-profile-container"]}>
        <img src={user.profileUrl} className={css["post-profile-picture"]} />
        {user.username}
      </div>
      <img src={props.post.imageUrl} className={css["post-image"]} />
      <div className={css["post-like"]}>
        <LikeButton isLiked={isLiked} onClick={handleClick} />
        {totalLikes} likes
      </div>
      <div className={css["post-caption"]}>
        <p>
          <span>{user.username}</span>
          {props.post.caption}
        </p>
      </div>
    </div>
  );
}

export default PostCard;
