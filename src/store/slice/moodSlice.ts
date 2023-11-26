import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moodMode: "chill",
};

const moodSlice = createSlice({
  name: "mood",
  initialState,
  reducers: {
    changeMoodStatus: (state, action) => {
      state.moodMode = action.payload;
    },
  },
});

export const { actions, reducer } = moodSlice;
export const { changeMoodStatus } = actions;
export default reducer;
