
export interface ComponentState {
}


export interface VisualizationChartModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: VisualizationChartModelState = {
  component: defaultComponentState,
  components: {
  },
};
