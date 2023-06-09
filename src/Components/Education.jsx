import React from "react";

const Education = () => {
    return(
        <section className="light" id="education">
            <h2 style={{ textAlign: "center" }}>Education</h2>
            <ol class="timeline-list">
            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">King Mongkut's University of Technology Thonburi</h4>

              <span>2022 - Present</span>

              <p class="timeline-text">
              At this moment, I am studying in the second year of my bachelor's degree in Computer Engineering (International Program) or CPE at KMUTT.
              During these year, I would have some collaborations with profeesors and friends in order to do some projects.
              </p>
            </li>

            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">Assumption College Samutprakarn</h4>

              <span>2010 - 2022</span>

              <p class="timeline-text">
                I've studied in this school since I was in Primary 1. I've learned many things from this school and I've met many friends. Also,
                This place is a start of my journey to learn English, Computer Science, and creating many innovations for the school education.
              </p>

            </li>

          </ol>
        </section>
    )
}

export default Education;
