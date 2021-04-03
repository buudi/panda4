import { useState } from "react";
import NewNav from "./NewNav";
import { LoggedContext } from "../contexts/LoggedContext";
const Main = ({ children }) => {
  const [logged, setLogged] = useState(false);
  return (
    <>
      <LoggedContext.Provider value={{ logged, setLogged }}>
        {children}
      </LoggedContext.Provider>
    </>
  );
};
export default Main;
