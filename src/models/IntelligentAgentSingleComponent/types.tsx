
export interface ComponentState {
}


export interface IntelligentAgentSingleComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: IntelligentAgentSingleComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
