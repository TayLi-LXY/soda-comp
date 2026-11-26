
export interface ComponentState {
}


export interface PageDesignModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: PageDesignModelState = {
  component: defaultComponentState,
  components: {
  },
};
