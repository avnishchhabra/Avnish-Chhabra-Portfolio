import React from "react";
import AboutHead from "../Images/projects/avnish.png";
import reactCertificate from "../Images/projects/react-certificate.png";
import nodeCertificate from "../Images/projects/node-certificate.png";

import "../styles.css";

const certificates = [
  {
    company: "Udemy",
    title: "React: The complete guide",
    duration: "2 months",
    selectedFile: reactCertificate,
  },
  {
    company: "Udemy",
    title: "The complete Node js developer course",
    duration: "2 months",
    selectedFile: nodeCertificate,
  },
];

const About = ({ bg, bgColor }) => {
  // let search = document.getElementById("searchTxt");

  return (
    <div style={{ marginTop: "100px" }}>
      <div style={{ marginTop: "10vw" }}>
        <img src={AboutHead} className="avnish-about" alt="about me" />
      </div>

      <div data-aos="zoom-out" className={bgColor + " container"}>
        <h4 className="text-left mt-5" style={{ textAlign: "center" }}>
          Let Me tell you About myself
        </h4>
        <p className="text-left">
          Hey I am Avnish Chhabra, currently working as a Software Engineer at
          CreateBytes, Gurugram. I am a software developer with excellent
          problem solving skills, ability to perform well in team, looking
          forward to work for my dream (Freelancer) which provides the chance to
          help the people all over globe to achieve their organisation goals and
          to explore new areas of work in a dynamically stable organisation. I
          always willing to work with dedicated peoples , who will help me to
          explore myself.
        </p>
      </div>

      <div className="container mt-5">
        <h1 className={bgColor + " f-700 my-5"}>Certifications</h1>
        <div className="row">
          {certificates.map((post) => (
            <div className="col-lg-4 col-md-4 col-10 m-auto">
              <div class={bgColor + " card mb-3"} style={{ background: bg }}>
                <img
                  class="card-img-top"
                  src={post.selectedFile}
                  alt="certificate"
                />
                <div class="card-body">
                  <h5 class="card-title">{post.company}</h5>
                  <p class="card-text my-0">{post.title}</p>
                  <p class="card-text">
                    <small class="text-muted my-0">{post.duration}</small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <section class={bgColor + " project-work"}>
          <div
            data-aos="flip-up"
            class="container headings text-left"
            style={{ overflow: "hidden" }}
          >
            <h3 class="text-center font-weight-bold mb-4 f-700">
              MORE THEN 100 WEBSITES CREATED
            </h3>
          </div>
          <div class="container d-flex justify-content-around">
            <div>
              <h1 class="count font-weight-bold">20K+</h1>
              <p>Lines of code written</p>
            </div>
            <div>
              <h1 class="count font-weight-bold">10+</h1>
              <p>Awards Won</p>
            </div>
            <div>
              <h1 class="count font-weight-bold">25+</h1>
              <p>Happy Clients</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
