import ProgressCircle from "@/components/audioPlayer/ProgressCircle";

const AudioPlayer = ({ currentTrack }) => {
  return (
    <div className="w-full h-2/5 flex flex-row my-4">
      <div className="w-2/5 ">
        <ProgressCircle
          color="#C96850"
          isPlaying={true}
          image={currentTrack?.album.images[0]?.url}
          size={300}
          percentage={60}
        />
      </div>
      <div className="w-3/5"></div>
    </div>
  );
};

export default AudioPlayer;
