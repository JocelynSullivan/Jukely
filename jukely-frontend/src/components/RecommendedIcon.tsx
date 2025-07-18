type RecommendedIconProp = {
  className?: string;
};

const RecommendedIcon: React.FC<RecommendedIconProp> = ({ className }) => {
  return (
    <>
      <svg
        width="150"
        height="150"
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M140 0H10C4.47715 0 0 4.47715 0 10V140C0 145.523 4.47715 150 10 150H140C145.523 150 150 145.523 150 140V10C150 4.47715 145.523 0 140 0Z"
          fill="url(#paint0_linear_395_1103)"
        />
        <g clip-path="url(#clip0_395_1103)">
          <path
            d="M74.5379 34.0022C46.4417 34.2704 24 59.3722 24 89.6094V111.336C24 113.913 25.9396 116 28.3351 116H39.1699C39.1699 116 39.2003 115.987 39.2003 115.967V89.4982C39.2003 68.3413 54.814 50.6713 74.4771 50.3638C94.4564 50.0563 110.8 67.4581 110.8 88.8767V115.961C110.8 115.961 110.812 115.993 110.83 115.993H121.549C124.006 115.993 126 113.848 126 111.205V88.8767C126 58.4563 102.877 33.7339 74.5379 34.0022Z"
            fill="#EEE5E5"
          />
          <path
            d="M75.5687 58.006C59.3214 57.6667 46 71.7526 46 89.1071V116H50.8176C53.196 116 55.1243 113.932 55.1243 111.381V89.5246C55.1243 77.5983 64.2242 67.5836 75.3437 67.7858C86.4631 67.9881 94.8757 77.4743 94.8757 89.1071V111.459C94.8757 113.964 96.7675 116 99.1094 116H104V89.629C104 72.6007 91.445 58.3322 75.5687 58.006Z"
            fill="#EEE5E5"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_395_1103"
            x1="75"
            y1="0"
            x2="75"
            y2="150"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F79461" />
            <stop offset="1" stop-color="#F15B59" />
          </linearGradient>
          <clipPath id="clip0_395_1103">
            <rect
              width="102"
              height="82"
              fill="white"
              transform="translate(24 34)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default RecommendedIcon;
