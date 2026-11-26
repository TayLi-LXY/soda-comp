
export interface ComponentState {
}


export interface StandardModelEntityContentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: StandardModelEntityContentModelState = {
  component: defaultComponentState,
  components: {
  },
};
