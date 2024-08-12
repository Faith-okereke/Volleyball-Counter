import React, { useState } from "react";
export const TeamNames = React.createContext();
export const NameContext = ({ children }) => {
  const [teamName, setTeamName] = useState({
    teamA: "",
    teamB: "",
  });
  const [gameNumber, setGameNumber] = useState(25);
  const [nameModal, setNameModal] = useState(true);

  return (
    <div>
      <TeamNames.Provider value={{ teamName, setTeamName,gameNumber,setGameNumber,nameModal,setNameModal }}>
        {children}
      </TeamNames.Provider>
    </div>
  );
};

export default NameContext;
