import LibraryNav from "../components/LibraryNav";
import SongNav from "../components/SongNav";
import { Outlet } from "react-router-dom";

function Library() {
  return (
    <div>
      <LibraryNav />
      <section className="px-10">
        <div className="flex flex-wrap pb-10 pr-10">
          <Outlet />
        </div>
      </section>
      <section className="px-15">
        <SongNav />
      </section>
    </div>
  );
}

export default Library;
