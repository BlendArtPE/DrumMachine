// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <div className="row ">
              <div className="col-md-12 text-center mb-2">
                <div className="form-check form-switch ">
                  <label className=" d-flex flex-column align-items-center">Power
                  <input
                    className="form-check-input mx-auto"
                    type="checkbox"
                    id="power"
                  /></label>
                </div>
              </div>
              <div className="col-md-12 text-center mb-4">
                <div className="form-check form-switch ">
                  <label className="d-flex flex-column align-items-center">Bank
                  <input
                    className="form-check-input mx-auto"
                    type="checkbox"
                    id="bank"
                  /></label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">Contenido 2.2</div>
              <div className="form-group col-md-12">
                <label className="d-flex flex-column align-items-center ">Volumen
                <input
                  type="range"
                  className="form-control-range mt-2"
                  id="formControlRange"
                  min={0}
                  max={100}
                /></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
