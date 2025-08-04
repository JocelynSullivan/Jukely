import PlaylistImg from "./PlaylistImg";

// type AlbumCardProps = {
//   title: string;
//   artist: string;
//   total_tracks: number;
// };

function AlbumCard() {
  return (
    <>
      <div className="flex flex-col pt-10 p-5 w-30px">
        <div>
          <PlaylistImg />
          <div>
            <div className="pl-5">
              <div className="flex flex-row">
                <p className="text-white pt-2">After Hours</p>
              </div>
              <div className="flex flex-row ">
                <p className="text-white text-[.75rem]">The Weeknd</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlbumCard;
