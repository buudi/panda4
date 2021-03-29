import Nav from "./Nav";
const Main = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};
export default Main;
