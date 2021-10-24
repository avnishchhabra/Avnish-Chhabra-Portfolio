import React, { useState } from "react";
import CallMadeIcon from "@material-ui/icons/CallMade";
import axios from "axios";
import Home5 from "../Images/home5.svg";
import Avnish from "../Images/projects/avnish.png";
import { NavLink } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "../styles.css";

const educationData = [
  {
    key: 1,
    school: "Guru Nanak Institutions of Technology(GNIT), Mullana",
    score: "73%",
    image: (
      <img
        src="https://img.icons8.com/emoji/48/000000/school-emoji.png"
        className="mx-2"
        alt="school emoji"
      />
    ),
    subject: "Bachelor Of Technology(B.Tech)",
    batch: "2016-2020",
  },
  {
    key: 2,
    school: "GSSSS, Shahabad Markanda",
    score: "85%",
    image: (
      <img
        src="https://img.icons8.com/emoji/48/000000/school-emoji.png"
        className="mx-2"
        alt='school emoji'
      />
    ),
    subject: "12th HBSE Board",
    batch: "2015-2016",
  },
  {
    key: 3,
    school: "CHHS, Shahabad Markanda",
    score: "89%",
    image: (
      <img
        src="https://img.icons8.com/emoji/48/000000/school-emoji.png"
        className="mx-2"
        alt='school emoji'
      />
    ),
    subject: "10th HBSE Board",
    batch: "2015-2016",
  },
];

const progressSkills = [
  {
    key: 1,
    skill: "HTML/CSS",
    score: "85",
    color: "bg-danger",
  },
  {
    key: 2,
    skill: "Javascript",
    score: "80",
    color: "bg-warning",
  },
  {
    key: 3,
    skill: "ReactJs | Redux",
    score: "90",
    color: "bg-success",
  },
  {
    key: 4,
    skill: "NextJs",
    score: "85",
    color: "bg-success",
  },
  {
    key: 5,
    skill: "NodeJs",
    score: "75",
    color: "bg-info",
  },
  {
    key: 6,
    skill: "MongoDB",
    score: "80",
    color: "bg-dark",
  },
  {
    key: 7,
    skill: "Material UI",
    score: "75",
    color: "bg-info",
  },
  {
    key: 8,
    skill: "Ant Design",
    score: "85",
    color: "bg-warning",
  },
  //  {
  //   key: 9,
  //   skill: "C++ | OOPS",
  //   score: "85",
  //   color:  "bg-success",
  //  },
  //  {
  //   key: 10,
  //   skill: "DBMS",
  //   score: "80",
  //   color:  "bg-info",
  //  },
];

const experienceData = [
  {
    key: 1,
    Organisation: "CreateBytes, Gurugram",
    Position: "Associate Software Engineer",
    Description:
      "Worked as a team member of LKS and SendBiz projects. Made HydroClimX and BizMart websites solo. Also made dozens of personal practice projects.",
    batch: "04/2021 - Present",
  },
  {
    key: 2,
    Organisation: "(Personal Projects)",
    Position: "Website Developer",
    Description:
      "Made Netflix, Amazon, AirBnb etc. frontend clones to learn and practice React js ",
    batch: "01/2021 - 03/2021",
  },
  //  {
  //   key: 3,
  //   Organisation: "Youth Empowerment Foundation",
  //   Position: "Digital Marketing Intern",
  //   Description: "Worked in Project Milaap - The vision of Project MILAAP focuses on providing help and support to the daily wagers, migrant and roving workmen force, people working in blue-collar jobs.",
  //   batch: "5/2020-6/2020"
  //  },
];

