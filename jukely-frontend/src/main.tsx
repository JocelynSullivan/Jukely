import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import LibraryPlaylist from "./pages/Library-Playlist.tsx";
import LibraryAlbum from "./pages/Library-Album.tsx";
import LibraryArtist from "./pages/Library-Artist.tsx";
import LibraryPodcast from "./pages/Library-Podcast.tsx";
import Library from "./pages/Library.tsx";
import Playlist from "./pages/Playlist.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="library" element={<Library />}>
            <Route path="playlists" element={<LibraryPlaylist />} />
            <Route path="album" element={<LibraryAlbum />} />
            <Route path="artist" element={<LibraryArtist />} />
            <Route path="podcast" element={<LibraryPodcast />} />
            <Route path="playlists/:playlist" element={<Playlist />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
