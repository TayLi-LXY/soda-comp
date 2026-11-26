
export interface ComponentState {
}


export interface RequirementComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: RequirementComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
