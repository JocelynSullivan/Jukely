type TrackProps = {
  title: string;
  artist: string;
  duration: number;
};

function Track({ title, artist, duration }: TrackProps) {
  return (
    <>
      <div className="bg-black w-full rounded-sm p-2">
        <h1 className="text-white text-s">{title}</h1>
        <h2 className="text-white text-xs">{artist}</h2>
        <div className="flex justify-end content-evenly">
          <p className="text-white text-xs">{duration}</p>
        </div>
      </div>
    </>
  );
}

export default Track;
