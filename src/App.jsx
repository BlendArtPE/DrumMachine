// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div id="drum-machine" className="container">
        <div className="row">
          <div className="col-md-6 ">
            <div className="row ">
              <div className="col-md-12 text-center mb-2">
                <div className="form-check form-switch ">
                  <label className=" d-flex flex-column align-items-center">
                    Power
                    <input
                      className="form-check-input mx-auto"
                      type="checkbox"
                      id="power"
                    />
                  </label>
                </div>
              </div>
              <div className="col-md-12 text-center mb-4">
                <div className="form-check form-switch ">
                  <label className="d-flex flex-column align-items-center">
                    Bank
                    <input
                      className="form-check-input mx-auto"
                      type="checkbox"
                      id="bank"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div id="display" className="screen col-md-12">Display</div>
              <div className="form-group col-md-12 mt-2">
                <label className="d-flex flex-column align-items-center ">
                  Volumen
                  <input
                    type="range"
                    className="form-control-range mt-2"
                    id="formControlRange"
                    min={0}
                    max={100}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-xs-1"><button className="drum-pad" id="Q">Q<audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio></button></div>
          <div className="col-xs-1"><button className="drum-pad" id="W">W<audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio></button></div>
          <div className="col-xs-1"><button className="drum-pad" id="E">E<audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio></button></div>
          <div className="col-xs-1"><button className="drum-pad" id="A">A<audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4.mp3"></audio></button></div>
          <div className="col-xs-1"><button className="drum-pad" id="S">S<audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio></button></div>
          <div className="col-xs-1"><button className="drum-pad" id="D">D<audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio></button></div>
          <div className="col-xs-1"><button className="drum-pad" id="Z">Z<audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio></button></div>
          <div className="col-xs-1"><button className="drum-pad" id="X">X<audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio></button></div>
          <div className="col-xs-1"><button className="drum-pad" id="C">C<audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio></button></div>
        </div>
      </div>
    </>
  );
}

export default App;
