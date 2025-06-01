import React, { useState } from "react";
import User from "./user";

const UserProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  console.log(isNavOpen);
  return (
    <User.Provider value={{ isNavOpen, setIsNavOpen }}>
      {children}
    </User.Provider>
  );
};

export default UserProvider;
