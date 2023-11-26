import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../models/Task";

// Retrieve the todo list items from local storage
const listItems = localStorage.getItem("todoList");

/**
 * Represents the state of the todo list.
 */
export interface TodoTaskState {
  /**
   * The array of tasks in the todo list.
   */
  todoList: Task[];

  /**
   * Indicates whether the list should repeat after reaching the end.
   */
  repeat: boolean;
}

/**
 * The initial state of the todo list.
 */
const initialState: TodoTaskState = {
  todoList: listItems ? JSON.parse(listItems) : [],
  repeat: false,
};

/**
 * Slice for managing the todo list state.
 */
const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    /**
     * Action to add a task to the todo list.
     * @param state - The current state of the todo list.
     * @param action - The payload containing the task to be added.
     */
    listAdd: (state, action: PayloadAction<Task>) => {
      // Add the task to the todo list
      state.todoList.push(action.payload);
    },
  },
});

export const { listAdd } = todoListSlice.actions;

export default todoListSlice.reducer;
