import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    getUser: (state, action) => {
      state.users = action.payload.map((user) => {
        return {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          userRole: user.userRole,
        };
      });
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex((x) => x._id === action.payload._id);
      state.users[index] = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        phone: action.payload.phone,
        userRole: action.payload.userRole,
      };
    },
    deleteUser: (state, action) => {
      const id = action.payload._id;
      state.users = state.users.filter((u) => u._id !== id);
    },
  },
});

export const { getUser, addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
