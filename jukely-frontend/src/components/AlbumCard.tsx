import PlaylistImg from "./PlaylistImg";

type AlbumCardProps = {
  title: string;
  artist: string;
  total_tracks: number;
};

function AlbumCard({ title, artist, total_tracks }: AlbumCardProps) {
  return (
    <>
      <div className="flex flex-col pt-10 p-5 w-30px">
        <div>
          <PlaylistImg />
          <div>
            <div className="pl-5">
              <div className="flex flex-row">
                <p className="text-white py-2">{title}</p>
                <p className="text-white text-[0.5rem] p-2 self-center">
                  {artist}
                </p>
              </div>
              <div className="flex flex-row ">
                <p className="text-white text-[.5rem]">{total_tracks}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlbumCard;
