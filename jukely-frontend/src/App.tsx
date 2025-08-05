import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import PlayBar from "./components/PlayBar";
import useLocalStorage from "use-local-storage";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const [login, setLogin] = useLocalStorage<boolean>("isLoggedIn");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(login);
    if (login == false) {
      navigate("/login");
    }
  }, [login]);
  return (
    <>
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
