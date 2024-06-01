"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const createPlaylist = async (name: string, url: string) => {
  try {
    const playlist = await prisma.playlist.create({
      data: {
        name,
        url,
      },
    });
    return playlist;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const createTrack = async (name: string, url: string) => {
  try {
    const track = await prisma.song.create({
      data: {
        name,
        url,
      },
    });
    return track;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
