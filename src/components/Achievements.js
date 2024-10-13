import React from "react";

export default function Achievements() {
  return (
    <>
      <section className="achievements" id="achievements">
        <div className="container">
          <div className="achievements-img">
            <img src="assets/images/Rectangle5651.svg" alt="" />
          </div>
          <div className="section-heading">
            <h1>Achievements</h1>
            <h6>Some honourable mentions</h6>
          </div>
          <div
            className="my-skills"
            data-aos="fade-right"
            data-aos-delay="100ms"
          >
            <div
              className="skill"
              data-date="Colab"
              data-aos="fade-right"
              data-aos-delay="300ms"
            >
              <h3>D4 Hackathon</h3>
              <p>
                Participated in D4 Hackathon challenge 2023
                organized by Dept of CSE, CEC, Jhanjeri, Mohali.
              </p>
              <br />
              <a
                href="https://drive.google.com/file/d/18g_mqC5LffZbyylBxbXy36slrs7UpaB8/view?usp=sharing"
                className="cta"
              >
                Certificate
              </a>
            </div>
            <div
              className="skill"
              data-date="Hard-Work"
              data-aos="fade-right"
              data-aos-delay="600ms"
            >
              <h3>NPTEL</h3>
              <p>
                Secured a certificate in Probability & Statistics 
                conducted by IIT Kharagpur
              </p>
              <br />
              <a
                href="https://drive.google.com/file/d/10sVuxEaxIY2V2_Ydw6lSBBDnujVHRfYj/view?usp=drive_link"
                className="cta"
                
              >
                Certificate
              </a>
            </div>
            <div
              className="skill"
              data-date="Code"
              data-aos="fade-right"
              data-aos-delay="900ms"
            >
              <h3>GeekforGeeks</h3>
              <p>
              Currently maintaining 200+ streaks on the GeeksforGeeks platform, 
              consistently engaging in problem-solving and sharpening my coding skills.  
              </p>
              <br />
              <a
                href="https://www.geeksforgeeks.org/user/priyanshu745/"
                className="cta"
              >
                Visit
              </a>
            </div>
  
          </div>
        </div>
      </section>
    </>
  )
  }
