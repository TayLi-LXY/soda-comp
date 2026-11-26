
export interface ComponentState {
}


export interface SQLDisplayModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: SQLDisplayModelState = {
  component: defaultComponentState,
  components: {
  },
};
