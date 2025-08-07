import LibraryNav from "../components/LibraryNav";
import SongNav from "../components/SongNav";
import { Outlet } from "react-router-dom";

function Library() {
  return (
    <div className="flex flex-col">
      <LibraryNav />
      <section className="flex flex-col pb-10 pr-10 px-10">
        <div className="flex flex-wrap">
          <Outlet />
        </div>
        <SongNav />
      </section>
    </div>
  );
}

export default Library;
