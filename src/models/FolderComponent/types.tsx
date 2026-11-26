
export interface ComponentState {
}


export interface FolderComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: FolderComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
