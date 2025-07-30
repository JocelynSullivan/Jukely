import PlaylistImg from "./PlaylistImg";

type PlaylistCardProps = {
  name: string;
  tracks: number;
  runtime: string;
  url: string;
};

function PlaylistCard({ name, tracks, runtime, url }: PlaylistCardProps) {
  return (
    <>
      <div className="flex flex-col pt-10 p-5 w-30px">
        <div>
          <PlaylistImg url={url} />
          <div>
            <div className="pl-5">
              <p className="text-white py-2">{name}</p>
              <div className="flex flex-row ">
                <p className="text-white text-[.5rem]">{tracks}</p>
                <p className="text-white text-[.5rem] pl-7">{runtime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaylistCard;
