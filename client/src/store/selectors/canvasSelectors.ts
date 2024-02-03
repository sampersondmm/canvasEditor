import { CanvasState } from "../slices/canvasSlice";

interface State {
  canvas: CanvasState;
}

const canvasSelector = (state: State) => {
  return state.canvas;
};

export { canvasSelector };
