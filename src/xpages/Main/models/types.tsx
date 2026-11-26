
export interface PageState {
  visibleControlSignalData: string | undefined,
  upgradePlanVisible: boolean,
}


export interface MainModelState {
  page: PageState;
  components: {
  };
}

const defaultPageState: PageState = {
  visibleControlSignalData: '',
  upgradePlanVisible: false,
};


export const defaultState: MainModelState = {
  page: defaultPageState,
  components: {
  },
};
