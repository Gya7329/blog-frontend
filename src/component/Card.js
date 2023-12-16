import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "redux/action/blog.action";
import { Loading } from "./Loading/Loading";
const Card = () => {
  const dispatch = useDispatch();
  const [globalLoading, setGlobalLoading] = useState(false);
  const blogs = useSelector((state) => state?.blog?.blogs);
  useEffect(() => {
    const fetchBlog = async () => {
      dispatch(getAllBlogs(setGlobalLoading));
    };
    fetchBlog();
  }, []);
  const navigate = useNavigate();
  return (
    <>
      {globalLoading && <Loading />}
      <div className="col-12">
        <div className="d-flex gx-5 flex-flow-row">
          {blogs?.map((item) => (
            <div
              className=" mb-3 col-md-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-2"
              key={item._id}
              data-testid="card"
              onClick={() => navigate(`/blog/${item._id}`)}
            >
              <div className="card-container">
                <div className="card-image">
                  <img data-id={item.title} src={item.image} alt={item.title} />
                </div>
                <div className="card-body">
                  <span className="card-badge card-badge-blue">Blog</span>
                  <h1 data-id={item.title}>{item.title}</h1>
                  <p
                    className="card-subtitle"
                    dangerouslySetInnerHTML={{
                      __html: item.content?.substring(0, 80) + "...",
                    }}
                  ></p>
                  <div className="card-author">
                    <img
                      src="https://picsum.photos/200/300"
                      alt="author avatar"
                    />
                    <div className="author-info">
                      <p className="author-name">Author</p>
                      <p className="post-timestamp">
                        {/* {new Date().getHours() -
                          new Date(item.createdAt).getHours() ===
                        0
                          ? `${
                              new Date().getMinutes() -
                              new Date(item.createdAt).getMinutes()
                            } minutes ago`
                          : `${
                              new Date().getHours() -
                              new Date(item.createdAt).getHours()
                            } hours ago`} */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {blogs?.length === 0 && <div data-testid="card"></div>}
        </div>
      </div>
    </>
  );
};

export default Card;
