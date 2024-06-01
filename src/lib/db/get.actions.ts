"use server";
import { Playlist, PrismaClient, Song } from "@prisma/client";
const prisma = new PrismaClient();
export const getPlaylists = async (): Promise<Playlist[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const playlists = await prisma.playlist.findMany();
      resolve(playlists);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      reject(error);
    }
  });
};

export const getTracks = async (): Promise<Song[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const tracks = await prisma.song.findMany();
      resolve(tracks);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      reject(error);
    }
  });
};
