
export interface ComponentState {
}


export interface DialogueCardSelectedModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: DialogueCardSelectedModelState = {
  component: defaultComponentState,
  components: {
  },
};
