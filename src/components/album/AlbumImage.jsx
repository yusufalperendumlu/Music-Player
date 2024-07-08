const AlbumImage = ({ url }) => {
  return (
    <div className="w-4/5 flex items-center justify-center relative z-50">
      <img src={url} alt="album" className="rounded-3xl w-full aspect-square" />
      <div className="w-[90%] absolute -z-10 top-16 blur-lg">
        <img src={url} alt="album" className="w-full h-3/4 rounded-t-3xl" />
      </div>
    </div>
  );
};

export default AlbumImage;