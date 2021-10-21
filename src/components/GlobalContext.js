import React, { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
   const clients = [
      {
         name: "Willow Tarot",
         person: "Laurianne",
      },
      {
         name: "La Toscana",
         person: "Pierre",
      },
   ];

   return (
      <GlobalContext.Provider value={[clients]}>
         {props.children}
      </GlobalContext.Provider>
   );
};
