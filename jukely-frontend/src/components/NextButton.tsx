type NextButtonProps = {
  className?: string;
};

const NextButton: React.FC<NextButtonProps> = ({ className }) => {
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
          d="M37.9167 48.2916L64.1667 30.5L37.9167 12.7083V48.2916Z"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83333 48.2916L32.0833 30.5L5.83333 12.7083V48.2916Z"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default NextButton;
