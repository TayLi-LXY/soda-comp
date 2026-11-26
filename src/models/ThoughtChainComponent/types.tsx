
export interface ComponentState {
}


export interface ThoughtChainComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: ThoughtChainComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
