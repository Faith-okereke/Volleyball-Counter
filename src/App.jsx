import { useContext, useState } from "react";
import "./App.css";
import Modal from "./Components/InputModal";
import { TeamNames } from "./NameContext";
import WinModal from "./Components/WinModal";
import Loading from "./Components/Loading";
import background from "/public/volleyball3.png";
function App() {
  const {
    teamName,
    gameNumber,
    nameModal,
    openWinModal,
    setOpenWinModal,
    teamA,
    setTeamA,
    teamB,
    setTeamB,
  } = useContext(TeamNames);

  const [scores, setScores] = useState([]);
  const [majorCount, setMajorCount] = useState({ teamAm: 0, teamBm: 0 });

  const addTeamA = () => {
    if (teamA < gameNumber) setTeamA((prev) => prev + 1);
  };

  const addTeamB = () => {
    if (teamB < gameNumber) setTeamB((prev) => prev + 1);
  };

  const minusTeamA = () => setTeamA((prev) => Math.max(prev - 1, 0));
  const minusTeamB = () => setTeamB((prev) => Math.max(prev - 1, 0));

  const nextGame = () => {
    setScores((prev) => [...prev, { teamA, teamB }]);
    setOpenWinModal(true);
  };

  const calculateMajorCount = (scores) => {
    let teamAWins = 0;
    let teamBWins = 0;
    console.log(scores);
    scores.forEach((set) => {
      if (set.teamA > set.teamB) {
        teamAWins++;
      } else if (set.teamA < set.teamB) {
        teamBWins++;
      }
    });
    setMajorCount({ teamAm: teamAWins, teamBm: teamBWins });
  };

  return (
    <div
     
      className="z-20  "
    >
      <Modal />
      {openWinModal && <WinModal />}

      <div
        className={`w-screen h-[100vh] z-20 bg-white p-3  ${
          nameModal || openWinModal ? `pointer-events-none opacity-0` : ``
        } `}
      >
        <h1 className="text-center  text-xl sm:text-2xl font-bold p-4 bg-yellow mb-3">
          Volleyball Point Tracker
        </h1>
        <div className="allscores items-center gap-5 sm:flex-col">
          <div className="scoreBoard">
            <section className="flex flex-col gap-3">
              <div className="flex justify-between">
                <p className="font-bold text-lg text-black">
                  {teamName.teamA || "Team A"}
                </p>
                <input
                  className="w-6 font-bold text-xl border-0 outline-0"
                  type="text"
                  name="teamA"
                  value={teamA}
                  disabled
                />
              </div>
              <div className="flex flex-row align-middle items-center gap-2 w-full">
                {teamA > 0 && (
                  <button
                    className="bg-lightgreen text-white rounded-[4px] w-[20%] border-0 cursor-pointer px-8 py-1 font-bold text-center"
                    onClick={minusTeamA}
                  >
                    -
                  </button>
                )}
                <button
                  className={`bg-lightgreen text-white rounded-[4px] border-0 cursor-pointer px-8 py-1 font-bold ${
                    teamA ? `w-[80%]` : `w-[100%]`
                  }`}
                  onClick={addTeamA}
                >
                  +
                </button>
              </div>
            </section>
            <section className="flex flex-col gap-3 mt-6">
              <div className="flex justify-between">
                <p className="font-bold text-lg text-black">
                  {teamName.teamB || "Team B"}
                </p>
                <input
                  className="w-6 font-bold text-xl border-0 outline-0"
                  type="text"
                  name="teamB"
                  value={teamB}
                  disabled
                />
              </div>
              <div className="flex flex-row align-middle items-center gap-2 w-full">
                {teamB > 0 && (
                  <button
                    className="bg-lightgreen text-white rounded-[4px] w-[20%] border-0 cursor-pointer px-8 py-1 font-bold"
                    onClick={minusTeamB}
                  >
                    -
                  </button>
                )}
                <button
                  className={`bg-lightgreen text-white rounded-[4px] border-0 cursor-pointer px-8 py-1 font-bold ${
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
                className="bg-lightgreen text-white rounded-[4px] border-0 cursor-pointer p-[10px]"
              >
                Next Set
              </button>
            ) : (
              <button
                className="bg-lightgreen text-white rounded-[4px] border-0 cursor-not-allowed p-[10px]"
                disabled
              >
                Next Set
              </button>
            )}
          </div>
          <div>
            <button
              className="bg-lightgreen text-white rounded-[4px] border-0 cursor-pointer p-[10px]"
              onClick={() => calculateMajorCount(scores)}
            >
              Major Count
            </button>
          </div>
        </div>

        <div className="pb-1 pl-3">
          {scores.map((item, index) => (
            <div className="flex" key={index}>
              <p className="p-1 text-black text-lg font-bold">
                {teamName.teamA}: {item.teamA}, {teamName.teamB}: {item.teamB}
              </p>
              <br />
            </div>
          ))}
        </div>
        <div className="py-3">
          <p className="p-2 text-white text-lg font-bold bg-yellow text-center">
            {majorCount.teamAm} : {majorCount.teamBm}
          </p>
        </div>

        <div className="pt-10">
          <button
            onClick={() => window.location.reload()}
            className="bg-lightgreen text-white rounded-[4px] border-0 cursor-pointer p-[10px] mb-2 w-[100%]"
          >
            New Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
