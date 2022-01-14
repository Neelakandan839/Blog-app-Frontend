import "./Post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const PF = "https://mern-blog-node.herokuapp.com/images/";
  return (
    <div className="post" key={post._id}>
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c, index) => (
            <span key={index} className="postCat">
              {c.name}
            </span>
          ))}
        </div>
        <Link style={{marginTop:'10px'}} key={post._id} to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
