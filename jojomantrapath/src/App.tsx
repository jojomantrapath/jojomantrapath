import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import mainLogo from "./media/jojomantrapath.png";

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
        <h1 className="text-white font-size-24px shadow">jojoMantraPath</h1>
      </div>

      <div className="audio-container d-flex justify-content-center">
        <audio controls className="w-100"></audio>
      </div>

      <div className="content-container d-flex flex-column w-100 px-3">
        <div className="intro-container d-flex justify-content-center">
          <h2 className="text-white font-size-16px">Jordan Neumann-Burns</h2>
        </div>

        <div className="intro-container"></div>
      </div>
    </div>
  );
}

export default App;
