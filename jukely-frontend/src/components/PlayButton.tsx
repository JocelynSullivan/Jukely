type PlayButtonProps = {
  className?: string;
};

const PlayButton: React.FC<PlayButtonProps> = ({ className }) => {
  return (
    <>
      <svg
        width="24"
        height="27"
        viewBox="0 0 24 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.7316 15.1568L3.0437 26.5212C1.69125 27.3018 0 26.3261 0 24.7622V2.03333C0 0.472182 1.69125 -0.506248 3.0437 0.274328L22.7289 11.6388C24.0813 12.4193 24.0813 14.3735 22.7289 15.1541L22.7316 15.1568Z"
          fill="#EEE5E5"
        />
      </svg>
    </>
  );
};

export default PlayButton;
