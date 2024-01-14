import css from "./../css/profile.module.css";

function Profile(props) {
  return (
    <div className={css["profile-container"]}>
      <div className={css["profile-card"]}>
        <img src={props.user.profileUrl} className={css["profile-picture"]} />
        <div>
          <div className={css["profile-name"]}>{props.user.name}</div>
          <div className={css["profile-username"]}>@{props.user.username}</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
