
export interface ComponentState {
}


export interface ReadUnreadComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: ReadUnreadComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
