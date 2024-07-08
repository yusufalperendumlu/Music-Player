import AlbumImage from "@/components/album/AlbumImage";
import AlbumInfo from "@/components/album/AlbumInfo";

const SongCard = ({ album }) => {
  return (
    <div className="w-full h-2/3 bg-[#27354d] rounded-3xl rounded-br-none flex flex-col items-center justify-center">
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
    </div>
  );
};

export default SongCard;