import LibraryNav from "../components/LibraryNav";
import SongNav from "../components/SongNav";
import { Outlet } from "react-router-dom";

function Library() {
  return (
    <>
      <LibraryNav />
      <section className="px-10">
        <div className="flex flex-wrap border-3 border-b-darkblue pb-10 pr-10">
          <Outlet />
        </div>
      </section>
      <section>
        <SongNav />
      </section>
    </>
  );
}

export default Library;
