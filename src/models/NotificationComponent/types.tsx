
export interface ComponentState {
}


export interface NotificationComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: NotificationComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
