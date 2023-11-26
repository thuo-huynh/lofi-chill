import { createSlice } from "@reduxjs/toolkit";

export interface RainState {
  rainMode: string;
  rainValue: number;
}

const initialState: RainState = {
  rainMode: "clear",
  rainValue: 0,
};

const rainSlice = createSlice({
  name: "rain",
  initialState,
  reducers: {
    setRain: (state, action) => {
      state.rainMode = action.payload.rainMode;
      state.rainValue = action.payload.rainValue;
    },
    changeRainStatus: (state, action) => {
      const { currentStatus, value } = action.payload;
      const rainStatus = currentStatus === "rain" ? "clear" : "rain";

      state.rainMode = rainStatus;
      state.rainValue = value;
    },
  },
});

export const { actions, reducer } = rainSlice;
export const { setRain, changeRainStatus } = actions;

export default reducer;
