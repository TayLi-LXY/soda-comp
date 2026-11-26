
export interface ComponentState {
}


export interface ThinkComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: ThinkComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
