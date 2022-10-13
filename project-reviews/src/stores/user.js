import axios from "axios";
import produce from "immer";
import create from "zustand";

// slice
const sliceUser = (set) => ({
  // state
  users: [],
  newUser: undefined,

  // actions
  fetchSeluruhUsers: async () => {
    try {
      const { data } = await axios.get("https://reqres.in/api/users");

      // set({ users: data.data });

      set(
        produce((state) => {
          // perlakukan seluruh state yang ada seperti "mutable"
          state.users = data.data;
        })
      );
    } catch (err) {
      console.log(err);
    }
  },

  createUserBaru: async (name, job) => {
    try {
      const { data } = await axios.post("https://reqres.in/api/users", {
        name,
        job,
      });

      set((state) => ({ ...state, newUser: data }));
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  },
});

// hooks
const useUserStore = create(sliceUser);

// selector
export const selectUsers = (state) => state.users;
export const selectNewUser = (state) => state.newUser;
export const selectFetchUsers = (state) => state.fetchSeluruhUsers;
export const selectCreateUserBaru = (state) => state.createUserBaru;

//export
export default useUserStore;
