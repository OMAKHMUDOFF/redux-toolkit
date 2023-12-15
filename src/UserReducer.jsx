import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: "omaxmudovv", email: "omaxmudovv@gmail.com", id: 1 },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, { payload }) => {
      const { id, name, email } = payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        uu.name = name;
        uu.email = email;
      }
    },
    deleteUser: (state, { payload }) => {
      const { id } = payload;
      return state.filter((elem) => elem.id !== id);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
