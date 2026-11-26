export interface ComponentState {
}


export interface QRCodeDisplayModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: QRCodeDisplayModelState = {
  component: defaultComponentState,
  components: {
  },
};
