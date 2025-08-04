import PlayButton from "./PlayButton";

type TrackProps = {
  title: string;
  artist: string;
  duration: string;
};

function Track({ title, artist, duration }: TrackProps) {
  return (
    <>
      <div className="pb-2">
        <div className="flex items-center justify-between bg-darkblue w-full rounded-sm p-2 px-10 border-1 border-black">
          <div>
            <h1 className="text-white text-s">{title}</h1>
            <h2 className="text-white text-xs">{artist}</h2>
          </div>
          <div>
            <p className="text-white text-xs">{duration}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Track;
