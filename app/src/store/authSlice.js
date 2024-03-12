import { createSlice } from "@reduxjs/toolkit";
import { internalMemory } from "../utility/internalMemory";

const authSlice = () => {
  const token = internalMemory.get("token") || null;
  const id = internalMemory.get("id") || null;

  return createSlice({
    name: "auth",
    initialState: {
      token,
      id,
    },
    reducers: {
      login: (state, action) => {
        state.token = action.payload.token;
        state.id = action.payload.id;
        internalMemory.save("token", action.payload.token);
        internalMemory.save("id", action.payload.id);
      },
      logout: (state, _) => {
        state.token = null;
        state.id = null;
        internalMemory.remove("token");
        internalMemory.remove("id");
      },
    },
  });
};

export default authSlice().reducer;
export const { login, logout } = authSlice().actions;
