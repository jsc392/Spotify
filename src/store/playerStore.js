import { songs } from "@/lib/data";
import { create } from "zustand";

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    currentMusic: {playlist: null, song: null, songs: []},
    setCurrentMusic: (currentMusic) => set({ currentMusic }) ,
    volume: 1,
    setVolume: (volume) => set({ volume })
}))