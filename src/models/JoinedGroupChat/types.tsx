
export interface ComponentState {
}


export interface JoinedGroupChatModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: JoinedGroupChatModelState = {
  component: defaultComponentState,
  components: {
  },
};
