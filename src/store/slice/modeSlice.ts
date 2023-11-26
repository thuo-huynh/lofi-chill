import { createSlice } from "@reduxjs/toolkit";

export interface ModeState {
  mode: string;
}

const initialState: ModeState = {
  mode: "night",
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    changeDayNight: (state) => {
      state.mode = state.mode === "day" ? "night" : "day";
    },
  },
});

export const { actions, reducer } = modeSlice;
export const { setMode, changeDayNight } = actions;
export default reducer;
