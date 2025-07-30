import FavsIcon from "./FavsIcon";
import VisitLaterIcon from "./VisitLaterIcon";
import ViewQueueIcon from "./ViewQueueIcon";
import RecommendedIcon from "./RecommendedIcon";

function SongNav() {
  return (
    <main className="flex flex-row p-15">
      <div className="pr-10">
        <FavsIcon />
        <h1 className="text-white pt-3 pl-1">Favorites</h1>
      </div>
      <div className="pr-10">
        <VisitLaterIcon />
        <h1 className="text-white pt-3 pl-1">Visit Later</h1>
      </div>
      <div className="pr-10">
        <ViewQueueIcon />
        <h1 className="text-white pt-3 pl-1">View Queue</h1>
      </div>
      <div className="pr-10">
        <RecommendedIcon />
        <h1 className="text-white pt-3 pl-1">Recommended</h1>
      </div>
    </main>
  );
}

export default SongNav;
