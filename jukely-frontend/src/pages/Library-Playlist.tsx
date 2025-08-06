import PlaylistCard from "../components/PlaylistCard";
import { dummyResponse } from "../TestResponse/library-playlist-dummy-response";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type SpotifyPlaylistResponse = {
  items: {
    id: string;
    images: {
      url: string;
      height: number;
      width: number;
    }[];
    name: string;
    tracks: {
      total: number;
    };
  }[];
};

function LibraryPlaylist() {
  const [playlists, setPlaylists] = useState<SpotifyPlaylistResponse>();

  useEffect(() => {
    async function getPlaylists() {
      const url = `https://api.spotify.com/v1/users/${
        import.meta.env.VITE_SPOTIFY_USER_ID
      }/playlists`;

      try {
        let json;
        if (import.meta.env.VITE_USE_DUMMY_DATA !== "true") {
          const response = await fetch(url, {
            headers: {
              Authorization: `Bearer ${
                import.meta.env.VITE_SPOTIFY_AUTH_TOKEN
              }`,
            },
          });
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }

          json = await response.json();
        } else {
          json = dummyResponse;
        }

        setPlaylists(json);
      } catch (error) {
        console.error(error.message);
      }
    }
    getPlaylists();
  }, []);

  return (
    <>
      {playlists ? (
        playlists.items.map((playlist, i) => (
          <Link
            key={i}
            to={`/library/playlists/${playlist.id}`}
            state={{
              name: playlist.name,
              num_tracks: playlist.tracks.total,
              url: playlist.images[0].url,
            }}
          >
            <PlaylistCard
              name={playlist.name}
              tracks={playlist.tracks.total}
              runtime={""}
              url={playlist.images[0].url}
            />
          </Link>
        ))
      ) : (
        <p className="text-white m-10 p-10 border-3 border-darkblue rounded-2xl">
          No Playlists Available
        </p>
      )}
    </>
  );
}

export default LibraryPlaylist;
