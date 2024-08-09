import React, { useState } from "react";
import { useContext } from "react";
import { TeamNames } from "./NameContext";
export default function Modal() {
  const { teamName, setTeamName } = useContext(TeamNames);
  const [nameModal, setNameModal] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeamName((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const submitNames = (e) => {
    e.preventDefault();
    if (teamName.teamA && teamName.teamB) {
      setNameModal(false);
    }else{
      alert("Enter the teams' name dawg!")
    }
  };
  return (
    <div className="flex flex-col items-center">
      {nameModal && (
        <div className="absolute w-full bg-white rounded-lg h-screen pt-10 ">
          <h1 className="font-bold text-xl text-black text-center p-5">
            Enter Teams' Name
          </h1>
          <form onSubmit={submitNames} action="">
            <div className="flex  flex-col gap-4 justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-2">
                <label htmlFor="">Team A</label>
                <input
                  className="border-2 border-t-0 border-x-0 outline-0 border-blue-700 ml-4"
                  type="text"
                  value={teamName.teamA || ""}
                  name="teamA"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <label htmlFor="">Team B</label>
                <input
                  className=" border-2 border-t-0 border-x-0 outline-0 border-blue-700 ml-4"
                  type="text"
                  value={teamName.teamB || ""}
                  name="teamB"
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="bg-blue-700  mt-4 py-3 px-10 text-white font-bold rounded-md"
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
