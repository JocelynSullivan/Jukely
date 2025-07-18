type PlaylistImgProps = {
  className?: string;
};

const PlaylistImg: React.FC<PlaylistImgProps> = ({ className }) => {
  return (
    <>
      <svg
        width="150"
        height="150"
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="150" height="150" rx="10" fill="#061121" />
      </svg>
    </>
  );
};

export default PlaylistImg;
