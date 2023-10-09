import React from "react";
import "./Join.css";

const Join = () => {
  return (
    <div className="join" id="join-us">
      <div id="left-join">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text"> With us</span>
        </div>
      </div>
      <div id="right-join">
        <form action="" className="email-container">
          <input
            type="email"
            name="email"
            placeholder="enter your email address"
          />
          <button className="btn" id="join-btn">
            Join now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
