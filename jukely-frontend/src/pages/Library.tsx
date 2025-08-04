import LibraryNav from "../components/LibraryNav";
import SongNav from "../components/SongNav";
import { Outlet } from "react-router-dom";

function Library() {
  return (
    <div className="flex flex-col">
      <LibraryNav />
      <section className="flex flex-wrap pb-10 pr-10 px-10">
        <Outlet />
        <SongNav />
      </section>
    </div>
  );
}

export default Library;
