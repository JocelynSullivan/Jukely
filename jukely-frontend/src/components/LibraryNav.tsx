function LibraryNav() {
  return (
    <>
      <div className="sticky top-0 flex flex-row text-white px-7 p-7 bg-black">
        <div className="px-4">
          <p className="self-center p-1 px-5 bg-darkblue rounded-xl">
            Playlist
          </p>
        </div>
        <div className="px-4">
          <p className="self-center p-1 px-5 bg-darkblue rounded-xl">Album</p>
        </div>
        <div className="px-4">
          <p className="self-center p-1 px-5 bg-darkblue rounded-xl">Artist</p>
        </div>
        <div className="px-4">
          <p className="self-center p-1 px-5 bg-darkblue rounded-xl">Podcast</p>
        </div>
      </div>
    </>
  );
}

export default LibraryNav;
