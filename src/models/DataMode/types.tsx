
export interface ComponentState {
}


export interface DataModeModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: DataModeModelState = {
  component: defaultComponentState,
  components: {
  },
};
