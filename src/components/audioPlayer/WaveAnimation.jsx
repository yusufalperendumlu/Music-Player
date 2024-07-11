import clsx from "clsx";

export default function WaveAnimation({ isPlaying }) {
  return (
    <div className="flex justify-between h-[54px] w-[calc((4px+8px)*13)]">
      <div
        className={clsx(
          "h-full w-[4px] bg-custom-linear-wave rounded-lg scale-50",
          isPlaying ? "animate-quiet" : ""
        )}
      ></div>
      <div
        className={clsx(
          "h-full w-[4px] bg-custom-linear-wave rounded-lg scale-50",
          isPlaying ? "animate-mid" : ""
        )}
      ></div>
      <div
        className={clsx(
          "h-full w-[4px] bg-custom-linear-wave rounded-lg scale-50",
          isPlaying ? "animate-quiet" : ""
        )}
      ></div>
      <div
        className={clsx(
          "h-full w-[4px] bg-custom-linear-wave rounded-lg scale-50",
          isPlaying ? "animate-loud" : ""
        )}
      ></div>
      <div
        className={clsx(
          "h-full w-[4px] bg-custom-linear-wave rounded-lg scale-50",
          isPlaying ? "animate-quiet" : ""
        )}
      ></div>
      <div
        className={clsx(
          "h-full w-[4px] bg-custom-linear-wave rounded-lg scale-50",
          isPlaying ? "animate-mid" : ""
        )}
      ></div>
      <div
        className={clsx(
          "h-full w-[4px] bg-custom-linear-wave rounded-lg scale-50",
          isPlaying ? "animate-quiet" : ""
        )}
      ></div>
      <div
        className={clsx(
          "h-full w-[4px] bg-custom-linear-wave rounded-lg scale-50",
          isPlaying ? "animate-mid" : ""
        )}
      ></div>
      <div
        className={clsx(
          "h-full w-[4px] bg-custom-linear-wave rounded-lg scale-50",
          isPlaying ? "animate-quiet" : ""
        )}
      ></div>
      <div
        className={clsx(
          "h-full w-[4px] bg-custom-linear-wave rounded-lg scale-50",
          isPlaying ? "animate-loud" : ""
        )}
      ></div>
      <div
        className={clsx(
          "h-full w-[4px] bg-custom-linear-wave rounded-lg scale-50",
          isPlaying ? "animate-quiet" : ""
        )}
      ></div>
      <div
        className={clsx(
          "h-full w-[4px] bg-custom-linear-wave rounded-lg scale-50",
          isPlaying ? "animate-mid" : ""
        )}
      ></div>
      <div
        className={clsx(
          "h-full w-[4px] bg-custom-linear-wave rounded-lg scale-50",
          isPlaying ? "animate-quiet" : ""
        )}
      ></div>
    </div>
  );
}
