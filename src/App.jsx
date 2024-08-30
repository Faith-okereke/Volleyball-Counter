import { useContext, useEffect, useState } from "react";
import "./App.css";
import Modal from "./InputModal";
import { TeamNames } from "./NameContext";
import WinModal from "./WinModal";
function App() {
  const { teamName, gameNumber, nameModal, openWinModal, setOpenWinModal } =
    useContext(TeamNames);
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
    setOpenWinModal(true);
  };

  return (
    <div className="">
      <Modal />
      {openWinModal && <WinModal />}

      <div
        className={`w-screen h-[100vh]  bg-white p-3 ${
          nameModal || openWinModal ? `pointer-events-none opacity-0` : ``
        } `}
      >
        <h1 className="text-center pb-2 text-xl sm:text-2xl font-bold pt-4">
          Volleyball Point Tracker
        </h1>
        <div className="allscores items-center gap-5 sm:flex-col">
          <div className="scoreBoard">
            <section className="flex flex-col gap-3">
              <div className="flex justify-between ">
                <p className="font-bold text-lg text-black">
                  {teamName.teamA || "Team A"}
                </p>
                <input
                  className="w-6 font-bold text-xl  border-0 outline-0"
                  type="text"
                  name="teamA"
                  value={teamA}
                  disabled
                />
              </div>
              <div className="flex flex-row  align-middle items-center gap-2 w-full">
                {teamA > 0 && (
                  <div className="">
                    <button
                      className="bg-green-400 text-white rounded-[4px] w-[20%]  border-0 cursor-pointer px-8 py-1  font-bold text-center"
                      onClick={minusTeamA}
                    >
                      -
                    </button>
                  </div>
                )}
                <button
                  className={`bg-green-400 text-white rounded-[4px] border-0 cursor-pointer px-8 py-1 font-bold ${
                    teamA ? `w-[80%]` : `w-[100%]`
                  }`}
                  onClick={addTeamA}
                >
                  +
                </button>
              </div>
            </section>
            <section className="flex flex-col gap-3 mt-6">
              <div className="flex justify-between ">
                <p className="font-bold text-lg text-black">
                  {teamName.teamB || "Team B"}
                </p>
                <input
                  className="w-6 font-bold text-xl outline-0 border-0"
                  type="text"
                  name="teamB"
                  value={teamB}
                  disabled
                />
              </div>
              <div className="flex flex-row  align-middle items-center gap-2 w-full">
                {teamB > 0 && (
                  <div className="">
                    <button
                      className="bg-green-400 text-white rounded-[4px] border-0 w-[20%]  cursor-pointer px-8 py-1  font-bold"
                      onClick={minusTeamB}
                    >
                      -
                    </button>
                  </div>
                )}
                <button
                  className={`bg-green-400 text-white rounded-[4px] border-0 cursor-pointer px-8 py-1 font-bold ${
                    teamB ? `w-[80%]` : `w-[100%]`
                  }`}
                  onClick={addTeamB}
                >
                  +
                </button>
              </div>
            </section>
          </div>
        </div>
        <div className="flex justify-between w-full mt-5">
          <div className="flex justify-center items-center order-2">
            {teamA > 0 || teamB > 0 ? (
              <button
                onClick={nextGame}
                className="bg-green-400 text-white rounded-[4px] border-0 cursor-pointer p-[10px]"
              >
                Next Set
              </button>
            ) : (
              <button
                className="bg-green-300 text-white rounded-[4px] border-0 cursor-not-allowed p-[10px]"
                disabled
              >
                Next Set
              </button>
            )}
          </div>
          <div>
            <button className="bg-green-400 text-white rounded-[4px] border-0 cursor-pointer p-[10px] ">
              Major Count
            </button>
          </div>
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
            className="bg-green-500 text-white rounded-[4px] border-0 cursor-pointer p-[10px] mb-2 w-[100%]"
          >
            New Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
