
export interface ComponentState {
}


export interface QASingleComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: QASingleComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
