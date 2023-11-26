import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import modeSlice from "./slice/modeSlice";
import moodSlice from "./slice/moodSlice";
import rainSlice from "./slice/rainSlice";
import todoListSlice from "./slice/todoListSlice";
import volumeSlice from "./slice/volumeSlice";
export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const rootReducer = combineReducers({
  todoList: todoListSlice,
  mode: modeSlice,
  mood: moodSlice,
  volume: volumeSlice,
  rain: rainSlice,
});

/**
 * The Redux store for the application.
 */
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
