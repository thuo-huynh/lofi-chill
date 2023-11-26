import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  volumeValue: 50,
};

const volumeSlice = createSlice({
  name: "volume",
  initialState,
  reducers: {
    changeVolume: (state, action) => {
      state.volumeValue = action.payload;
    },
  },
});

export const { actions, reducer } = volumeSlice;
export const { changeVolume } = actions;
export default reducer;