const Home = ({ bgColor, bg, education }) => {
  const [postData, setPostData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://portfolio-by-mohit.herokuapp.com/portfolio/contacts",
        postData
      )
      .then((response) => {
        console.log(response);
        alert("Message Has Been Send Successfully");
      });
    setPostData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    let ele = document.createElement("div");
    let Contact = document.getElementById("contact");
    ele.innerText = `Thanks For connecting.`;
    ele.setAttribute("className", "alert alert-success");
    Contact.appendChild(ele);
  };

  return (
    <div className="container mt-3" style={{ overflow: "hidden" }}>
      <a
        href="https://wa.me/919306467463"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <div className="row row1" style={{ overflow: "hidden" }}>
        <div
          data-aos="fade-right"
          className="col-md-6 col-12 order-md-0 order-1 d-flex justify-content-center align-items-center flex-column"
        >
          <h2 className={bgColor} style={PrimaryText}>
            Hi, I am{" "}
            <span className="font-weight-bold text-info">Avnish Chhabra</span>
          </h2>
          <h4 className={bgColor} style={secondaryText}>
            Full stack Developer(MERN) | Software Engineer
          </h4>
          <p className={bgColor} style={secondaryText}>
            I am from{" "}
            <span className="font-weight-bold text-info">
              Shahabad Markanda, Haryana, India
            </span>
          </p>
          <div className="row my-3 justify-content-between">
            <div className="col-3">
              <a
                className={bgColor}
                href="https://www.instagram.com/chhabra_avnish"
              >
                <i
                  className={bgColor + " fa fa-3x fa-instagram"}
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="col-3">
              <a href="https://www.linkedin.com/in/avnish-chhabra/">
                {" "}
                <i
                  className={bgColor + " fa fa-3x fa-linkedin"}
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="col-3">
              <a href="https://github.com/avnishchhabra">
                {" "}
                <i
                  className={bgColor + " fa fa-3x fa-github"}
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="col-md-6 col-12 order-md-0 m-auto order-0"
        >
          <Carousel>
            <Carousel.Item>
              <figure className="mohit m-auto">
                <img
                  src={Avnish}
                  className="mohitimg  img-responsive "
                  alt="Avnish Chhara"
                />
              </figure>
              {/* <img className="d-block  w-100" src={Home3} alt="First slide" /> */}
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div>
        <h1 className={bgColor + " my-5"} style={PrimaryText}>
          Experience
        </h1>

        <div className="row mt-4" style={{ overflow: "hidden" }}>
          <div className="col-md-6 m-auto col-10 order-md-1 order-0">
            <figure data-aos="flip-left">
              <img
                src={education[1]}
                className=" mohitbio img-responsive "
                alt="Experience"
              />
            </figure>
          </div>
          <div
            data-aos="flip-right"
            className="col-md-6 col-12 order-md-0 order-1 d-flex justify-content-center align-items-center flex-column"
          >
            <div className="container mt-5 mb-5">
              <div className="row">
                <div className="col-md-12 offset-md-1">
                  <ul className="timeline experience">
                    {experienceData.map((data) => (
                      <li key={data.key}>
                        <div className="timeline_data">
                          <h4 className={bgColor}>{data.Position}</h4>
                          <h5 className={bgColor}>{data.batch}</h5>
                          <p className={bgColor + " my-0"}>
                            {data.Organisation}
                          </p>
                          <p className={bgColor + " my-0"}>
                            {data.Description}
                          </p>
                          <hr className={bgColor} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className={bgColor + " my-5"} style={PrimaryText}>
          Education
        </h1>

        <div className="row mt-4" style={{ overflow: "hidden" }}>
          <div className="col-md-6 m-auto col-10 order-md-0 order-0">
            <figure data-aos="flip-left">
              <img
                src={education[0]}
                className=" mohitbio img-responsive "
                alt="education item"
              />
            </figure>
          </div>
          <div
            data-aos="flip-right"
            className="col-md-6 col-12 order-md-0 order-1 d-flex justify-content-center align-items-center flex-column"
          >
            <div className="container mt-5 mb-5">
              <div className="row">
                <div className="col-md-12 offset-md-1">
                  <ul className="timeline education">
                    {educationData.map((data) => (
                      <li key={data.key}>
                        <div className="timeline_data">
                          <h4 className={bgColor}>{data.subject}</h4>
                          <h5 className={bgColor}>{data.batch}</h5>
                          <p className={bgColor}>{data.school}</p>
                          <p className={bgColor}>
                            {data.subject}, {data.score}
                          </p>
                          <hr className={bgColor} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h1 className={bgColor + " mb-5"} style={PrimaryText}>
          SKILLS
        </h1>
        <div className="row" style={{ overflow: "hidden" }}>
          <div
            data-aos="zoom-in"
            className="col-md-6 col-12 m-auto order-md-0 order-0"
          >
            <figure>
              <img src={Home5} className="w-100" alt="skill item" />
            </figure>
          </div>
          <div
            data-aos="zoom-out"
            className="col-md-6 col-12 order-md-0 order-0 w-100 m-auto "
          >
            {progressSkills.map((data) => (
              <div
                className="progress my-3"
                key={data.key}
                style={{ height: "25px" }}
              >
                <div
                  className={
                    "progress-bar progress-bar-striped progress-bar-animated " +
                    data.color
                  }
                  role="progressbar"
                  style={{ width: `${data.score}%` }}
                  aria-valuenow={`${data.score}%`}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {data.skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h1 className={bgColor + " my-5"} style={PrimaryText}>
        More Info
      </h1>
      <div className="row my-4 text-left" style={{ overflow: "hidden" }}>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="col-lg-4 my-2"
        >
          <div
            className={bgColor + " card text-white infoCard"}
            style={{ background: bg }}
          >
            <div className="card-body">
              <img src="https://img.icons8.com/fluent/48/000000/group-of-projects.png" alt="" />
              <h5 className="card-title">Projects</h5>
              <p className="card-text text-muted">
                I have Developed some projects.
              </p>
              <NavLink
                to="/Project"
                className={bgColor + " btn btn-outline-info"}
              >
                Get Info <CallMadeIcon />
              </NavLink>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" className="col-lg-4 my-2">
          <div
            className={bgColor + " card text-white infoCard"}
            style={{ background: bg }}
          >
            <div className="card-body">
              <img src="https://img.icons8.com/color/48/000000/joomla.png" alt="" />
              <h5 className="card-title">Resume</h5>
              <p className="card-text text-muted">Download Resume</p>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1OCRLDemMc65Z__LG9cji5rEwT-p5H_wG/view"
                class={bgColor + " btn btn-outline-info"}
              >
                Get Info <CallMadeIcon />
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="col-lg-4 my-2"
        >
          <div
            className={bgColor + " card text-white infoCard"}
            style={{ background: bg }}
          >
            <div className="card-body">
              <img src="https://img.icons8.com/nolan/48/certification.png" alt="" />
              <h5 className="card-title">Certifications</h5>
              <p className="card-text text-muted">
                Achivements and Certifications
              </p>
              <NavLink
                to="/About"
                className={bgColor + " btn btn-outline-info"}
              >
                Get Info <CallMadeIcon />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="row"
        style={{ overflow: "hidden" }}
      >
        <div className={bgColor + " col-md-12 col-12 mx-auto text-white mt-5"}>
          <h1 className="text-center" style={PrimaryText}>
            Get In Touch
          </h1>
          <p className="text-center">I Will Be Happy To Help You</p>

          <div className="succussmsg " id="contact"></div>

          <form id="form" onSubmit={handleSubmit}>
            <div className="form-group text-left">
              <label>Name</label>
              <input
                type="text"
                id="name"
                value={postData.name}
                onChange={(e) =>
                  setPostData({ ...postData, name: e.target.value })
                }
                aria-describedby="name"
                class="form-control"
                placeholder="Enter Name"
                name="name"
                required
              />
            </div>
            <div className="form-group text-left">
              <label>Email address</label>
              <input
                type="email"
                value={postData.email}
                onChange={(e) =>
                  setPostData({ ...postData, email: e.target.value })
                }
                id="email"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                required
              />
            </div>
            <div className="form-group text-left">
              <label>Phone</label>
              <input
                type="number"
                value={postData.phone}
                onChange={(e) =>
                  setPostData({ ...postData, phone: e.target.value })
                }
                id="phone"
                class="form-control"
                placeholder="Phone"
                name="phone"
                required
              />
            </div>
            <div className="form-group text-left">
              <label>Message</label>
              <input
                type="text"
                value={postData.message}
                onChange={(e) =>
                  setPostData({ ...postData, message: e.target.value })
                }
                id="message"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter Message"
                name="message"
                required
              />
            </div>
            <button id="submit" className="btn btn-info btn-block">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const PrimaryText = {
  fontWeight: "700",
};

const secondaryText = {
  fontWeight: "600",
};

export default Home;
