
export interface ComponentState {
}


export interface DataPreviewComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: DataPreviewComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
