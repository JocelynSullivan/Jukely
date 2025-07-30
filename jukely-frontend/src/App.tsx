import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import PlayBar from "./components/PlayBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Login /> */}
      <main className="flex flex-row">
        <NavBar />
        <div className="flex flex-col w-screen">
          <SearchBar />
          <Outlet />
        </div>
      </main>
      {/* <PlayBar /> */}
    </>
  );
}

export default App;
