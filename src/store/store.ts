import todoListReducer from "./slice/todoListSlice";
import modeSlice from "./slice/modeSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
const rootReducer = combineReducers({
  todoList: todoListReducer,
  mode: modeSlice,
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
