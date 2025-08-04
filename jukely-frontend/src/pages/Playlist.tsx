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
  url: string;
};

function millisToMinutesAndSeconds(duration_ms: number) {
  const date = new Date(duration_ms);
  return `${date.getMinutes()}:${date.getSeconds()}`;
}

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
  const { name, num_tracks, url } = location.state as PlaylistProps;

  return (
    <div className=" bg-linear-to-b from-darkblue via-black to-lightblue w-full px-15 py-10 rounded-xl">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <div>
            <PlaylistImg url={url} />
            <div className="flex justify-center pt-3">
              <h1 className="text-white ">{name}</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <p className="text-white text-[.75em] pb-10">{num_tracks} songs</p>
        </div>
      </div>
      <div className="">
        {tracks &&
          tracks.map((track, i) => (
            <Track
              key={i}
              title={track.track.name}
              artist={track.track.artists[0].name}
              duration={millisToMinutesAndSeconds(track.track.duration_ms)}
            />
          ))}
      </div>
    </div>
  );
}

export default Playlist;
