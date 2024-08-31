import React, { useContext } from "react";
import { TeamNames } from "../NameContext";

export default function WinModal() {
  const { setOpenWinModal, teamName, teamA, teamB } = useContext(TeamNames);
  const closeModal = () => {
    setOpenWinModal(false);
    console.log(teamName.teamA)
  };
  const winningTeam = teamA > teamB ? teamName.teamA : teamName.teamB;
 
  return (
    <div className="fixed w-full h-full z-10 top-0 left-0  rounded-lg text-center">
      <div className="bg-white pb-10 pt-10 w-[80%] mx-auto my-[15%] px-10 border-blue-500 border-2 rounded-lg">
        <h1 className="font-bold text-xl">Set Finished!</h1>
        <p className="font-bold text-2xl pb-2">
          <span className="text-blue-700">{winningTeam} won this set!😊</span>
        </p>
        <button
          className="bg-blue-700  mt-4 py-3 px-10 text-white font-bold rounded-md"
          onClick={closeModal}
        >
          Continue Game
        </button>
      </div>
    </div>
  );
}
