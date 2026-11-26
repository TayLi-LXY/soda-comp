
export interface ComponentState {
}


export interface PreviewComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: PreviewComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
