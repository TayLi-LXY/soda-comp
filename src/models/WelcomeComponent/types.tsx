
export interface ComponentState {
}


export interface WelcomeComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: WelcomeComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
