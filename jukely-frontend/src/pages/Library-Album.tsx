import AlbumCard from "../components/AlbumCard";
import { useEffect, useState } from "react";

type SpotifyAlbumResponse = {
  items: {
    album: {
      total_tracks: number;
    };
    name: string;
    artists: {
      name: string;
    };
  }[];
};

function LibraryAlbum() {
  // const [albums, setAlbums] = useState<SpotifyAlbumResponse>();

  // useEffect(() => {
  //   async function getAlbums() {
  //     const url = "https://api.spotify.com/v1/me/albums";

  //     try {
  //       const response = await fetch(url, {
  //         headers: {
  //           Authorization: `Bearer ${import.meta.env.VITE_SPOTIFY_AUTH_TOKEN}`,
  //         },
  //       });
  //       if (!response.ok) {
  //         throw new Error(`Response status: ${response.status}`);
  //       }

  //       const json = await response.json();
  //       setAlbums(json);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   }
  //   getAlbums();
  // }, []);

  return (
    <>
      <AlbumCard />
    </>
  );
}

export default LibraryAlbum;
