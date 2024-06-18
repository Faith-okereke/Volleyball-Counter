import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);

  const [round, setRound] = useState([]);
  const addTeamA = () => {
    if (teamA < 25) {
      setTeamA((teamA) => teamA + 1);
    } else {
      return false;
    }
  };

  const addTeamB = () => {
    if (teamB < 25) {
      setTeamB((teamB) => teamB + 1);
    } else {
      return false;
    }
  };
  const minusTeamA = () => {
    setTeamA((teamA) => teamA - 1);
  };
  const minusTeamB = () => {
    setTeamB((teamB) => teamB - 1);
  };
  const nextGame =()=>{
    console.log("NEw Game")
    setTeamA(0)
    setTeamB(0)
  }
  return (
    <>
      <div className="volleyBall">
        <div className="scoreBoard">
          <section className="teamA">
            <button onClick={minusTeamA}>-</button>
            <h3>Team A</h3>
            <button onClick={addTeamA}>+</button>
          </section>
          <section>
            <button onClick={minusTeamB}>-</button>
            <h3>Team B</h3>
            <button onClick={addTeamB}>+</button>
          </section>
        </div>

        <div className="scores">
          <input name="teamA" value={teamA} disabled />
          <input name="teamB" value={teamB} disabled />
        </div>
        <button onClick={nextGame} className="NewRound">Next Game</button>
        <div className="Board"></div>
      </div>
    </>
  );
}

export default App;
