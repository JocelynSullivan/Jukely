import PlaylistImg from "./PlaylistImg";

function ArtistCard() {
  return (
    <>
      <div className="flex flex-col pt-10 p-5 w-30px">
        <div>
          <PlaylistImg />
          <div>
            <div className="pl-5">
              <p className="text-white py-1">Veggie Tyrant</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtistCard;
