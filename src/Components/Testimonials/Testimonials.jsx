import React, { useState } from "react";
import "./Testimonials.css";
import { TestimonialsData } from "../../Data/TestimonialsData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const testimonialsLength = TestimonialsData.length;
  return (
    <div id="testinomials">
      <div id="left">
        <span>Testimonials</span>
        <span className="stroke-text">What They</span>
        <span>say about us</span>
        <span>{TestimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {" "}
            {TestimonialsData[selected].name}
          </span>
          -{TestimonialsData[selected].status}
        </span>
      </div>
      <div id="right">
        <img src={TestimonialsData[selected].image} alt="user" />
        <div className="arrows">
          <AiOutlineArrowLeft
            onClick={() => {
              selected === 0
                ? setSelected(testimonialsLength - 1)
                : setSelected((prev) => prev - 1);
            }}
          />
          <AiOutlineArrowRight
            onClick={() => {
              selected === testimonialsLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
