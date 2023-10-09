import React from "react";
import "./Programs.css";
import { ProgramsData } from "../../Data/ProgramsData";
import { BsArrowRightShort } from "react-icons/bs";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">To Shape</span>
      </div>
      <div className="program-categories">
        {ProgramsData.map((programData, index) => {
          return (
            <div className="category" key={index}>
              <span>{programData.heading}</span>
              <span>{programData.details}</span>

              <div className="join-now">
                <span>
                  Join now
                  <BsArrowRightShort className="icon" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
