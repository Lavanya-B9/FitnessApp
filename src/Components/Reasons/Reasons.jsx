import React from "react";
import "./Reasons.css";
import Img1 from "../../assets/gymImg1.avif";
import Img2 from "../../assets/gymImg3.webp";
import Img3 from "../../assets/gymImg4.webp";
import Img4 from "../../assets/gymImg5.webp";
import { AiFillCheckCircle } from "react-icons/ai";
import { SiNike, SiAdidas } from "react-icons/si";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left">
        <img src={Img1} alt="gymImg" />
        <img src={Img2} alt="gymImg" />
        <img src={Img3} alt="gymImg" />
        <img src={Img4} alt="gymImg" />
      </div>
      <div className="right">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">Why</span>
          <span> choose us?</span>
        </div>
        <div className="details">
          <div>
            <AiFillCheckCircle className="r-icon" />
            <span>over 140+ expert coachs</span>
          </div>
          <div>
            <AiFillCheckCircle className="r-icon" />
            <span>train smarter and faster than before</span>
          </div>
          <div>
            <AiFillCheckCircle className="r-icon" />
            <span>1 free program for new members</span>
          </div>{" "}
          <div>
            <AiFillCheckCircle className="r-icon" />
            <span>reliable patners</span>
          </div>{" "}
          <div>
            <AiFillCheckCircle className="r-icon" />
            <span>friendly environment</span>
          </div>
        </div>
        <span id="last"> our patners</span>
        <div className="partners">
          <SiNike />
          <SiAdidas />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
