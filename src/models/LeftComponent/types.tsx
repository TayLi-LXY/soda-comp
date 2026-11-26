
export interface ComponentState {
  dialogueListRefreshSignal: string | undefined,
  setPanelVisibleControls: boolean,
}


export interface LeftComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
  dialogueListRefreshSignal: undefined,
  setPanelVisibleControls: false,
};


export const defaultState: LeftComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
