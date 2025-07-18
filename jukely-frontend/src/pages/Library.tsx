import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import LibraryNav from "../components/LibraryNav";
import PlaylistCard from "../components/PlaylistCard";
import FavsIcon from "../components/FavsIcon";
import VisitLaterIcon from "../components/VisitLaterIcon";

function Library() {
  return (
    <>
      <div className="flex flex-row">
        <NavBar />
        <div className="flex flex-col">
          <SearchBar />
          <LibraryNav />
          <section className="px-10">
            <div className="flex flex-wrap border-3 border-b-darkblue pb-10 pr-10">
              <PlaylistCard />
              <PlaylistCard />
              <PlaylistCard />
              <PlaylistCard />
              <PlaylistCard />
              <PlaylistCard />
              <PlaylistCard />
            </div>
          </section>
          <hr />
          <section className="flex flex-row">
            <div className="p-15">
              <FavsIcon />
            </div>

            <VisitLaterIcon />
          </section>
        </div>
      </div>
    </>
  );
}

export default Library;
