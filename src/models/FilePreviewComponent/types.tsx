
export interface ComponentState {
}


export interface FilePreviewComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: FilePreviewComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
