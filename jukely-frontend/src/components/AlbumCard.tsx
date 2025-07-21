import PlaylistImg from "./PlaylistImg";

function AlbumCard() {
  return (
    <>
      <div className="flex flex-col pt-10 p-5 w-30px">
        <div>
          <PlaylistImg />
          <div>
            <div className="pl-5">
              <div className="flex flex-row">
                <p className="text-white py-2">24 carrots</p>
                <p className="text-white text-[0.5rem] p-2 self-center">
                  {" "}
                  - veggieboi
                </p>
              </div>
              <div className="flex flex-row ">
                <p className="text-white text-[.5rem]">xx tracks</p>
                <p className="text-white text-[.5rem] pl-7"># of mins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlbumCard;
