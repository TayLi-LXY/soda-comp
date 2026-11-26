
export interface ComponentState {
}


export interface SenderComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: SenderComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
