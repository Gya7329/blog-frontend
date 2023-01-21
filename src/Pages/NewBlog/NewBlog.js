import { Link } from "react-router-dom";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import home from "../../component/assets/home.png";
import save from "../../component/assets/save.png";
import "./style.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createBlog } from "redux/action/blog.action";
import { Loading } from "component/Loading/Loading";
const NewBlog = () => {
  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [
      { header: 1 },
      { header: 2 },
      { header: 3 },
      { header: 4 },
      { header: 5 },
      { header: 6 },
    ],
    ["image", "video"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ direction: "rtl" }],
  ];
  const [value, setValue] = useState({
    title: "",
    content: "",
    image: "",
  });
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(false);
  const [blogContent, setBlogContent] = useState("");
  const dispatch = useDispatch();
  const imageUploader = async (e) => {
    const formdata = new FormData();
    setLoading(true);
    formdata.append("file", e.target.files[0]);
    try {
      const data = await axios.post(
        "https://aws-uploader.onrender.com/api/v2/samunnati/upload/file",
        formdata
      );
      setLoading(false);
      setImageURL(data.data.link);
      setValue({ ...value, image: data.data.link });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    debugger;
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    const blogData = {
      ...value,
      content: blogContent,
    };
    if (blogData.title === "" || blogData.content === "") {
      alert("Please fill all the fields");
      return;
    }
    dispatch(createBlog(blogData, setGlobalLoading));
  };

  return (
    <>
      {globalLoading && <Loading />}
      <div className="container-fluid row col-12 d-flex justify-content-center mt-4 margin-bottom-100">
        <div className="iconSection col-lg-2">
          <Link to="/" className="home mb-4">
            <img src={home} height={40} />
          </Link>
          <div className="save" onClick={() => handleSave()}>
            <img src={save} height={40} />
          </div>
        </div>
        <div className="textArea col-lg-7">
          <div className="mb-2">
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              placeholder="Title"
              name="title"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <input
              type="file"
              className="form-control"
              onChange={(e) => imageUploader(e)}
            />
          </div>
          {loading && (
            <div class="spinner-border text-secondary" role="status">
              <span class="sr-only"></span>
            </div>
          )}
          {imageURL && <img src={imageURL} height={200} className="mb-2" />}
          <ReactQuill
            theme="snow"
            modules={{ toolbar: toolbarOptions }}
            value={blogContent}
            name="content"
            onChange={setBlogContent}
          />
        </div>
      </div>
    </>
  );
};

export default NewBlog;
