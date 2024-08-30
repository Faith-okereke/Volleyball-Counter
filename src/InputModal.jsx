import React, { useState } from "react";
import { useContext } from "react";
import { TeamNames } from "./NameContext";
import volleyball from "../public/volleyball.png";
import backgroundImage from "../public/volleyballbg.jpg";
export default function Modal() {
  const {
    teamName,
    setTeamName,
    gameNumber,
    setGameNumber,
    nameModal,
    setNameModal,
  } = useContext(TeamNames);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeamName((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const gamehandleChange = (e) => {
    setGameNumber(e.target.value);
  };
  const submitNames = (e) => {
    e.preventDefault();
    if (teamName.teamA && teamName.teamB) {
      setNameModal(false);
    } else {
      alert("Enter the teams' name dawg!");
    }
  };
  return (
    <div className="flex flex-col items-center ">
    <div style={{backgroundImage: `url(${backgroundImage})`}} className="bg-no-repeat bg-cover h-screen w-full  bg-center !important"></div>
      {nameModal && (
        <div className="absolute px-5 z-10 top-[10%] pb-20 pt-10 shadow-custom backdrop-blur-sm bg-opacity-10 ">
          <div className="flex  justify-center items-center">
            <img className="w-10" src={volleyball} alt="" />
            <h1 className="font-bold text-xl text-blue-500 text-center p-5">
              Enter Teams' Name
            </h1>
          </div>

          <form onSubmit={submitNames} action="">
            <div className="flex  flex-col gap-4 justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-2">
                <label className="font-bold" htmlFor="">
                  Team A
                </label>
                <input
                  className="border-0 outline-0 border-white ml-4 p-2 rounded-sm"
                  type="text"
                  value={teamName.teamA || ""}
                  name="teamA"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <label className="font-bold" htmlFor="">
                  Team B
                </label>
                <input
                  className=" border-0 outline-0 border-white ml-4 p-2 rounded-sm"
                  type="text"
                  value={teamName.teamB || ""}
                  name="teamB"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <label className="font-bold" htmlFor="game">
                  Game Point
                </label>
                <input
                  className="  outline-0 border-0 ml-4 p-2 rounded-sm"
                  type="number"
                  name="gameNumber"
                  id="gameNumber"
                  value={gameNumber}
                  onChange={gamehandleChange}
                />
              </div>
              <div className="flex justify-center items-center align-middle ml-5">
                <button
                  className="bg-blue-500  mt-4 py-3 px-10 text-white font-bold rounded-md"
                  type="submit"
                >
                  Start Game
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
