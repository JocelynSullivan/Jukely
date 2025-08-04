import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type PlaylistImgProps = {
  className?: string;
  url: string;
};

const PlaylistImg: React.FC<PlaylistImgProps> = () => {
  const [url, setUrl] = useState<string>();
  const { playlist } = useParams();

  useEffect(() => {
    async function getPlaylistImg() {
      const url = `https://api.spotify.com/v1/playlists/${playlist}/images`;

      try {
        let json: PlaylistImgProps[];
        // if (import.meta.env.VITE_USE_DUMMY_DATA !== "true") {
        // prevent spamming API
        if (false) {
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
          json = [
            {
              url: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da845568019adfaa98c181f5d3ec",
              height: 300,
              width: 300,
            },
          ];
        }
        setUrl(json[0].url);
      } catch (error) {
        console.error(error.message);
      }
    }
    getPlaylistImg();
  }, []);

  return (
    <>
      <img src={url} className="rounded-xl" />
    </>
  );
};

export default PlaylistImg;
