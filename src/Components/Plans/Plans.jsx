import React from "react";
import "./Plans.css";
import { PlanData } from "../../Data/PlanData";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="program-header">
        <span className="stroke-text">ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now with us</span>
      </div>
      {/* plans card */}
      <div className="plans">
        {PlanData.map((plan, index) => {
          return (
            <div className="plan" key={index}>
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>
              <div className="features">
                {plan.features.map((feature, index) => {
                  return (
                    <div className="feature" key={index}>
                      <AiFillCheckCircle />
                      <span>{feature}</span>
                    </div>
                  );
                })}
              </div>
              <div>
                <span>
                  See more benefits
                  <BsArrowRightShort className="arrow-icon" />
                </span>
              </div>
              <button className="btn">Join now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
