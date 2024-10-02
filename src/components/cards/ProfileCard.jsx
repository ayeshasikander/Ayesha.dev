import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
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
          <Link className="icon" to="https://github.com/ayeshasikander">
            <FaGithub />
          </Link>
          <Link className="icon" to="https://www.linkedin.com/in/ayesha-sikander/">
            <FaLinkedin />
          </Link>
          <Link className="icon" to="/">
            <FaInstagram />
          </Link>
          <Link className="icon" to="/">
            <FaXTwitter />
          </Link>
        </div>
        <button>Resume</button>
      </div>
    </div>
  );
};

export default ProfileCard;
