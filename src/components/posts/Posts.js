import Post from "../post/Post";
import "./Posts.css";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  );
};

export default Posts;
