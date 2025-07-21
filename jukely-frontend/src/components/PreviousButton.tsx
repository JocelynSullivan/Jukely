type PreviousButtonProps = {
  className?: string;
};

const PreviousButton: React.FC<PreviousButtonProps> = ({ className }) => {
  return (
    <>
      <svg
        width="44"
        height="47"
        viewBox="0 0 70 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.0833 12.7084L5.83334 30.5L32.0833 48.2917V12.7084Z"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M64.1667 12.7084L37.9167 30.5L64.1667 48.2917V12.7084Z"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default PreviousButton;
