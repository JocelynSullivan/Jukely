import PlaylistImg from "./PlaylistImg";

function PodcastCard() {
  return (
    <>
      <div className="flex flex-col pt-10 p-5 w-30px">
        <div>
          <PlaylistImg />
          <div>
            <div className="pl-5">
              <p className="text-white py-2">Talk Tuah</p>
              <div className="flex flex-row ">
                <p className="text-white text-[.5rem]">xx eps</p>
                <p className="text-white text-[.5rem] pl-7"># of mins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PodcastCard;
