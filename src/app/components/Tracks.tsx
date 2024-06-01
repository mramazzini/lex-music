"use client";
import { getTracks, getPlaylists } from "@/lib/db/get.actions";
import { createTrack, createPlaylist } from "@/lib/db/create.actions";
import { Playlist, Song } from "@prisma/client";
import SoundCloud from "./SoundCloud";
import { useEffect, useState } from "react";

const Tracks = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [tracks, setTracks] = useState<Song[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const playlists = await getPlaylists();
      const tracks = await getTracks();
      setPlaylists(playlists);
      setTracks(tracks);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold">Playlists</h1>
      <ul>
        {playlists.map((playlist) => (
          <SoundCloud key={playlist.id} url={playlist.url} />
        ))}
      </ul>
      <h1 className="text-2xl font-bold mt-4">Tracks</h1>
      <ul>
        {tracks.map((track) => (
          <SoundCloud key={track.id} url={track.url} />
        ))}
      </ul>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const name = prompt("Enter track name");
          const url = prompt("Enter track url");
          if (name && url) {
            const track = await createTrack(name, url);
            document.location.reload();
          }
        }}
      >
        <button className="bg-blue-500 text-white p-2 rounded-lg mt-2">
          Add Track
        </button>
      </form>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const name = prompt("Enter playlist name");
          const url = prompt("Enter playlist url");
          if (name && url) {
            const playlist = await createPlaylist(name, url);
            document.location.reload();
          }
        }}
      >
        <button className="bg-blue-500 text-white p-2 rounded-lg mt-2">
          Add Playlist
        </button>
      </form>
    </div>
  );
};

export default Tracks;
