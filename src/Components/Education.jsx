import React from "react";

const Education = () => {
  return (
    <section className="light" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div className="education-content">
        <div className="education-item">
          <h4 className="h4 education-item-title">
            King Mongkut's University of Technology Thonburi
          </h4>
          <span>2022 - Present</span>
          <p className="education-text">
            At this moment, I am studying in the second year of my bachelor's degree in Computer Engineering (International Program) or CPE at KMUTT.
            During these years, I collaborate with professors and friends on various projects.
          </p>
        </div>

        <div className="education-item">
          <h4 className="h4 education-item-title">
            Assumption College Samutprakarn
          </h4>
          <span>2010 - 2022</span>
          <p className="education-text">
            I studied at this school from Primary 1. I learned many things and made numerous friends here. It was the starting point of my journey to learn English, Computer Science, and create innovations for school education.
          </p>
        </div>
      </div>
    </section>
  );
};


export default Education;
