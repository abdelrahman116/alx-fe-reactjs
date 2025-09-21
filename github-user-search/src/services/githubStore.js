import { create } from "zustand";
import { fetchGitHubUser } from "../services/github";

const useGithubStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  getUser: async (username) => {
    set({ loading: true, error: null });
    try {
      const data = await fetchGitHubUser(username);
      set({ user: data, loading: false });
    } catch (err) {
      set({
        error: (err.message = "Looks like we cant find the user"),
        loading: false,
      });
    }
  },
}));

export default useGithubStore;
