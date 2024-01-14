import css from "./../css/sidebar.module.css";
import Logo from "./Logo";

function Sidebar(props) {
  return (
    <div className={css["sidebar"]}>
      <Logo width="150" />
      <div className={css["sidebar-menu"]}>Home</div>
      <div className={css["sidebar-menu"]}>Search</div>
      <div className={css["sidebar-menu"]}>Explore</div>
      <div className={css["sidebar-menu"]}>Reels</div>
      <div className={css["sidebar-menu"]}>Messages</div>
      <div className={css["sidebar-menu"]}>Notifications</div>
    </div>
  );
}

export default Sidebar;
