
export interface ComponentState {
}


export interface CodeComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: CodeComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
