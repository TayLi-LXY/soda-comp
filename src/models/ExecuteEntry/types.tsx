
export interface ComponentState {
}


export interface ExecuteEntryModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: ExecuteEntryModelState = {
  component: defaultComponentState,
  components: {
  },
};
