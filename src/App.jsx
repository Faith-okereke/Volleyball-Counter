import { useContext, useState } from "react";
import "./App.css";
import Modal from "./Modal";
import { TeamNames } from "./NameContext";

function App() {
  const { teamName, gameNumber, nameModal } = useContext(TeamNames);
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);
  const [round, setRound] = useState([]);
  console.log(teamName);
  const addTeamA = () => {
    if (teamA < gameNumber) setTeamA((prev) => prev + 1);
  };

  const addTeamB = () => {
    if (teamB < gameNumber) setTeamB((prev) => prev + 1);
  };

  const minusTeamA = () => setTeamA((prev) => Math.max(prev - 1, 0));
  const minusTeamB = () => setTeamB((prev) => Math.max(prev - 1, 0));

  const nextGame = () => {
    setRound((prev) => [...prev, { teamA, teamB }]);
    setTeamA(0);
    setTeamB(0);
  };

  return (
    <div>
      <Modal />
      <div className= {`w-screen h-[100vh]  bg-yellow p-3 ${nameModal? `pointer-events-none opacity-0`:``}`}>
        <h1 className="text-center pb-2 text-xl sm:text-2xl font-bold pt-4">
          Volleyball Point Tracker
        </h1>
        <div className="allscores items-center gap-5 sm:flex-col">
          <div className="scoreBoard">
            <section className="flex flex-col gap-3">
              {teamA > 0 && (
                <div className="flex justify-end items-end">
                  <button
                    className="bg-blue-600 text-white rounded-[4px] w-10  border-0 cursor-pointer px-8 py-1 mb-2 font-bold text-center"
                    onClick={minusTeamA}
                  >
                    -
                  </button>
                </div>
              )}
              <div className="flex justify-between ">
                <p className="font-bold text-lg text-black">
                  {teamName.teamA || "Team A"}
                </p>
                <input
                  className="w-6 font-bold text-xl bg-yellow border-0 outline-0"
                  type="text"
                  name="teamA"
                  value={teamA}
                  onChange={(e) => setTeamA(e.target.value)}
                />
              </div>

              <button
                className="bg-blue-600 text-white rounded-[4px] border-0 cursor-pointer px-8 py-1 mb-2 font-bold"
                onClick={addTeamA}
              >
                +
              </button>
            </section>
            <section className="flex flex-col gap-3 mt-6">
              <div className="flex justify-between ">
                <p className="font-bold text-lg text-black">
                  {teamName.teamB || "Team B"}
                </p>
                <input
                  className="w-6 font-bold text-xl bg-yellow"
                  type="text"
                  name="teamB"
                  value={teamB}
                  onChange={(e) => setTeamA(e.target.value)}
                />
              </div>

              <button
                className="bg-blue-600 text-white rounded-[4px] border-0 cursor-pointer px-8 py-1 mb-2 font-bold"
                onClick={addTeamB}
              >
                +
              </button>
              {teamB > 0 && (
                <div className="flex justify-end items-end">
                  <button
                    className="bg-blue-600 text-white rounded-[4px] border-0 w-10 cursor-pointer px-8 py-1 mb-2 font-bold"
                    onClick={minusTeamB}
                  >
                    -
                  </button>
                </div>
              )}
            </section>
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
              <div className="Board p-1 text-black text-lg font-bold">
                {teamName.teamA}: {item.teamA}, {teamName.teamB}: {item.teamB}
              </div>
              <br />
            </div>
          ))}
        </div>

        <div className="pt-10 ">
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white rounded-[4px] border-0 cursor-pointer p-[10px] mb-2 w-[100%]"
          >
            New Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
