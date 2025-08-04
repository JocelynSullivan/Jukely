import PlaylistImg from "../components/PlaylistImg";
import Track from "../components/Track";
import { dummyTrackResponse } from "../TestResponse/track-dummy-response";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

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

type PlaylistProps = {
  name: string;
  num_tracks: number;
};

// function millisToMinutesAndSeconds({track.duration_ms}:TrackResponse) {
//   let minutes =
// }

function Playlist() {
  const [tracks, setTracks] = useState<TrackResponse[]>();
  const { playlist } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function getTracks() {
      const url = `https://api.spotify.com/v1/playlists/${playlist}/tracks`;

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
          json = dummyTrackResponse;
        }

        setTracks(json.items);
      } catch (error) {
        console.error(error.message);
      }
    }
    getTracks();
  }, []);
  const { name, num_tracks } = location.state as PlaylistProps;

  return (
    <div className=" bg-linear-to-t from-black to-lightblue w-full p-15 rounded-xl">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <div>
            <PlaylistImg />
            <div className="flex justify-center pt-5">
              <h1 className="text-white ">{name}</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <p className="text-white p-2 pb-10">{num_tracks}</p>
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
  );
}

export default Playlist;
