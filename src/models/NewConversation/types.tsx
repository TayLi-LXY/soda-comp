
export interface ComponentState {
}


export interface NewConversationModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: NewConversationModelState = {
  component: defaultComponentState,
  components: {
  },
};
