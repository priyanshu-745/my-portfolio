import React from "react";

export default function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="profile-img">
            <img src="assets/WhatsApp Image 2024-10-12 at 15.39.50_99cf9b3f.jpg" />
          </div>
          <div className="skills-img">
            <img src="assets/images/blackball.svg" alt="" />
          </div>
          <div className="about-details">
            <div className="about-heading">
              <h1>About</h1>
              <h6>Know Me!!</h6>
            </div>
            <br />
            <h3> Hi! This is Priyanshu Pandey </h3>
            <br />
            <p>
              Engineering student with skills in C++, Python, HTML5, CSS,
              JS, and Data Structures/Algorithms. Quick learner, team
              player with strong communication, eager to contribute to projects.
              <br />
              <br />
              <a
                href="https://drive.google.com/file/d/1nkH2TQ4MkJ3Cjap9YB0ui1ZithcQ8dqu/view?usp=drive_link"
                target="_blank"
                className="cta"
              >
                Checkout my Resume
              </a>
            </p>
            <br />
            <div className="social-media">
              <ul className="nav-list">
                <li>
                  <a
                    href="mailto:priyanshupandey745@gmail.com"
                    className="icon-link"
                  >
                    <img src="assets/social/gmail.svg" alt="" srcet="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/priyanshu-pandey-419117233/"
                    className="icon-link"
                  >
                    <img src="assets/social/linkedin.svg" alt="" srcSet="" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/priyanshu-745" className="icon-link">
                    <img src="assets/social/github.svg" alt="" srcSet="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/Priy__Pandey"
                    className="icon-link"
                  >
                    <img src="assets/social/x-social.svg" alt="" srcSet="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
