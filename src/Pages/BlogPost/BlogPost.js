import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "component/Loading/Loading";
import home from "component/assets/home.png";
import { getSingleBlog } from "redux/action/blog.action";
const BlogPost = () => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const blogDetails = useSelector((state) => state.blog.blog);
  useEffect(() => {
    dispatch(getSingleBlog(id, setGlobalLoading));
  }, []);

  return (
    <>
      {globalLoading && <Loading />}
      <div className="container-fluid row d-flex col-12 justify-content-center">
        <div className="col-lg-1">
          <Link to="/" className="nav-link home mt-4">
            <img src={home} height={40} />
          </Link>
        </div>
        <div className="col-lg-8">
          <div>
            <h1 className="text-center mt-4">{blogDetails?.title}</h1>
          </div>
          <div className="mainPara">
            <p
              className="paragraph text-wrap "
              dangerouslySetInnerHTML={{ __html: blogDetails?.content }}
            ></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
