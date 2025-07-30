import PlaylistImg from "../components/PlaylistImg";
import Track from "../components/Track";
import { dummyTrackResponse } from "../TestResponse/track-dummy-response";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type TrackResponse = {
  track: {
    album: {
      images: [
        {
          url: string;
        }
      ];
    };
    artists: [
      {
        name: string;
      }
    ];
    duration_ms: number;
    name: string;
    track_number: number;
  };
};

function Playlist() {
  const [tracks, setTracks] = useState<TrackResponse[]>();
  const { playlist } = useParams();

  useEffect(() => {
    async function getTracks() {
      const url = `https://api.spotify.com/v1/playlists/${playlist}/tracks`;

      try {
        let json;
        if (import.meta.env.VITE_USE_DUMMY_DATA === "true") {
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
          json = dummyTrackResponse;
        }

        setTracks(json.items);
      } catch (error) {
        console.error(error.message);
      }
    }
    getTracks();
  }, []);

  return (
    <>
      <div className=" bg-linear-to-t from-black to-lightblue h-150 w-full p-15">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div>
              <PlaylistImg playlist_id={playlist} />
              <div className="flex justify-center pt-5">
                <h1 className="text-white ">Goblin Playlist</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <p className="text-white p-2 pb-10">xx tracks</p>
            <p className="text-white p-2">runtime</p>
          </div>
        </div>
        <div className="">
          {tracks &&
            tracks.map((track, i) => (
              <Track
                key={i}
                title={track.track.name}
                artist={track.track.artists[0].name}
                duration={track.track.duration_ms}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Playlist;
