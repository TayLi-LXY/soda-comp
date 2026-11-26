
export interface ComponentState {
  title: React.ReactNode,
  loading: boolean | React.ReactNode | undefined,
}


export interface QAComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
  title: '数据正在处理中……',
  loading: true,
};


export const defaultState: QAComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
