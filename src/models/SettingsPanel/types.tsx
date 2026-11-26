
export interface ComponentState {
}


export interface SettingsPanelModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: SettingsPanelModelState = {
  component: defaultComponentState,
  components: {
  },
};
