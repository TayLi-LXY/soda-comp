
export interface ComponentState {
}


export interface TaskListModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: TaskListModelState = {
  component: defaultComponentState,
  components: {
  },
};
