
export interface ComponentState {
}


export interface DataSchemaModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: DataSchemaModelState = {
  component: defaultComponentState,
  components: {
  },
};
