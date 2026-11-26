
export interface ComponentState {
}


export interface DataSchemaSingleItemModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: DataSchemaSingleItemModelState = {
  component: defaultComponentState,
  components: {
  },
};
