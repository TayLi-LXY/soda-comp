
export interface ComponentState {
}


export interface GroupFileModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: GroupFileModelState = {
  component: defaultComponentState,
  components: {
  },
};
