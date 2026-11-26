
export interface ComponentState {
}


export interface FeedbackAndReportingComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: FeedbackAndReportingComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
