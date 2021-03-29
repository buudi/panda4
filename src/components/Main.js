import { useState } from "react";
import Nav from "./Nav";
import { LoggedContext } from "../contexts/LoggedContext";
const Main = ({ children }) => {
  const [logged, setLogged] = useState(false);
  return (
    <>
      <LoggedContext.Provider value={{ logged, setLogged }}>
        <Nav />
        {children}
      </LoggedContext.Provider>
    </>
  );
};
export default Main;
