
export interface ComponentState {
}


export interface ActionsComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: ActionsComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
