import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import mainLogo from "./media/jojomantrapath.png";
import mainAudio from "./media/Only-One-Bar-in-Interstellar-Space.mp3";
import Accordion from "react-bootstrap/Accordion";

function App() {
  return (
    <div className="body-container d-flex flex-column align-items-center">
      <div className="logo-container d-flex w-100 justify-content-center pt-5 pb-3">
        <img
          src={mainLogo}
          alt="jojomantrapath logo"
          className="w-160px h-160px"
        />
      </div>

      <div className="title-container d-flex pb-3">
        <h1 className="text-white font-size-24px shadow mb-0">
          jojoMantraPath
        </h1>
      </div>

      <div className="audio-container d-flex justify-content-center w-100 px-3 pb-3">
        <audio controls className="w-100" src={mainAudio}></audio>
      </div>

      <div className="content-container d-flex flex-column w-100 px-3">
        <div className="intro-container d-flex justify-content-center pb-3">
          <h2 className="text-white font-size-18px shadow mb-0">
            Jordan Neumann-Burns
          </h2>
        </div>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>About</Accordion.Header>
            <Accordion.Body>
              <p>
                Hi, I'm Jordan. I'm a full stack senior Web Developer
                specializing in NodeJS, React, NextJS, Docker and Mongo. I also
                specialize in producing fully functional web apps to design in
                HTML, CSS, JavaScript, JQuery, and Bootstrap within Content
                Management Systems.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Skills</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>NodeJS</li>
                <li>React</li>
                <li>NextJS</li>
                <li>Docker</li>
                <li>Mongo</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Bootstrap</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Experience</Accordion.Header>
            <Accordion.Body>
              <p></p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Education</Accordion.Header>
            <Accordion.Body>
              <p></p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Interests</Accordion.Header>
            <Accordion.Body>
              <p></p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
