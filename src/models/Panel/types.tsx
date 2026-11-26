
export interface ComponentState {
  activeSubpanel: string | undefined,
}


export interface PanelModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
  activeSubpanel: undefined,
};


export const defaultState: PanelModelState = {
  component: defaultComponentState,
  components: {
  },
};
