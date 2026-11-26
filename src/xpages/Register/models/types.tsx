
export interface PageState {
}


export interface RegisterModelState {
  page: PageState;
  components: {
  };
}

const defaultPageState: PageState = {
};


export const defaultState: RegisterModelState = {
  page: defaultPageState,
  components: {
  },
};
