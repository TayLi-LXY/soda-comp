
export interface ComponentState {
}


export interface CodeHighlightingModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: CodeHighlightingModelState = {
  component: defaultComponentState,
  components: {
  },
};
