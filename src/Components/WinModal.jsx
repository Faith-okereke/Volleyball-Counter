import React, { useContext } from "react";
import { TeamNames } from "../NameContext";

export default function WinModal() {
  const { setOpenWinModal, teamName, teamA,setTeamA, teamB,setTeamB } = useContext(TeamNames);
  const winningTeam = teamA > teamB ? teamName.teamA : teamName.teamB;
  const closeModal = () => {
    setOpenWinModal(false);
    console.log(teamA);
    console.log(teamB)
    setTeamA(0);
    setTeamB(0);
  };

  return (
    <div className="fixed w-full h-full z-10 top-0 left-0  rounded-lg text-center">
      <div className="bg-white pb-10 pt-10 w-[80%] mx-auto my-[15%] px-10 border-bluey border-2 rounded-lg">
        <h1 className="font-bold text-xl">Set Finished!</h1>
        <p className="font-bold text-2xl pb-2">
          <span className="text-bluey">{winningTeam} won this set!😊</span>
        </p>
        <button
          className="bg-bluey  mt-4 py-3 px-10 text-white font-bold rounded-md"
          onClick={closeModal}
        >
          Continue Game
        </button>
      </div>
    </div>
  );
}
