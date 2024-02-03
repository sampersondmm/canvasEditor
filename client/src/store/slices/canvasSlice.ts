import { createSlice } from "@reduxjs/toolkit";

export interface CanvasState {
  selectedShape: string;
}

const initialState: CanvasState = {
  selectedShape: "circle",
};

const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    selectShape: (state, action) => {
      state.selectedShape = action.payload;
    },
  },
});

export const { selectShape } = canvasSlice.actions;

export default canvasSlice.reducer;
