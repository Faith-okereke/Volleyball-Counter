import React, { useState } from "react";
export const TeamNames = React.createContext();
export const NameContext = ({ children }) => {
  const [teamName, setTeamName] = useState({
    teamA: "",
    teamB: "",
  });

  return (
    <div>
      <TeamNames.Provider value={{ teamName, setTeamName }}>
        {children}
      </TeamNames.Provider>
    </div>
  );
};

export default NameContext;
