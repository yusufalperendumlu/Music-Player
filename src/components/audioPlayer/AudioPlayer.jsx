import Controls from "@/components/audioPlayer/Controls";
import ProgressCircle from "@/components/audioPlayer/ProgressCircle";
import WaveAnimation from "@/components/audioPlayer/WaveAnimation";

const AudioPlayer = ({ currentTrack, isPlaying }) => {
  const artists = [];
  currentTrack?.artists?.forEach((e) => {
    artists.push(e.name);
  });

  console.log(artists);
  return (
    <div className="w-full h-1/2 flex flex-row my-4">
      <div className="w-2/5 ml-4">
        <ProgressCircle
          color="#C96850"
          isPlaying={true}
          image={currentTrack?.album?.images[0]?.url}
          size={300}
          percentage={50}
        />
      </div>
      <div className="w-3/5 flex flex-col items-center justify-around">
        <p className=" text-center text-6xl font-semibold m-0 text-[#c4d0e3] truncate display-web">
          {currentTrack?.name}
        </p>
        <p className="text-[#9aa9c2] text-sm font-medium">
          {artists.join(" | ")}
        </p>

        <div className="flex items-center w-full flex-col">
          <div className="w-1/2 flex justify-between mb-5">
            <p className="text-xl font-bold m-0 text-[#c4d0e3]">0:00</p>
            <WaveAnimation isPlaying={isPlaying} />
            <p>
              {currentTrack?.duration_ms
                ? new Date(currentTrack?.duration_ms)
                    .toISOString()
                    .substring(14, 19)
                : "0:00"}
            </p>
          </div>
          <Controls />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
