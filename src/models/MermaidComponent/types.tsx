
export interface ComponentState {
}


export interface MermaidComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: MermaidComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
