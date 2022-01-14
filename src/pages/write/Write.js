import "./Write.css";
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(" post submit");
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post(
          "https://mern-blog-node.herokuapp.com/api/upload",
          data
        );
        console.log("image uploaded");
      } catch (err) {
        console.log(err);
      }
    }
    try {
      console.log(newPost);
      const res = await axios.post(
        `https://mern-blog-node.herokuapp.com/api/posts`,
        newPost
      );
      console.log("Post completed");

      window.location.replace("/post/" + res.data._id);
      console.log("Post completed");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Blog Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          POST
        </button>
      </form>
    </div>
  );
};

export default Write;
