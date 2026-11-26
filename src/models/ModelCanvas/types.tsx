
export interface ComponentState {
}


export interface ModelCanvasModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: ModelCanvasModelState = {
  component: defaultComponentState,
  components: {
  },
};
