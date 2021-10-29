import "./App.css";
import { useState, useEffect } from "react";
import StartButton from "./components/StartButton";
import Map from "./components/Map";
import borderData from "./data/border";
import { ZoomControl } from "react-leaflet";

function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [score, setScore] = useState("100");
  const [zoom, setZoom] = useState(8);
  const [startingLatLon, setStartingLatLon] = useState([0, 0]);
  const [latitude, setLatitude] = useState(startingLatLon[0]);
  const [longitude, setLongitude] = useState(startingLatLon[1]);

  const [startGame, setStartGame] = useState(false);

  //useeffect to fetch the information from the Nominatim API
  //put fetch in guess component

  let borderDataPassed = borderData;
  console.log(borderDataPassed);
  return (
    <div>
      <header className="gameHeader">
        <h1 id="gameTitle">Geo-Vermont</h1>
        <h4 id="createdBy">By: Benjamin & Matthew</h4>
      </header>
      <div id="gameContainer">
        <div id="playerScore">Player Score: {score}</div>
        <Map center={center} zoom={zoom} />{" "}
        <div className="info">
          <div id="lat">Lat: {latitude}</div>
          <div id="lon">Lon: {longitude}</div>
          <div id="county">County:</div>
          <div id="town">Town:</div>
        </div>
        <div className="userInputs">
          <div className="movementControl">
            <div className="northSouth">
              <button
                onClick={() =>
                  setLatitude((prevLatitude) => prevLatitude + 0.002)
                }
              >
                North <i className="arrow" id="north" />
              </button>
              <div className="eastWest">
                <button
                  onClick={() =>
                    setLongitude((prevLongitude) => prevLongitude + 0.002)
                  }
                >
                  <i className="arrow" id="west" /> West
                </button>
                <button
                  onClick={() =>
                    setLongitude((prevLongitude) => prevLongitude - 0.002)
                  }
                >
                  East <i className="arrow" id="east" />
                </button>
              </div>
              <button
                onClick={() =>
                  setLatitude((prevLatitude) => prevLatitude - 0.002)
                }
              >
                South <i className="arrow" id="south" />
              </button>
            </div>
          </div>
          <div className="interactiveButtons">
            <StartButton
              startGame={startGame}
              setStartGame={setStartGame}
              setLatitude={setLatitude}
              setLongitude={setLongitude}
              setStartingLatLon={setStartingLatLon}
              borderDataPassed={borderDataPassed}
              setZoom={setZoom}
            />
            <button>Guess</button>

            <button>Quit Game</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
