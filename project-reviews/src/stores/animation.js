import axios from "axios";
import create from "zustand";

// slice
const sliceAnimation = (set) => ({
  // state (IMMUTABLE)
  animations: [],
  isLoading: false,
  error: null,

  // actions
  // 1. comot data dari jikan.moe
  fetchAnimationsFromJikan: async () => {
    try {
      // isLoading = true;
      set({ isLoading: true });

      const { data } = await axios.get("https://api.jikan.moe/v4/top/anime");
      set((state) => ({
        ...state,
        isLoading: false,
        animations: data.data,
      }));
    } catch (err) {
      set({
        isLoading: false,
        error: err,
      });
    }
  },
});

// hooks
const useAnimationStore = create(sliceAnimation);

// selector
export const selectAnimations = (state) => state.animations;
export const selectIsLoading = (state) => state.isLoading;
export const selectError = (state) => state.error;
export const selectFetchAnimations = (state) => state.fetchAnimationsFromJikan;

// export
export default useAnimationStore;
