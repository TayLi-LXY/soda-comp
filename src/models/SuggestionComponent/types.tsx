
export interface ComponentState {
}


export interface SuggestionComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: SuggestionComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
