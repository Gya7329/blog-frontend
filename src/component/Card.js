import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "redux/action/blog.action";
import { Loading } from "./Loading/Loading";
const Card = () => {
  const dispatch = useDispatch();
  const [globalLoading, setGlobalLoading] = useState(false);
  const blogs = useSelector((state) => state.blog.blogs);
  useEffect(() => {
    dispatch(getAllBlogs(setGlobalLoading));
  }, []);
  const navigate = useNavigate();
  return (
    <>
      {globalLoading && <Loading />}
      <div class="col-12">
        <div className="d-flex gx-5 flex-flow-row">
          {blogs.map((item) => (
            <div
              class=" mb-3 col-md-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-2"
              key={Math.random(1000000)}
              onClick={() => navigate(`/blog/${item._id}`)}
            >
              <div className="card-container">
                <div class="card-image">
                  <img
                    src={item.image}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://picsum.photos/200/300";
                    }}
                    alt={item.title}
                  />
                </div>
                <div class="card-body">
                  <span class="card-badge card-badge-blue">Blog</span>
                  <h1>
                    {item.title?.length > 30
                      ? item.title.slice(0, 25) + "..."
                      : item.title}
                  </h1>
                  <p
                    class="card-subtitle"
                    dangerouslySetInnerHTML={{
                      __html: item.content?.substring(0, 80) + "...",
                    }}
                  ></p>
                  <div class="card-author">
                    <img
                      src="https://picsum.photos/200/300"
                      alt="author avatar"
                    />
                    <div class="author-info">
                      <p class="author-name">Author</p>
                      <p class="post-timestamp">
                        {new Date().getHours() -
                          new Date(item.createdAt).getHours() ===
                        0
                          ? `${
                              new Date().getMinutes() -
                              new Date(item.createdAt).getMinutes()
                            } minutes ago`
                          : `${
                              new Date().getHours() -
                              new Date(item.createdAt).getHours()
                            } hours ago`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
