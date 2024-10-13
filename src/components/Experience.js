import React from "react";

export default function Experience() {
  return (
    <>
      <section className="experience" id="experience">
        <div className="container">
          <div className="section-heading">
            <h1>Experience</h1>
            <h6>Some of my works</h6>
          </div>
          <div className="timeline">
            <ul>
              <li
                className="date"
                data-date="Jan 2023-Feb 2023"
                data-aos="fade-up"
                data-aos-duration="300ms"
              >
                <h1>Cloud Computing Trainee</h1>
                <p>
                  Worked as Cloud Computing Trainee in Salesforce
                  Earned Adventurer rank badge and collected more than 20 thousand points.
                </p>
                <br />
                <a
                  href="https://www.salesforce.com/trailblazer/su7xqrg8p39ldp3dyg"
                  className="cta"
                >
                  View Work
                </a>
              </li>
              {/* <li
                className="date"
                data-date="Month 2020-Month 2020 | Month 2021-Month 2021"
                data-aos="fade-up"
                data-aos-duration="300ms"
              >
                <h1>Designation 2</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nesciunt accusantium magni ex sapiente incidunt at
                  reprehenderit, nulla inventore. Illum, porro aperiam?
                </p>
                <br />
                <a href className="cta">
                  View Work
                </a>
              </li>
              <li
                className="date"
                data-date="Month 2019-Month 2019"
                data-aos="fade-up"
                data-aos-duration="300ms"
              >
                <h1>Designation 3</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nesciunt accusantium magni ex sapiente incidunt at
                  reprehenderit, nulla inventore. Illum, porro aperiam?
                </p>
                <br />
                <a href className="cta">
                  View Project
                </a>
              </li> */}
            </ul>
            <div className="contact-img">
              <img src="images/Group1956.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
