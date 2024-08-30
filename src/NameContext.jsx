import React, { useState } from "react";
export const TeamNames = React.createContext();
export const NameContext = ({ children }) => {
  const [teamName, setTeamName] = useState({
    teamA: "",
    teamB: "",
  });
  const [gameNumber, setGameNumber] = useState(25);
  const [nameModal, setNameModal] = useState(true);
  const [openWinModal, setOpenWinModal] = useState(false);

  return (
    <div>
      <TeamNames.Provider
        value={{
          teamName,
          setTeamName,
          gameNumber,
          setGameNumber,
          nameModal,
          setNameModal,
          openWinModal,
          setOpenWinModal,
        }}
      >
        {children}
      </TeamNames.Provider>
    </div>
  );
};

export default NameContext;
