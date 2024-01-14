import Page from "../components/Page";
import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";
import PostCard from "../components/PostCard";
import POSTS from "../data/post.json";

function FeedPage(props) {
  return (
    <Page>
      <Sidebar />

      <div className="feed-container">
        {POSTS.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
      
      <Profile user={props.currentUser} />
    </Page>
  );
}

export default FeedPage;
