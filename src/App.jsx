import { useState } from "react";
import "./App.css";

function App() {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);
  const [round, setRound] = useState([]);

  const addTeamA = () => {
    if (teamA < 25) setTeamA((prev) => prev + 1);
  };

  const addTeamB = () => {
    if (teamB < 25) setTeamB((prev) => prev + 1);
  };

  const minusTeamA = () => setTeamA((prev) => Math.max(prev - 1, 0));
  const minusTeamB = () => setTeamB((prev) => Math.max(prev - 1, 0));
  
  const nextGame = () => {
    setRound((prev) => [...prev, { teamA, teamB }]);
    setTeamA(0);
    setTeamB(0);
  };

  return (
    <div className="volleyBall w-screen h-screen">
      <h1 className="text-center pb-2 text-xl sm:text-2xl font-bold pt-4">
        Volleyball Point Tracker
      </h1>
      <div className="allscores items-center gap-5 sm:flex-col">
        <div className="scoreBoard">
          <section className="teamA">
            {teamA > 0 && (
              <button
                className="bg-blue-600 text-white rounded-[4px] border-0 cursor-pointer w-[25px] mb-2"
                onClick={minusTeamA}
              >
                -
              </button>
            )}
            <p>Team A</p>
            <button
              className="bg-blue-600 text-white rounded-[4px] border-0 cursor-pointer w-[25px] mb-2"
              onClick={addTeamA}
            >
              +
            </button>
          </section>
          <section className="teamB">
            {teamB > 0 && (
              <button
                className="bg-blue-600 text-white rounded-[4px] border-0 cursor-pointer w-[25px] mb-2"
                onClick={minusTeamB}
              >
                -
              </button>
            )}
            <p>Team B</p>
            <button
              className="bg-blue-600 text-white rounded-[4px] border-0 cursor-pointer w-[25px] mb-2"
              onClick={addTeamB}
            >
              +
            </button>
          </section>
        </div>
        <div className="scores sm:gap-0 gap-[8rem]">
          <input type="text" name="teamA" value={teamA} disabled />
          <input type="text" name="teamB" value={teamB} disabled />
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        {teamA > 0 || teamB > 0 ? (
          <button
            onClick={nextGame}
            className="bg-blue-600 text-white rounded-[4px] border-0 cursor-pointer p-[10px] mb-2"
          >
            Next Round
          </button>
        ) : (
          <button
            className="bg-blue-400 text-white rounded-[4px] border-0 cursor-not-allowed p-[10px] mb-2"
            disabled
          >
            Next Round
          </button>
        )}
      </div>
      <div className="pb-1 pl-3">
        {round.map((item, index) => (
          <div className="flex" key={index}>
            <div className="Board p-1">
              Team A: {item.teamA}, Team B: {item.teamB}
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
