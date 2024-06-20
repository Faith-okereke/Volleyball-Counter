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
  const nextGame = () => {
    round.push(teamA, teamB);
    round.toString();
    console.log("New Game");
    setTeamA(0);
    setTeamB(0);
    console.log(round);
  };
  return (
    <>
      <div className="volleyBall w-screen h-screen">
        <div className="allscores  items-center gap-5 sm:flex-col">
          <div className="scoreBoard">
            <section className="teamA">
              <button
                className="bg-blue-600 text-white rounded-[4px] border-0 cursor-pointer w-[25px] mb-2"
                onClick={minusTeamA}
              >
                -
              </button>
              <h3>Team A</h3>
              <button
                className="bg-blue-600 text-white rounded-[4px] border-0 cursor-pointer w-[25px] mb-2"
                onClick={addTeamA}
              >
                +
              </button>
            </section>
            <section>
              <button
                className="bg-blue-600 text-white rounded-[4px] border-0 cursor-pointer w-[25px] mb-2"
                onClick={minusTeamB}
              >
                -
              </button>
              <h3>Team B</h3>
              <button
                className="bg-blue-600 text-white rounded-[4px] border-0 cursor-pointer w-[25px] mb-2"
                onClick={addTeamB}
              >
                +
              </button>
            </section>
          </div>

          <div className="scores sm:gap-0 gap-[8rem]">
            <input name="teamA" value={teamA} disabled />
            <input name="teamB" value={teamB} disabled />
          </div>
        </div>

        <div className="flex justify-center items-center mt-4">
          {teamA > 0 || teamB > 0 ? (
            <button
              onClick={nextGame}
              className="bg-blue-600 text-white rounded-[4px] border-0 cursor-pointer p-[10px]  mb-2"
            >
              Next Round
            </button>
          ) : (
            <button
              className="bg-blue-400 text-white rounded-[4px] border-0 cursor-not-allowed p-[10px]  mb-2"
              disabled
            >
              Next Round
            </button>
          )}
        </div>

        {round.map((item, index) => (
          <div key={index} className="Board">
            {item}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
