import { useContext, useRef, useState, useEffect } from "react";
import projectContext from "../context/projectContext";
import profileContext from "../context/profileContext";
import CommunityCard from "./CommunityCard";
import axios from "axios";
import PropTypes from "prop-types";
import Skeleton from "@mui/material/Skeleton"; // Import Material UI Skeleton
import "../css/Community.css";
import avatar from "../assets/images/Dropdown/avatar.png";
import ViewAllModalImg from "../assets/images/Modal Image/ViewAll.png";
import githubModalImg from "../assets/images/Modal Image/GitHub.png";
import unlinkModalImg from "../assets/images/Modal Image/Unlink.png";
import optionModalImg from "../assets/images/Modal Image/Option.png";
import closeModalImg from "../assets/images/Modal Image/Close.png";
import AavtarModalImg from "../assets/images/Modal Image/Aavtar.png";
import LikeModalImg from "../assets/images/Modal Image/Like.png";
import LinkModalImg from "../assets/images/Modal Image/Link.png";
import FavourModalImg from "../assets/images/Modal Image/Favourite.png";
import commentModalImg from "../assets/images/Modal Image/comment.png";
import ShareModalImg from "../assets/images/Modal Image/Share.png";

const Community = (props) => {
  const VITE_SERVER_PORT = import.meta.env.VITE_SERVER_PORT || 'https://bitbox-uxbo.onrender.com';
  const [loading, setLoading] = useState(true); // State to track loading
  const [project, setProject] = useState({
    id: "",
    etitle: "",
    edescription: "",
    egitHubLink: "",
    eyouTubeLink: "",
  });
  const [showVideo, setShowVideo] = useState(false);
  const refDetails = useRef(null);
  const ref = useRef(null);
  const context = useContext(projectContext);
  const { globalProjects, getGlobalProjects } = context;
  const userProfileContext = useContext(profileContext);
  const { userProfile, getUserProfile } = userProfileContext;
  const [image, setImage] = useState();

  // Fetch projects on component mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching
      await getGlobalProjects();
      setLoading(false); // Set loading to false after data is fetched
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserProfile();
    }
    // eslint-disable-next-line
  }, []);

  // Avatar Profile Image
  useEffect(() => {
    axios
      .get(`${VITE_SERVER_PORT}/getAvatarImage`)
      .then((res) => setImage(res.data[res.data.length - 1].image)) // Fetch the last uploaded image
      .catch((err) => console.log(err));
  });

  const showDetailProject = (currentProject) => {
    refDetails.current.click();
    setProject({
      id: currentProject._id,
      etitle: currentProject.title,
      edescription: currentProject.description,
      egitHubLink: currentProject.gitHubLink,
      eyouTubeLink: currentProject.youTubeLink,
    });
  };

  const handleVideoClose = () => {
    setShowVideo(false);
  };

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);

    return `${day}/${month}/${year} | ${hours}:${minutes}`;
  };

  return (
    <>
      <div className="user-profile-dashboard">
        <div className="user-details">
          <div
            className="globalproject-left mt-[6rem]"
            style={{
              background: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
              borderRight: props.mode === "dark" ? "1px solid white" : "",
            }}
          >
            <div
              className="globaldetail-left"
              style={{
                background: props.mode === "dark" ? "black" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <div className="profile-picture mb-3 mt-2">
                {image ? (
                  <img
                    src={image}
                    alt="avatar"
                    style={{
                      background: props.mode === "dark" ? "white" : "",
                      outline: props.mode === "dark" ? "2px solid white" : "",
                    }}
                  />
                ) : (
                  <img
                    src={avatar}
                    style={{
                      background: props.mode === "dark" ? "white" : "",
                      outline: props.mode === "dark" ? "2px solid white" : "",
                    }}
                    className="avatar img-circle"
                    alt="avatar"
                  />
                )}
              </div>
              <div className="global-bio">
                <div>
                  Name: <span>{userProfile.name}</span>
                </div>
                <div>
                  College: <span>{userProfile.college}</span>
                </div>
              </div>
              <hr />
              <div className="global-links">
                <h3>Discover</h3>
                <div>Popular</div>
                <div>Most Viewed</div>
                <div>Top rated</div>
              </div>
              <hr />
              <div className="global-skills">
                <h3>Contri</h3>
                <div>Discussion</div>
              </div>
              <hr />
              <div className="global-experience">
                <h3>Manage</h3>
                <div>Saved</div>
              </div>

              <div className="global-share">
                <h3>Share</h3>
                <div>Invite friends</div>
              </div>
            </div>
          </div>
          <div className="globalproject-right">
            <div className="globaldetail-right">
              <h2 className="Heading-Page">Welcome to Bitbox Community</h2>
              {loading ? (
                <div className="container Global-Sec-Container">
                  <div className="row">
                    {/* Render skeleton for each project card (you can adjust count) */}
                    {[1, 2, 3, 4].map((index) => (
                      <div className="col-md-4" key={index}>
                        <Skeleton
                          variant="rectangular"
                          width="100%"
                          height={200}
                        />
                        <Skeleton width="60%" height={30} />
                        <Skeleton width="80%" height={20} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  {/* Detail Button trigger modal */}
                  <button
                    ref={refDetails}
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#detailToggle"
                  ></button>
                  {/* Project Details Modal */}
                  <div
                    className="modal fade"
                    id="detailToggle"
                    ref={ref}
                    tabIndex="-1"
                    aria-labelledby="detailToggle"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog project-modal-section"
                      style={{ maxWidth: "100%" }}
                    >
                      <div
                        className="modal-content"
                        style={{ background: "transparent", border: "none" }}
                      >
                        <div className="modal-body">
                          <section className="project-modal-section-container">
                            <div
                              className="project-modal-container"
                              style={{
                                background:
                                  props.mode === "dark" ? "black" : "white",
                                color:
                                  props.mode === "dark" ? "white" : "black",
                                outline:
                                  props.mode === "dark"
                                    ? "1px solid white"
                                    : "",
                              }}
                            >
                              <div className="project-modal-left">
                                {/* <!-- Modal Head --> */}
                                <div className="modal-left-head">
                                  <div className="modal-project-navigation">
                                    <div className="left-navigation">
                                      <img
                                        src="./src/assets/images/Others/arrow pre_next.png"
                                        title="previous"
                                        alt="previous"
                                      />
                                    </div>
                                    <div className="right-navigation">
                                      <img
                                        src="./src/assets/images/Others/arrow pre_next.png"
                                        title="next"
                                        alt="next"
                                      />
                                    </div>
                                  </div>
                                  <div className="modal-tag-group">
                                    <div
                                      className="modal-project-tag"
                                      style={{
                                        background:
                                          props.mode === "dark" ? "white" : "",
                                        color:
                                          props.mode === "dark" ? "black" : "",
                                        outline:
                                          props.mode === "dark"
                                            ? "1px solid white"
                                            : "",
                                      }}
                                    >
                                      Category
                                    </div>
                                    <div
                                      className="modal-project-tag"
                                      style={{
                                        background:
                                          props.mode === "dark" ? "white" : "",
                                        color:
                                          props.mode === "dark" ? "black" : "",
                                        outline:
                                          props.mode === "dark"
                                            ? "1px solid white"
                                            : "",
                                      }}
                                    >
                                      Latest
                                    </div>
                                  </div>
                                </div>
                                {/* <!-- Modal Section --> */}
                                <div className="modal-left-section">
                                  <div
                                    className="modal-title"
                                    style={{
                                      color:
                                        props.mode === "dark"
                                          ? "white"
                                          : "black",
                                    }}
                                  >
                                    {project.etitle}
                                  </div>
                                  <div className="modal-technology-tag">
                                    <a
                                      href=""
                                      style={{
                                        background:
                                          props.mode === "dark" ? "white" : "",
                                        color:
                                          props.mode === "dark" ? "black" : "",
                                      }}
                                    >
                                      Web
                                    </a>
                                  </div>
                                  <div
                                    className="modal-Time"
                                    style={{
                                      color:
                                        props.mode === "dark" ? "white" : "",
                                    }}
                                  >
                                    {formatDate(project.date)}
                                  </div>
                                  {/* <div className="modal-project-image">
                                  <img src="./src/assets/images/Vector Gif/R.gif" alt="" />
                                </div>  */}
                                  <div className="modal-project-vedio">
                                    {project.eyouTubeLink ? (
                                      <iframe
                                        className="youtube-Frame"
                                        src={project.eyouTubeLink}
                                        frameBorder="0"
                                        allowFullScreen
                                      ></iframe>
                                    ) : (
                                      <iframe
                                        className="youtube-Frame"
                                        src="https://www.youtube.com/embed/lwv_0SEJ4NQ"
                                        frameBorder="0"
                                        allowFullScreen
                                      ></iframe>
                                    )}
                                  </div>
                                  <div
                                    className="modal-description"
                                    style={{
                                      color:
                                        props.mode === "dark" ? "white" : "",
                                    }}
                                  >
                                    {project.edescription ? (
                                      <p>{project.edescription}</p>
                                    ) : (
                                      <p>No description to display</p>
                                    )}
                                  </div>
                                  <div className="modal-project-details">
                                    <div
                                      className="modal-project-likecount"
                                      style={{
                                        color:
                                          props.mode === "dark" ? "white" : "",
                                      }}
                                    >
                                      1 Like
                                    </div>
                                    <div
                                      className="modal-project-comment"
                                      style={{
                                        color:
                                          props.mode === "dark" ? "white" : "",
                                      }}
                                    >
                                      8 comments
                                    </div>
                                  </div>
                                  <div
                                    className="modal-project-engagement-container"
                                    style={{
                                      background:
                                        props.mode === "dark" ? "white" : "",
                                      color:
                                        props.mode === "dark" ? "black" : "",
                                      outline:
                                        props.mode === "dark"
                                          ? "1px solid white"
                                          : "",
                                    }}
                                  >
                                    <div className="modal-project-love">
                                      <img src={LikeModalImg} alt="Like" />
                                    </div>
                                    <div className="modal-project-comment">
                                      <img
                                        src={commentModalImg}
                                        alt="Comment"
                                      />
                                    </div>
                                    <div className="modal-favourite-details">
                                      <img
                                        src={FavourModalImg}
                                        alt="Favourite"
                                      />
                                    </div>
                                    <div className="modal-project-link">
                                      <img src={LinkModalImg} alt="Link" />
                                    </div>
                                  </div>
                                  <section className="modal-comment-section">
                                    <div
                                      className="modal-post-commment"
                                      style={{
                                        background:
                                          props.mode === "dark" ? "white" : "",
                                      }}
                                    >
                                      <div className="modal-post-commment-avatar">
                                        <img
                                          src={AavtarModalImg}
                                          alt="avatar-image"
                                        />
                                      </div>
                                      <span
                                        style={{
                                          color:
                                            props.mode === "dark"
                                              ? "black"
                                              : "",
                                        }}
                                      >
                                        Share Your Thoughts...
                                      </span>
                                      <div
                                        className="modal-post-commment-button"
                                        style={{
                                          color:
                                            props.mode === "dark"
                                              ? "black"
                                              : "",
                                        }}
                                      >
                                        Post
                                      </div>
                                    </div>
                                    <div
                                      className="modal-comment-container"
                                      style={{
                                        background:
                                          props.mode === "dark" ? "white" : "",
                                        outline:
                                          props.mode === "dark"
                                            ? "1px solid white"
                                            : "",
                                      }}
                                    >
                                      <header className="modal-comment-header">
                                        <div className="modal-comment-user-avatar">
                                          <img
                                            src={AavtarModalImg}
                                            alt="user-avatar"
                                          />
                                        </div>
                                        <div className="modal-comment-user-details mx-2">
                                          <div
                                            className="modal-comment-user-name"
                                            style={{
                                              color:
                                                props.mode === "dark"
                                                  ? "black"
                                                  : "",
                                            }}
                                          >
                                            Anuj Verma
                                          </div>
                                          <div
                                            className="modal-comment-user-id"
                                            style={{
                                              color:
                                                props.mode === "dark"
                                                  ? "black"
                                                  : "",
                                            }}
                                          >
                                            @anujverma
                                            <div
                                              className="modal-comment-user-time mx-2"
                                              style={{
                                                color:
                                                  props.mode === "dark"
                                                    ? "black"
                                                    : "",
                                              }}
                                            >
                                              12 hours ago
                                            </div>
                                          </div>
                                        </div>
                                      </header>
                                      <div className="modal-comment-content-container">
                                        <div
                                          className="modal-comment-content"
                                          style={{
                                            color:
                                              props.mode === "dark"
                                                ? "black"
                                                : "",
                                          }}
                                        >
                                          nerds - always gotta prove they are
                                          hardcore
                                        </div>
                                        <div className="modal-comment-engagement-container">
                                          <div className="modal-comment-project-love">
                                            <img
                                              src={LikeModalImg}
                                              alt="Like"
                                            />
                                          </div>
                                          <div className="modal-project-comment">
                                            <img
                                              src={commentModalImg}
                                              alt="Comment"
                                            />
                                          </div>
                                          <div className="modal-favourite-details">
                                            <img
                                              src={ShareModalImg}
                                              alt="Share"
                                            />
                                          </div>
                                          <div className="modal-project-link">
                                            <img
                                              src={optionModalImg}
                                              alt="Option"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </div>
                              <div className="project-modal-right">
                                <div className="modal-right-head">
                                  {project.egitHubLink ? (
                                    <a
                                      className="button-github-modal"
                                      href={project.egitHubLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      title="GitHub Link"
                                      style={{
                                        background:
                                          props.mode === "dark" ? "white" : "",
                                        color:
                                          props.mode === "dark" ? "black" : "",
                                        outline:
                                          props.mode === "dark"
                                            ? "1px solid white"
                                            : "",
                                      }}
                                    >
                                      <img src={githubModalImg} alt="GitHub" />
                                      GitHub
                                    </a>
                                  ) : (
                                    <a
                                      className="button-github-modal"
                                      href={project.egitHubLink}
                                      title="Unavailable GitHub Link"
                                      style={{
                                        background:
                                          props.mode === "dark" ? "white" : "",
                                        color:
                                          props.mode === "dark" ? "black" : "",
                                        outline:
                                          props.mode === "dark"
                                            ? "1px solid white"
                                            : "",
                                      }}
                                    >
                                      <img
                                        src={unlinkModalImg}
                                        alt="Invalid Link"
                                      />
                                      Unavailable
                                    </a>
                                  )}
                                  <div
                                    className="project-modal-head-buttons"
                                    style={{
                                      background:
                                        props.mode === "dark" ? "white" : "",
                                    }}
                                  >
                                    <div className="option-modal-button">
                                      <img
                                        src={optionModalImg}
                                        alt="option"
                                        title="option"
                                      />
                                    </div>
                                    {/* close button */}
                                    <div
                                      className="close-modal-button mx-2"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      <img
                                        src={closeModalImg}
                                        title="close"
                                        alt="close"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="modal-profile-details-container"
                                  style={{
                                    background:
                                      props.mode === "dark" ? "white" : "",
                                    outline:
                                      props.mode === "dark"
                                        ? "1px solid white"
                                        : "",
                                  }}
                                >
                                  <div className="modal-profile-details">
                                    <div className="modal-profile-image">
                                      <img
                                        src={AavtarModalImg}
                                        alt="avatar-image"
                                      />
                                    </div>
                                    <div className="modal-profile-user-details">
                                      <div
                                        className="modal-profile-name"
                                        style={{
                                          color:
                                            props.mode === "dark"
                                              ? "black"
                                              : "",
                                        }}
                                      >
                                        Anuj Verma
                                      </div>
                                      <div
                                        className="modal-profile-username"
                                        style={{
                                          color:
                                            props.mode === "dark"
                                              ? "black"
                                              : "",
                                        }}
                                      >
                                        @anuj3553
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="modal-visit-profile-btn"
                                    style={{
                                      color:
                                        props.mode === "dark" ? "black" : "",
                                    }}
                                  >
                                    Visit
                                    <img src={ShareModalImg} alt="visit" />
                                  </div>
                                </div>
                                <div
                                  className="modal-suggestion-container"
                                  style={{
                                    outline:
                                      props.mode === "dark"
                                        ? "1px solid white"
                                        : "",
                                  }}
                                >
                                  <div
                                    className="modal-suggestion-title"
                                    style={{
                                      color:
                                        props.mode === "dark" ? "white" : "",
                                    }}
                                  >
                                    You might like
                                  </div>
                                  <div
                                    className="modal-project-divider"
                                    style={{
                                      outline:
                                        props.mode === "dark"
                                          ? "1px solid white"
                                          : "",
                                    }}
                                  ></div>
                                  <div className="modal-suggestion-project-container">
                                    <div className="modal-suggestion-project">
                                      <div className="modal-suggestion-project-img">
                                        <img src={AavtarModalImg} alt="image" />
                                      </div>
                                      <div className="modal-suggestion-project-details">
                                        <div className="modal-suggestion-project-details-title">
                                          ABC
                                        </div>
                                        <div className="modal-suggestion-project-engagement">
                                          <div className="modal-suggestion-project-likes">
                                            200 Likes
                                          </div>
                                          <div className="modal-suggestion-project-comments">
                                            50 Comments
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="modal-suggestion-project">
                                      <div className="modal-suggestion-project-img">
                                        <img src={AavtarModalImg} alt="image" />
                                      </div>
                                      <div className="modal-suggestion-project-details">
                                        <div className="modal-suggestion-project-details-title">
                                          ABC
                                        </div>
                                        <div className="modal-suggestion-project-engagement">
                                          <div className="modal-suggestion-project-likes">
                                            200 Likes
                                          </div>
                                          <div className="modal-suggestion-project-comments">
                                            50 Comments
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="modal-suggestion-project">
                                      <div className="modal-suggestion-project-img">
                                        <img src={AavtarModalImg} alt="image" />
                                      </div>
                                      <div className="modal-suggestion-project-details">
                                        <div className="modal-suggestion-project-details-title">
                                          ABC
                                        </div>
                                        <div className="modal-suggestion-project-engagement">
                                          <div className="modal-suggestion-project-likes">
                                            200 Likes
                                          </div>
                                          <div className="modal-suggestion-project-comments">
                                            50 Comments
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="modal-project-divider"
                                    style={{
                                      outline:
                                        props.mode === "dark"
                                          ? "1px solid white"
                                          : "",
                                    }}
                                  ></div>
                                  <div className="modal-suggestion-viewall">
                                    View all
                                    <div
                                      className="viewall-image mx-2"
                                      style={{
                                        background:
                                          props.mode === "dark" ? "white" : "",
                                        borderRadius: "50%",
                                      }}
                                    >
                                      <img src={ViewAllModalImg} alt=">" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="modal-suggestion-container"
                                  style={{
                                    outline:
                                      props.mode === "dark"
                                        ? "1px solid white"
                                        : "",
                                  }}
                                >
                                  <div className="modal-suggestion-title">
                                    Most Liked Project
                                  </div>
                                  <div
                                    className="modal-project-divider"
                                    style={{
                                      outline:
                                        props.mode === "dark"
                                          ? "1px solid white"
                                          : "",
                                    }}
                                  ></div>
                                  <div className="modal-suggestion-project-container">
                                    <div className="modal-suggestion-project">
                                      <div className="modal-suggestion-project-img">
                                        <img src={AavtarModalImg} alt="image" />
                                      </div>
                                      <div className="modal-suggestion-project-details">
                                        <div className="modal-suggestion-project-details-title">
                                          ABC
                                        </div>
                                        <div className="modal-suggestion-project-engagement">
                                          <div className="modal-suggestion-project-likes">
                                            200 Likes
                                          </div>
                                          <div className="modal-suggestion-project-comments">
                                            50 Comments
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="modal-suggestion-project">
                                      <div className="modal-suggestion-project-img">
                                        <img src={AavtarModalImg} alt="image" />
                                      </div>
                                      <div className="modal-suggestion-project-details">
                                        <div className="modal-suggestion-project-details-title">
                                          ABC
                                        </div>
                                        <div className="modal-suggestion-project-engagement">
                                          <div className="modal-suggestion-project-likes">
                                            200 Likes
                                          </div>
                                          <div className="modal-suggestion-project-comments">
                                            50 Comments
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="modal-suggestion-project">
                                      <div className="modal-suggestion-project-img">
                                        <img src={AavtarModalImg} alt="image" />
                                      </div>
                                      <div className="modal-suggestion-project-details">
                                        <div className="modal-suggestion-project-details-title">
                                          ABC
                                        </div>
                                        <div className="modal-suggestion-project-engagement">
                                          <div className="modal-suggestion-project-likes">
                                            200 Likes
                                          </div>
                                          <div className="modal-suggestion-project-comments">
                                            50 Comments
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="modal-project-divider"
                                    style={{
                                      outline:
                                        props.mode === "dark"
                                          ? "1px solid white"
                                          : "",
                                    }}
                                  ></div>
                                  <div className="modal-suggestion-viewall">
                                    View all
                                    <div
                                      className="viewall-image mx-2"
                                      style={{
                                        background:
                                          props.mode === "dark" ? "white" : "",
                                        borderRadius: "50%",
                                      }}
                                    >
                                      <img src={ViewAllModalImg} alt=">" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="modal-suggestion-container"
                                  style={{
                                    outline:
                                      props.mode === "dark"
                                        ? "1px solid white"
                                        : "",
                                  }}
                                >
                                  <div className="modal-suggestion-title">
                                    Best Discussion
                                  </div>
                                  <div
                                    className="modal-project-divider"
                                    style={{
                                      outline:
                                        props.mode === "dark"
                                          ? "1px solid white"
                                          : "",
                                    }}
                                  ></div>
                                  <div className="modal-suggestion-project-container">
                                    <div className="modal-suggestion-project">
                                      <div className="modal-suggestion-project-img">
                                        <img src={AavtarModalImg} alt="image" />
                                      </div>
                                      <div className="modal-suggestion-project-details">
                                        <div className="modal-suggestion-project-details-title">
                                          Let&apos;s get animating!
                                        </div>
                                        <div className="modal-suggestion-project-engagement">
                                          <div className="modal-suggestion-project-comments">
                                            50 Comments
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="modal-suggestion-project">
                                      <div className="modal-suggestion-project-img">
                                        <img src={AavtarModalImg} alt="image" />
                                      </div>
                                      <div className="modal-suggestion-project-details">
                                        <div className="modal-suggestion-project-details-title">
                                          HTML First
                                        </div>
                                        <div className="modal-suggestion-project-engagement">
                                          <div className="modal-suggestion-project-comments">
                                            50 Comments
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="modal-suggestion-project">
                                      <div className="modal-suggestion-project-img">
                                        <img src={AavtarModalImg} alt="image" />
                                      </div>
                                      <div className="modal-suggestion-project-details">
                                        <div className="modal-suggestion-project-details-title">
                                          Bitbox Talks
                                        </div>
                                        <div className="modal-suggestion-project-engagement">
                                          <div className="modal-suggestion-project-comments">
                                            50 Comments
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="modal-project-divider"
                                    style={{
                                      outline:
                                        props.mode === "dark"
                                          ? "1px solid white"
                                          : "",
                                    }}
                                  ></div>
                                  <div className="modal-suggestion-viewall">
                                    I&apos;m feeling lucky
                                    <div
                                      className="viewall-image mx-2"
                                      style={{
                                        background:
                                          props.mode === "dark" ? "white" : "",
                                        borderRadius: "50%",
                                      }}
                                    >
                                      <img src={ViewAllModalImg} alt=">" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container Global-Sec-Container">
                    <div className="row">
                      {globalProjects.map((project) => {
                        return (
                          <CommunityCard
                            showAlert={props.showAlert}
                            mode={props.mode}
                            showDetailProject={showDetailProject}
                            key={project._id}
                            project={project}
                          />
                        );
                      })}
                      {/* <div className="container community-prev-next flex justify-content-between">
                      <button type='button' className='btn btn-dark' onClick={handlePrevClick}>&larr; Previous</button>
                      <button type='button' className='btn btn-dark' onClick={handleNextClick}>Next &larr;</button>
                    </div> */}
                    </div>
                  </div>
                  {/* youTube video Modal */}
                  {showVideo && (
                    <div className="video-overlays container">
                      <div className="Video-Modal container">
                        <div className="Video-card ">
                          <div className="Video-content">
                            <button
                              className="exit2-button"
                              onClick={handleVideoClose}
                            >
                              <svg height="20px" viewBox="0 0 384 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
                              </svg>
                            </button>
                            <p className="video-heading fs-1">Project Video</p>
                            <p>
                              <iframe
                                className="youtube-Frame"
                                width="350"
                                height="315"
                                src={project.eyouTubeLink}
                                frameBorder="0"
                                allowFullScreen
                              ></iframe>
                            </p>
                          </div>
                          <div className="card-button-wrapper">
                            <button
                              className="card-button secondary"
                              onClick={handleVideoClose}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Props Vadilation
Community.propTypes = {
  mode: PropTypes.string,
  toggleMode: PropTypes.func,
  project: PropTypes.string,
  showAlert: PropTypes.func,
};

export default Community;
