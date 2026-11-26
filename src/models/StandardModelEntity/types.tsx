
export interface ComponentState {
}


export interface StandardModelEntityModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: StandardModelEntityModelState = {
  component: defaultComponentState,
  components: {
  },
};
