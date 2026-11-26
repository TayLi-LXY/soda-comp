
export interface ComponentState {
}


export interface CollaborativeFlowModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: CollaborativeFlowModelState = {
  component: defaultComponentState,
  components: {
  },
};
