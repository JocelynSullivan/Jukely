type PlaylistImgProps = {
  className?: string;
  url: string;
};

const PlaylistImg: React.FC<PlaylistImgProps> = ({ url }) => {
  return (
    <>
      <img src={url} className="rounded-xl h-45 w-45" />
    </>
  );
};

export default PlaylistImg;
