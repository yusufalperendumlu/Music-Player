const AlbumInfo = ({ album }) => {
  const artists = [];

  console.log(album);
  album?.artists?.forEach((e) => {
    artists.push(e.name);
  });

  return (
    <div className="mt-5 w-3/5">
      <div className="w-full text-xl overflow-hidden font-bold text-white">
        <div className="whitespace-nowrap inline-block animate-marquee pl-[100%]">
          <p className="mt-1">
            {album?.name} - {artists?.join(", ")}{" "}
          </p>
        </div>
      </div>
      {/* <div className="text-sm font-medium text-slate-400">
        <p className="mt-1">{artists?.join(", ")} </p>
      </div> */}
      <div className="text-sm font-semibold text-slate-400 overflow-hidden line-clamp-1 hover:line-clamp-none cursor-pointer">
        <p className="mt-1">{`${album?.album?.name} is an ${
          album?.album?.album_type
        } by ${artists?.join(", ")} with ${album?.total_tracks} track(s)`}</p>
      </div>
      <div className="text-xs font-normal text-slate-400">
        <p className="mt-2">Release Date: {`${album?.release_date}`}</p>
      </div>
    </div>
  );
};

export default AlbumInfo;
