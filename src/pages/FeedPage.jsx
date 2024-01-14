import Page from "../components/Page";
import Sidebar from "../components/Sidebar";
import PostCard from "../components/PostCard";
import Profile from "../components/Profile";
import POSTS from "../data/post.json";
import USERS from "../data/user.json";

function FeedPage() {
  return (
    <Page>
      <Sidebar />

      <div className="feed-container">
        <PostCard post={POSTS[0]} />
      </div>

      <Profile user={USERS[0]} />
    </Page>
  );
}

export default FeedPage;
