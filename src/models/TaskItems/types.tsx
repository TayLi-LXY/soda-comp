
export interface ComponentState {
}


export interface TaskItemsModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: TaskItemsModelState = {
  component: defaultComponentState,
  components: {
  },
};
