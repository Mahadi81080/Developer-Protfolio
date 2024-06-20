import Marquee from "react-fast-marquee";
import html from "../../../assets/Skills/Html.png";
import css from "../../../assets/Skills/Css.png";
import tailwind from "../../../assets/Skills/tailwind.png";
import js from "../../../assets/Skills/Js.png";
import React from "../../../assets/Skills/React.png";
import mongodb from "../../../assets/Skills/Mongodb.png";
import nodeJs from "../../../assets/Skills/node.js.png";
import firebase from "../../../assets/Skills/firebase.png";
import express from "../../../assets/Skills/Express.js.png";
const Skills = () => {
  return (
    <div className="bg-[#1b1e26] text-white">
      <div className="bg-[#fff2ec] py-20 px-8 md:px-10 lg:px-14">
        <h3 className="text-6xl font-semibold text-[#dd622d]">
          Skills
        </h3>
      </div>
      <div className="py-2 px-4 bg-[#dd622d]">
        <Marquee pauseOnHover={true} speed={50} gradient={false} className="bg-gray-800">
          <img src={html} alt="HTML" className="h-20 mx-2" />
          <img src={css} alt="CSS" className="h-20 mx-2" />
          <img src={tailwind} alt="Tailwind CSS" className="h-20 mx-2" />
          <img src={js} alt="JavaScript" className="h-20 mx-2" />
          <img src={React} alt="React" className="h-20 mx-2" />
          <img src={nodeJs} alt="Node.js" className="h-20 mx-2" />
          <img src={express} alt="Express.js" className="h-20 mx-2" />
          <img src={mongodb} alt="MongoDB" className="h-20 mx-2" />
          <img src={firebase} alt="Firebase" className="h-20 mx-2" />
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
