
export interface PageState {
}


export interface ComponentTestingPageModelState {
  page: PageState;
  components: {
  };
}

const defaultPageState: PageState = {
};


export const defaultState: ComponentTestingPageModelState = {
  page: defaultPageState,
  components: {
  },
};
