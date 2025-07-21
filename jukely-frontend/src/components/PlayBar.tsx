import PlayButton from "./PlayButton";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import { useEffect, useState } from "react";

function PlayBar() {
  const [player, setPlayer] = useState(undefined);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb) => {
          cb(import.meta.env.VITE_SPOTIFY_AUTH_TOKEN);
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      player.connect();
    };
  }, []);

  return (
    <main className="sticky bottom-0 bg-darkblue border-2 border-black">
      <div className="flex justify-center p-5">
        <div className="px-5">
          <PreviousButton />
        </div>
        <div className="pt-2.5">
          <PlayButton />
        </div>
        <div className="px-4">
          <NextButton />
        </div>
      </div>
    </main>
  );
}

export default PlayBar;
