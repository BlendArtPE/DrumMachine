/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import "./App.css";

const audioClips = [
  {
    keyCode: 81,
    key: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    id: "Heater-1",
  },
  {
    keyCode: 87,
    key: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    id: "Heater-2",
  },
  {
    keyCode: 69,
    key: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    id: "Heater-3",
  },
  {
    keyCode: 65,
    key: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    id: "Heater-4",
  },
  {
    keyCode: 83,
    key: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    id: "Clap",
  },
  {
    keyCode: 68,
    key: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    id: "Open-HH",
  },
  {
    keyCode: 90,
    key: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    id: "Kick-n'-Hat",
  },
  {
    keyCode: 88,
    key: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    id: "Kick",
  },
  {
    keyCode: 67,
    key: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    id: "Closed-HH",
  },
];

const audioClipsSecond = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    description: "Chord 1",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    description: "Chord 2",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    description: "Chord 3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    description: "Heater 4",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    description: "Clap",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    description: "Open-HH",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    description: "Kick-n'-Hat",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    description: "Kick",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    description: "Closed-HH",
  },
];

const KeyBoardKey = ({play,sound}) => {
  
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
  }, []) 
  const handleKeyDown = (event) => {
    if(event.keyCode === sound.keyCode){
      play(sound.key)
    }
  }

  return (
    <button key={sound.key} className="drum-pad" id={sound.key} onClick={() => play(sound.key)}>
        <audio ref={(audio) => (sound.audio = audio)} className="clip" id={sound.key} src={sound.url} />
        {sound.key}
      </button>
  )
}

const KeyBoard = ({play}) => {
  // eslint-disable-next-line react/jsx-key
  return audioClips.map((sound) => <KeyBoardKey play={play} sound={sound}/> );
};

function App() {
  
  const [display, setDisplay] = useState('');

  const play = (key) => {
    const audio = audioClips.find((sound) => sound.key === key).audio;
    if (audio) {
      setDisplay(audioClips.find((sound) => sound.key === key).id)
      audio.currentTime = 0;
      audio.play();
    }
  };
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
              <div id="display" className="screen col-md-12">
                {display}
              </div>
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

        
        <div className="row">
          <div className="d-flex justify-content-center">
            <div className="col-xs-1">
              <KeyBoard play={play}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default App;
