import "./App.css";
import { useState , useEffect } from "react";
import StartGameModal from './components/StartGameModal'
import Map from "./components/Map";

function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [randomLocation, setRandomLocation] = useState([])
  const [score, setScore] = useState('100')

  const [startingLatLon, setStartingLatLon] = useState(center)
  const [latitude, setLatitude] = useState(startingLatLon[0])
  const [longitude, setLongitude] = useState(startingLatLon[1])

  const[startGame, setStartGame] = useState(false)
  // function randomLatGenerator () {
  //   return (Math.random() * (45.005419 - 42.730315) + 1) + 42.730315
  // }

  // function randomLonGenerator () {
  //   return Math.random() * (-71.510225 - -73.35218) + 1) + -73.35218
  // }

  //useeffect to fetch the information from the Nominatim API

  return (
    <div>
      <header className="gameHeader">
        <h1 id="gameTitle">Geo-Vermont</h1>
        <h4 id="createdBy">By: Benjamin & Matthew</h4>
      </header>
      <div id="gameContainer">
        <div id="playerScore">Player Score: {score}</div>
        <Map center={center} />{" "}
        <div className="info">
          <div id="lat">Lat: {latitude}</div>
          <div id="lon">Lon: {longitude}</div>
          <div id="county">County:</div>
          <div id="town">Town:</div>
        </div>
        <div className="userInputs">
          <div className="movementControl">
            <div className="northSouth">
              <button>
                North <i className ='arrow' id="north" />
              </button>
              <div className="eastWest">
                <button>
                  <i className='arrow' id="west" /> West 
                </button>
                <button>
                  East <i className ='arrow' id="east" />
                </button>
              </div>
              <button>
                South <i className='arrow' id="south" />
              </button>
            </div>
          </div>
          <div className="interactiveButtons">
            <button onClick={(evt) => setStartGame(true)}>Start Game</button>
            <StartGameModal closeModal={(evt) => setStartGame(false)} startGame={startGame} />
            <button>Guess</button>
            <button>Quit Game</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
