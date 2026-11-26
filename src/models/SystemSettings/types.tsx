
export interface ComponentState {
}


export interface SystemSettingsModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: SystemSettingsModelState = {
  component: defaultComponentState,
  components: {
  },
};
