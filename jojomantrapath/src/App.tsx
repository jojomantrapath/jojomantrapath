import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import mainLogo from "./media/jojomantrapath.png";
import mainAudio from "./media/Only-One-Bar-in-Interstellar-Space.mp3";

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
        <div className="intro-container d-flex justify-content-center">
          <h2 className="text-white font-size-18px shadow mb-0">
            Jordan Neumann-Burns
          </h2>
        </div>

        <div className="intro-container" id="accordion">
          <div className="about-card card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link text-white font-size-18px shadow"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <span className="">About</span>
                </button>
              </h5>
            </div>
          </div>
          <div className="experience-card card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className="btn btn-link text-white font-size-18px shadow"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  <span className="">Experience</span>
                </button>
              </h5>
            </div>
          </div>
          <div className="education-card card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button
                  className="btn btn-link text-white font-size-18px shadow"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  <span className="">Education</span>
                </button>
              </h5>
            </div>
          </div>
          <div className="skills-card card">
            <div className="card-header" id="headingFour">
              <h5 className="mb-0">
                <button
                  className="btn btn-link text-white font-size-18px shadow"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="true"
                  aria-controls="collapseFour"
                >
                  <span className="">Skills</span>
                </button>
              </h5>
            </div>
          </div>
          <div className="interests-card card">
            <div className="card-header" id="headingFive">
              <h5 className="mb-0">
                <button
                  className="btn btn-link text-white font-size-18px shadow"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="true"
                  aria-controls="collapseFive"
                >
                  <span className="">Interests</span>
                </button>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
