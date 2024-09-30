import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../../style/cardsLayout/profileCard.scss";

const ProfileCard = () => {
  return (
    <div>
      <div className="card">
        <div className="img"></div>
       
        <p className="info">
          I’m Walter, a multidisciplinary designer who focuses on telling my
          clients’ stories visually, through enjoyable and meaningful
          experiences. I specialize in responsive websites and functional user
          interfaces.
        </p>
        <div className="share">
          <Link className="icon" to="/">
            <FaGithub />
          </Link>
          <Link className="icon" to="/">
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
