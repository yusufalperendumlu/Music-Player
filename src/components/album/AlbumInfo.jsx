const AlbumInfo = ({ album }) => {
  console.log(album);
  return (
    <div className="">
      <div>
        <p>{album?.name}</p>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
};

export default AlbumInfo;
