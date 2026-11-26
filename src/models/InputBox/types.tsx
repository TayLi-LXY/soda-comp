
export interface ComponentState {
}


export interface InputBoxModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: InputBoxModelState = {
  component: defaultComponentState,
  components: {
  },
};
