
export interface PageState {
}


export interface IndexModelState {
  page: PageState;
  components: {
  };
}

const defaultPageState: PageState = {
};


export const defaultState: IndexModelState = {
  page: defaultPageState,
  components: {
  },
};
