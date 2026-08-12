import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
