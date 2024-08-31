import React, { useState } from "react";
import { useContext } from "react";
import { TeamNames } from "../NameContext";
import volleyball from "../../public/volleyball.png";
import backgroundImage from "../../public/volleyballbg.jpg";
import Loading from "./Loading";
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
    if (!teamName.teamA && !teamName.teamB) {
      alert("Enter the teams' name dawg!");
    } else {
      setNameModal(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      {nameModal && (
        <>
          <div
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className="bg-no-repeat bg-cover h-screen w-full  bg-center !important backdrop-blur-sm bg-opacity-10 "
          ></div>
          <div className="absolute px-5 z-10 top-[10%] pb-20 pt-10 shadow-custom backdrop-blur-sm bg-opacity-10 ">
            <div className="flex  justify-center items-center gap-4">
              <img className="w-10" src={volleyball} alt="" />
              <h1 className="font-bold text-xl text-lightgreen text-center">
                Enter Teams' Name
              </h1>
            </div>

            <form onSubmit={submitNames} action="">
              <div className="flex  flex-col gap-4 justify-center items-center ">
                <div className="flex flex-col justify-center items-center gap-2">
                  <label className="font-bold" htmlFor="">
                    Team A
                  </label>
                  <input
                    className=" outline-0 border-lightgreen border-2 p-2 rounded-md"
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
                    className=" outline-0 border-lightgreen border-2  p-2 rounded-md"
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
                    className="  outline-0 border-2 border-lightgreen  p-2 rounded-md"
                    type="number"
                    name="gameNumber"
                    id="gameNumber"
                    value={gameNumber}
                    onChange={gamehandleChange}
                  />
                </div>
                <div className="flex justify-center items-center align-middle">
                  <button
                    className="bg-lightgreen  mt-4 py-3 px-10 text-white font-bold rounded-md"
                    type="submit"
                  >
                    Start Game
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
