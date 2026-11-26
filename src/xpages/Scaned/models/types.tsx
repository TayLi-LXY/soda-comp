
export interface PageState {
}


export interface ScanedModelState {
  page: PageState;
  components: {
  };
}

const defaultPageState: PageState = {
};


export const defaultState: ScanedModelState = {
  page: defaultPageState,
  components: {
  },
};
