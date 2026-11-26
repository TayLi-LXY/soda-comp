
export interface ComponentState {
}


export interface TableVisualizationModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: TableVisualizationModelState = {
  component: defaultComponentState,
  components: {
  },
};
