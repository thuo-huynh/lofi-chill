import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  volumeValue: 50,
  isMuted: false,
};

const volumeSlice = createSlice({
  name: "volume",
  initialState,
  reducers: {
    changeVolume: (state, action) => {
      state.volumeValue = action.payload.volumeValue;
      state.isMuted = action.payload.isMuted;
    },
  },
});

export const { actions, reducer } = volumeSlice;
export const { changeVolume } = actions;
export default reducer;
