import { Link } from "react-router-dom";

function LibraryNav() {
  return (
    <>
      <div className="flex flex-row text-white px-7 p-7 bg-black">
        <div className="px-4">
          <Link
            to={"/library/playlist"}
            className="self-center p-1 px-5 bg-darkblue rounded-xl"
          >
            Playlist
          </Link>
        </div>
        <div className="px-4">
          <Link
            to={"/library/album"}
            className="self-center p-1 px-5 bg-darkblue rounded-xl"
          >
            Album
          </Link>
        </div>
        <div className="px-4">
          <Link
            to={"/library/artist"}
            className="self-center p-1 px-5 bg-darkblue rounded-xl"
          >
            Artist
          </Link>
        </div>
        <div className="px-4">
          <Link
            to={"/library/podcast"}
            className="self-center p-1 px-5 bg-darkblue rounded-xl"
          >
            Podcast
          </Link>
        </div>
      </div>
    </>
  );
}

export default LibraryNav;
