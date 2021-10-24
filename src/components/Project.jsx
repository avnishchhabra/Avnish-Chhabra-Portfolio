import React from "react";
import ProjectHead from "../Images/head2.jpg";

import service from "../Images/service.svg";
import service2 from "../Images/service2.svg";
import airbnb from "../Images/projects/airbnb.png";
import amazon from "../Images/projects/amazon.png";
import netflix from "../Images/projects/netflix.png";
import "../styles.css";

const projects = [
  {
    name: "Airbnb Clone",
    link: "https://airbnb2-0-henna.vercel.app/",
    selectedFile: airbnb,
  },
  {
    name: "Amazon Clone",
    link: "https://amazon-clone-orcin-eight.vercel.app/",
    selectedFile: amazon,
  },
  {
    name: "Netflix Clone",
    link: "https://netflix-clone-e3ae3.web.app/",
    selectedFile: netflix,
  },
];

const Project = ({ bg, bgColor }) => {

  return (
    <div className="App">
      <div className="container mt-5">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={ProjectHead} alt="First slide" />
            </div>
          </div>
        </div>
      </div>

      <div className={bgColor + " container mt-5"}>
        <h1 className="f-700">Projects</h1>
        <p className="d-flex justify-content-center align-items-center">
          Some of my projects...
          <i
            className={bgColor + " fa fa-2x fa-github mx-2"}
            aria-hidden="true"
          ></i>
        </p>
        <div className="row mt-5">
          {
            projects.map((post) => (
              <div className="col-lg-4 col-md-4 col-10 m-auto">
                <div class={bgColor + " card mb-3 "} style={{ background: bg }}>
                  <img
                    class="card-img-top"
                    src={post.selectedFile}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{post.name}</h5>
                    <a
                      type="button"
                      href={post.link}
                      class="btn btn-outline-light btn-block sourceCode m-auto text-info"
                      target="_blank"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className={bgColor + " container"}>
        <h1 className="f-700">Services</h1>
        <p>Grow Your Business with us</p>
        <div className="row">
          <div class="col-md-4 col-10 mx-auto">
            <div class="box">
              <div class="our-services settings">
                <div class="icon">
                  <img src={service2} width="100px" alt="img" />
                </div>

                <h4>Website Development</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, saepe?
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-10 mx-auto">
            <div class="box">
              <div class="our-services settings">
                <div class="icon">
                  <img src={service} width="100px" alt="img" />
                </div>

                <h4>Digital Marketing</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, saepe?
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-10 mx-auto">
            <div class="box">
              <div class="our-services settings">
                <div class="icon">
                  <img src={service2} width="100px" alt="img" />
                </div>

                <h4>APIs Development</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, saepe?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
