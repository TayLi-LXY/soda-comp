
export interface ComponentState {
}


export interface FlowOrchestrationModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: FlowOrchestrationModelState = {
  component: defaultComponentState,
  components: {
  },
};
