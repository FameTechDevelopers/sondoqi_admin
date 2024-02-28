import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    user_name: "",
    user_email: "",
    role_name: "",
    _id: null,
  },
};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = UserSlice.actions;

export default UserSlice.reducer;
