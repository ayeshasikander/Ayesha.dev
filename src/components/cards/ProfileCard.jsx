import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { URLS } from "../../assets/url/Url";
import "../../style/cardsLayout/profileCard.scss";

const ProfileCard = () => {
  return (
    <div>
      <div className="card">
        <p className="info">
          Hi, I'm Ayesha Sikander I'm a passionate web developer with expertise
          in Front-End Development. I focus on creating engaging and responsive
          user interfaces, while also having the capability to develop basic
          backend functionality.
        </p>
        <div className="share">
          <Link
            className="icon"
            to={URLS.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            className="icon"
            to={URLS.linkedInProfile}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
          <Link className="icon" to="/">
            <FaInstagram />
          </Link>
          <Link
            className="icon"
            to={URLS.twitterProfile}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </Link>
        </div>
        <a href="/Ayesha_Sikander_ReactJS_Developer.pdf">
          {" "}
          <button>Resume</button>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
