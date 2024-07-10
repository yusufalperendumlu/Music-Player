import clsx from "clsx";

const Circle = ({ color, percentage, size, strokeWidth }) => {
  const radius = size / 2 - 10;
  const circumference = 2 * Math.PI * radius - 20;
  const offset = circumference - (percentage / 100) * circumference;
  return (
    <circle
      className="transition-all duration-1000 ease-in-out rotate-[93deg] origin-half"
      stroke={offset !== circumference ? color : ""}
      fill="transparent"
      strokeWidth={strokeWidth}
      strokeDasharray={circumference}
      strokeDashoffset={percentage ? offset : 0}
      strokeLinecap="round"
      r={radius}
      cx={size / 2}
      cy={size / 2}
    />
  );
};

const ProgressCircle = ({ percentage, isPlaying, size, color, image }) => {
  return (
    <div className="flex items-center justify-center">
      <svg height={size} width={size}>
        <Circle strokeWidth={"0.4rem"} color={"#3B4F73"} size={size} />
        <Circle
          strokeWidth={"0.6rem"}
          color={color}
          size={size}
          percentage={percentage}
        />
        <defs>
          <clipPath id="myCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 30} fill="#FFFFFF" />
          </clipPath>
          <clipPath id="myInnerCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 100} fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          className={clsx("", isPlaying ? "animate-rounded origin-half" : "")}
          x={30}
          y={30}
          width={2 * (size / 2 - 30)}
          height={2 * (size / 2 - 30)}
          href="https://pngimg.com/uploads/vinyl/vinyl_PNG107.png"
          clipPath="url(#myCircle)"
        />
        <image
          className={clsx("", isPlaying ? "animate-rounded origin-half" : "")}
          x={100}
          y={100}
          width={2 * (size / 2 - 100)}
          height={2 * (size / 2 - 100)}
          href={image}
          clipPath="url(#myInnerCircle)"
        />
      </svg>
    </div>
  );
};

export default ProgressCircle;
