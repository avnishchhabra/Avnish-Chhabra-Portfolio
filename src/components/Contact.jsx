import React from "react";
import service2 from "../Images/service2.svg";
import "../styles.css";
const Contact = ({ bg, bgColor }) => {
  return (
    <div
      className="App"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <div className={bgColor + " contactContainer container"}>
        <h1 className="mt-3 f-700">How You Can Reach Me</h1>
        <div className="row">
          <div className="col-lg-8 col-md-8 col-12 mt-3">
            <div className="w-100">
              <iframe
                title="Get Directions"
                width="100%"
                height="400"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Shahbad,+Haryana+136135&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12 mt-3 d-flex flex-column justify-content-center align-items-center">
            <div class="icon my-2">
              <img src={service2} width="100px" alt="img" />
            </div>
            <span>Contact : +91-9306467463</span>
            <span>Gmail : avnishchhabra04@gmail.com</span>
            <span>Address : Shahabad Markanda, Kurukshetra, Haryana, India </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
