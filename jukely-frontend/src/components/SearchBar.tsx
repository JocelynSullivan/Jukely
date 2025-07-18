import SearchIcon from "./SearchIcon";
import SettingsIcon from "./SettingsIcon";
import Refresh from "./Refresh";
import Account from "./Account";

function SearchBar() {
  return (
    <main className="sticky top-0 border-b-3 border-darkblue bg-black">
      <div className="flex flex-row justify-between p-3.5">
        <section className="flex flex-row bg-darkblue p-2 w-2/5 rounded-xl">
          <SearchIcon />
          <h1 className="pl-5 text-white">search</h1>
        </section>
        <nav className="flex flex-row w-fit">
          <div className="px-3">
            <Refresh />
          </div>
          <div className="px-3">
            <SettingsIcon />
          </div>
          <div className="px-3">
            <Account />
          </div>
        </nav>
      </div>
    </main>
  );
}

export default SearchBar;
