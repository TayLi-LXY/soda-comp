
export interface ComponentState {
}


export interface BubbleComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: BubbleComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
